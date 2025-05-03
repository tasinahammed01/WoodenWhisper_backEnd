"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImages = void 0;
const imagesModules_1 = require("../modules/imagesModules"); // Assuming this is your Mongoose model
// Function to handle getting all images
const getImages = async (_req, res) => {
    try {
        const images = await imagesModules_1.Image.find();
        // console.log(images)
        res.status(200).json(images);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
};
exports.getImages = getImages;
