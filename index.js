require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
let db;

MongoClient.connect(MONGO_URI)
  .then((client) => {
    console.log("MongoDB Connected");
    db = client.db("test"); // Explicitly use 'test' DB

    // === ROUTES ===

    // Get all images
    app.get("/images", async (req, res) => {
      try {
        const images = await db
          .collection("imagesCollections")
          .find()
          .toArray();
        res.status(200).json(images);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch images" });
      }
    });

    // Create an image
    app.post("/images", async (req, res) => {
      try {
        const imageData = req.body;
        const result = await db
          .collection("imagesCollections")
          .insertOne(imageData);
        res.status(201).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create image" });
      }
    });

    // GET /images/category/:categoryName
    app.get("/images/category/:categoryName", async (req, res) => {
      const categoryName = req.params.categoryName;

      try {
        const filteredImages = await db
          .collection("imagesCollections")
          .find({ category: categoryName })
          .toArray();

        res.status(200).json(filteredImages);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch filtered images" });
      }
    });

    // Get all journals
    app.get("/journals", async (req, res) => {
      try {
        const journals = await db
          .collection("journalsCollection")
          .find()
          .toArray();
        res.status(200).json(journals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch journals" });
      }
    });

    // Create a journal
    app.post("/journals", async (req, res) => {
      try {
        const journalData = req.body;
        const result = await db
          .collection("journalsCollection")
          .insertOne(journalData);
        res.status(201).json(result);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to create journal" });
      }
    });

    // GET a single journal by ID
    app.get("/journals/:id", async (req, res) => {
      const { id } = req.params;
      const { ObjectId } = require("mongodb");

      try {
        const journal = await db
          .collection("journalscollection")
          .findOne({ _id: new ObjectId(id) });

        if (!journal) {
          return res.status(404).json({ error: "Journal not found" });
        }

        res.status(200).json(journal);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch journal" });
      }
    });

    // Root route - returns all images (same as /images)
    app.get("/", (req, res) => {
      res.status(200).send("Welcome to the Wooden Whisper API");
    });

    // Start the server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
