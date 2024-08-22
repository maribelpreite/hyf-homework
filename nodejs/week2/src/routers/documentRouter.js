import express from "express";
import { readJSONFile } from "../readJSONFile.js";

const documentRouter = express.Router();

documentRouter.get("/:id?", async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res
      .status(400)
      .json({ error: "Please provide a specific document ID number." });
  }

  try {
    const document = await readJSONFile("./src/documents.json");
    const documentID = document.find((obj) => obj.id === Number(id));

    if (documentID) {
      res.json(documentID);
    } else {
      res
        .status(404)
        .json({ error: "The ID number you provided does not exist." });
    }
  } catch (error) {
    console.error("Something went wrong with the server", error);
    res.status(500).json({ error: "Error while processing your request." });
  }
});

export default documentRouter;
