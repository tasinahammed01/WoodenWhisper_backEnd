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
exports.getImages = void 0;
const imagesModules_1 = require("../modules/imagesModules"); // Assuming this is your Mongoose model
// Function to handle getting all images
const getImages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield imagesModules_1.Image.find();
        // console.log(images)
        res.status(200).json(images);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});
exports.getImages = getImages;
