"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    category: { type: String, required: true },
    image: { type: String, required: true },
}, { collection: "imagesCollections", timestamps: true });
exports.Image = (0, mongoose_1.model)("Image", imageSchema);
