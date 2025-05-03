"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imagesController_1 = require("../controller/imagesController");
const journalsController_1 = require("../controller/journalsController");
const router = (0, express_1.Router)();
router.get("/", imagesController_1.getImages);
router.get("/images", imagesController_1.getImages);
// Journals routes
router.get("/journals", journalsController_1.getJournals);
exports.default = router;
