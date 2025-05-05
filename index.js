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

MongoClient.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("MongoDB Connected");
    db = client.db(); // Get the database instance

    // Routes
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

    // Get all journals
    app.get("/journals", async (req, res) => {
      try {
        const journals = await db
          .collection("journalscollection")
          .find()
          .toArray();
        res.status(200).json(journals);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch journals" });
      }
    });

    // Root route (same as images)
    app.get("/", async (req, res) => {
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

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
