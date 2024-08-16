import express from "express";
import { readJSONFile } from "../readJSONFile.js";

const searchRouter = express.Router();

searchRouter.get("/", async (req, res) => {
  try {
    const document = await readJSONFile("./src/documents.json");
    const query = req.query.q;

    if (query) {
      const filteredSearch = document.filter((obj) => {
        return Object.values(obj).some((value) => {
          if (typeof value === "string") {
            return value.toLowerCase().includes(query.toLowerCase());
          }
          return false;
        });
      });
      res.json(filteredSearch);
    } else {
      res.json(document);
    }
  } catch (error) {
    console.error(
      "Something went wrong while trying to search for your document:",
      error,
    );
    res.status(500).json({ error: "Error while processing your request." });
  }
});

export default searchRouter;
