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
          return (
            typeof value === "string" &&
            value.toLowerCase().includes(query.toLowerCase())
          );
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

searchRouter.post("/", async (req, res) => {
  const query = req.query.q;
  const fields = req.body.fields;

  if (query && fields) {
    return res
      .status(400)
      .json({
        error:
          "Both the query and the request body cannot be provided together.",
      });
  }

  try {
    const document = await readJSONFile("./src/documents.json");
    let filteredSearch = [];

    if (query) {
      filteredSearch = document.filter((obj) =>
        Object.values(obj).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    } else if (fields) {
      filteredSearch = document.filter((obj) =>
        Object.entries(fields).every(
          ([key, value]) => String(obj[key]) === String(value),
        ),
      );
    } else {
      filteredSearch = document;
    }
    res.json(filteredSearch);
  } catch (error) {
    console.error("Something went wrong with the server:", error);
    res.status(500).json({ error: "Error while processing your request." });
  }
});

export default searchRouter;
