import mongoose, { Schema, Document } from "mongoose";

export interface IAppointment extends Document {
  fullName: string;
  phone: string;
  specialty: string;
  preferredDate: string;
  message?: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date;
}

const AppointmentSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
  preferredDate: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const Appointment = mongoose.models.Appointment || mongoose.model<IAppointment>("Appointment", AppointmentSchema);
