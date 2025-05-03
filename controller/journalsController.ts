import { Request, Response } from "express";
import { Journals } from "../models/journalsModels"; // Assuming this is your Mongoose model

// Function to handle getting all images
export const getJournals = async (_req: Request, res: Response) => {
  try {
    const journals = await Journals.find();
    // console.log(journals);
    res.status(200).json(journals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch images" });
  }
};
