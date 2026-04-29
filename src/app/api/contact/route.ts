import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newContact = await Contact.create(body);

    return NextResponse.json(
      { message: "Message sent successfully", contact: newContact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
