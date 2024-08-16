import express from "express";
import searchRouter from "./routers/searchRouter.js";
import documentRouter from "./routers/documentRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/search", searchRouter);
app.use("/documents", documentRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
