import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Appointment } from "@/models/Appointment";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const db = await connectToDatabase();

    let newAppointment = null;
    if (db) {
      newAppointment = await Appointment.create(body);
    }

    return NextResponse.json(
      { 
        message: "Appointment request processed successfully", 
        appointment: newAppointment,
        dbConnected: Boolean(db)
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error processing appointment:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

