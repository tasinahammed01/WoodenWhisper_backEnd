import { Router } from "express";
import { getImages } from "../controller/imagesController";
import { getJournals } from "../controller/journalsController";

const router = Router();

router.get("/", getImages);
router.get("/images", getImages);

// Journals routes

router.get("/journals", getJournals)

export default router;
