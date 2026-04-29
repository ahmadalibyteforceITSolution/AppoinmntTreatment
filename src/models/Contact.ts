import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  fullName: string;
  phone: string;
  message: string;
  status: "unread" | "read" | "replied";
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ["unread", "read", "replied"], default: "unread" },
  createdAt: { type: Date, default: Date.now },
});

export const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);
