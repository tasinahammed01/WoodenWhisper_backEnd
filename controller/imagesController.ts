import { Request, Response } from "express";
import { Image } from "../models/imagesModule"; // Assuming this is your Mongoose model

// Function to handle getting all images
export const getImages = async (_req: Request, res: Response) => {
  try {
    const images = await Image.find(); 
    // console.log(images)
     res.status(200).json(images); 
  } catch (error) {
    console.error(error);
     res.status(500).json({ error: "Failed to fetch images" });
  }
};
