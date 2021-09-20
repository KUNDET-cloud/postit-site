import express from "express";
import mongoose from "mongoose";
import path from "path";

import Post from "./models/post.js";

const app = express();

const PORT = process.env.PORT || 3000;
const DB_URL =
  "mongodb+srv://kundet:tednuk@cluster0.pbpma.mongodb.net/poster-app?retryWrites=true&w=majority";
const __dirname = path.resolve();

const createPath = (file) => path.resolve(__dirname, "views", `${file}.ejs`);

app.set("view engine", "ejs");

app.use(express.static("styles"));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render(createPath("index"));
});

app.get("/posts", (req, res) => {
  Post.find()
    .then((posts) => res.render(createPath("posts"), { posts }))
    .catch((e) => res.render(createPath("error"), { code: 500 }));
});

app.get("/create-post", (req, res) => {
  res.render(createPath("create-post"));
});

app.post("/create-post", (req, res) => {
  const { author, title, text } = req.body;
  const post = new Post({ author, title, text });

  post
    .save()
    .then(() => {
      Post.find()
        .then((posts) => res.render("posts", { posts }))
        .catch((e) => res.render(createPath("error"), { code: 500 }));
    })
    .catch((e) => res.render(createPath("error"), { code: 500 }));
});

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
