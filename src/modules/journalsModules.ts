import { Schema, model, Document } from "mongoose";

export interface IJournals extends Document {
  title: string;
  image: string;
  description: string;

}

const imageSchema = new Schema<IJournals>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: "journalsCollection",timestamps: true }
);

export const Journals = model<IJournals>("Journals", imageSchema);