import express from "express";
import mongoose from "mongoose";
import postsRouter from "./routing/postsRouter.js";
import { config } from "dotenv";

config();

const app = express();

app.set("view engine", "ejs");

app.use(express.static("styles"));
app.use(express.urlencoded({ extended: false }));
app.use(postsRouter);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
