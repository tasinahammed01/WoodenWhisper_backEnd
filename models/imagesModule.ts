import { Schema, model, Document } from "mongoose";

export interface IImage extends Document {
  category: string;
  image: string;
}

const imageSchema = new Schema<IImage>(
  {
    category: { type: String, required: true },
    image: { type: String, required: true },
  },
  { collection: "imagesCollections",timestamps: true }
);

export const Image = model<IImage>("Image", imageSchema);
