import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Query } from "@/models/Query";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, phone, message } = await req.json();

    if (!email || !phone || !message) {
      return NextResponse.json(
        { message: "Email, phone number, and message are required." },
        { status: 400 }
      );
    }

    // 1. Save to Database if connected
    const db = await connectToDatabase();
    let savedQuery = null;
    if (db) {
      savedQuery = await Query.create({
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
    }

    // 2. Dispatch Email to Clinic's Respective Email
    const receiverEmail =
      process.env.CLINIC_EMAIL ||
      process.env.RECEIVER_EMAIL ||
      "faizahafeez28@gmail.com";

    let emailSent = false;
    let emailInfo = "";

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"Dr. Faiza Hafeez Clinic Website" <${smtpUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: `[New Patient Query] from ${phone}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #fce7f3; border-radius: 12px; background-color: #ffffff;">
              <div style="background-color: #db2777; padding: 15px; border-radius: 8px; color: #ffffff; text-align: center;">
                <h2 style="margin: 0; font-size: 20px;">Dr. Faiza Hafeez Clinic - New Query</h2>
              </div>
              <div style="padding: 20px 0;">
                <p style="font-size: 14px; color: #475569;">You have received a new consultation query submitted through the website popup form:</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                  <tr>
                    <td style="padding: 8px; font-weight: bold; color: #334155; width: 30%; border-bottom: 1px solid #f1f5f9;">Patient Phone:</td>
                    <td style="padding: 8px; color: #0f172a; border-bottom: 1px solid #f1f5f9;"><a href="tel:${phone}" style="color: #db2777; text-decoration: none; font-weight: bold;">${phone}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; color: #334155; border-bottom: 1px solid #f1f5f9;">Patient Email:</td>
                    <td style="padding: 8px; color: #0f172a; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #db2777; text-decoration: none;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; color: #334155; vertical-align: top; border-bottom: 1px solid #f1f5f9;">Message / Query:</td>
                    <td style="padding: 8px; color: #0f172a; border-bottom: 1px solid #f1f5f9; white-space: pre-wrap;">${message}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px; font-weight: bold; color: #334155;">Received At:</td>
                    <td style="padding: 8px; color: #64748b;">${new Date().toLocaleString()}</td>
                  </tr>
                </table>
              </div>
              <div style="font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 15px;">
                This message was automatically submitted from the Dr. Faiza Hafeez website pop-up inquiry form.
              </div>
            </div>
          `,
        });
        emailSent = true;
      } catch (mailErr: any) {
        console.error("Failed to send email via SMTP:", mailErr);
        emailInfo = mailErr?.message || "Failed to dispatch email";
      }
    } else {
      console.log("Query recorded (SMTP not configured in env):", {
        to: receiverEmail,
        phone,
        email,
        message,
      });
      emailInfo = "SMTP credentials not configured in environment; query recorded.";
    }

    // 3. Format message details for clinic phone number
    const clinicNumber = "923344280522";
    const waText = `Hello Dr. Faiza Hafeez, I have an inquiry:\n\n*Phone:* ${phone}\n*Email:* ${email}\n*Query:* ${message}`;
    const whatsappUrl = `https://wa.me/${clinicNumber}?text=${encodeURIComponent(
      waText
    )}`;

    return NextResponse.json(
      {
        message: "Query processed successfully",
        query: savedQuery,
        emailSent,
        emailInfo,
        whatsappUrl,
        clinicNumber,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error processing query:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
