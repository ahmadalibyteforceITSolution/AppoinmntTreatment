import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Appointment } from "@/models/Appointment";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newAppointment = await Appointment.create(body);

    return NextResponse.json(
      { message: "Appointment booked successfully", appointment: newAppointment },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error booking appointment:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
