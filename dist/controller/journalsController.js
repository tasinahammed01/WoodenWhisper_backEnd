"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJournals = void 0;
const journalsModules_1 = require("../modules/journalsModules"); // Assuming this is your Mongoose model
// Function to handle getting all images
const getJournals = async (_req, res) => {
    try {
        const journals = await journalsModules_1.Journals.find();
        // console.log(journals);
        res.status(200).json(journals);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
};
exports.getJournals = getJournals;
