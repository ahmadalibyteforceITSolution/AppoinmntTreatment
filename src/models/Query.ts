import mongoose, { Schema, Document } from "mongoose";

export interface IQuery extends Document {
  phone: string;
  email: string;
  message: string;
  status: "new" | "contacted" | "resolved";
  createdAt: Date;
}

const QuerySchema: Schema = new Schema({
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ["new", "contacted", "resolved"], default: "new" },
  createdAt: { type: Date, default: Date.now },
});

export const Query = mongoose.models.Query || mongoose.model<IQuery>("Query", QuerySchema);
