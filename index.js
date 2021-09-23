import express from "express";
import mongoose from "mongoose";
import postsRouter from "./routing/postsRouter.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("styles"));
app.use(express.urlencoded({ extended: false }));
app.use(postsRouter);

const PORT = process.env.PORT || 3000;
const DB_URL =
  "mongodb+srv://kundet:tednuk@cluster0.pbpma.mongodb.net/poster-app?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
