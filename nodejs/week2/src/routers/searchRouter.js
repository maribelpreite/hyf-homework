import express from "express";
import { readJSONFile } from "../readJSONFile.js";

const searchRouter = express.Router();

searchRouter.get("/", async (req, res) => {
  try {
    const document = await readJSONFile("./src/documents.json");
    const query = req.query.q;
    let filteredSearch = [];

    if (query) {
      filteredSearch = document.filter((obj) => {
        return Object.values(obj).some((value) => {
            return typeof value === 'string' && value.toLowerCase().includes(query.toLowerCase());
        });
      });
    } else {
      filteredSearch = document;
    }
    res.json(filteredSearch);
  } catch (error) {
    console.error(
      "Something went wrong while trying to search for your document:",
      error,
    );
    res.status(500).json({ error: "Error while processing your request." });
  }
});

export default searchRouter;
