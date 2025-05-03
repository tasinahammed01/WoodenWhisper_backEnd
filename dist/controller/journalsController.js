"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJournals = void 0;
const journalsModules_1 = require("../modules/journalsModules"); // Assuming this is your Mongoose model
// Function to handle getting all images
const getJournals = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const journals = yield journalsModules_1.Journals.find();
        // console.log(journals);
        res.status(200).json(journals);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});
exports.getJournals = getJournals;
