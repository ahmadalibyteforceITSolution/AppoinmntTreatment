import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Contact } from "@/models/Contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await connectToDatabase();

    let newContact = null;
    if (db) {
      newContact = await Contact.create(body);
    }

    return NextResponse.json(
      { 
        message: "Message processed successfully", 
        contact: newContact,
        dbConnected: Boolean(db)
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error saving contact message:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

