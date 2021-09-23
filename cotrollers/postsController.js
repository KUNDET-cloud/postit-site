import Post from "../models/post.js";
import { createPath } from "../helpers/postHelper.js";

const errorHandler = (response) =>
  response.render(createPath("error"), { code: "Error", title: "Error" });

export const getHome = (req, res) => {
  res.render("index", { title: "Home" });
};

export const getPosts = (req, res) => {
  Post.find()
    .then((posts) => res.render(createPath("posts"), { posts, title: "Posts" }))
    .catch(() => errorHandler(res));
};

export const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) =>
      res.render(createPath("post"), { post, title: "View post" })
    )
    .catch(() => errorHandler(res));
};

export const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.statusCode(200))
    .catch(() => errorHandler(res));
};

export const getCreatePost = (req, res) => {
  res.render(createPath("create-post"), { title: "Create post" });
};

export const createPost = (req, res) => {
  const { author, title, text } = req.body;
  const post = new Post({ author, title, text });

  post
    .save()
    .then(() => res.redirect("/posts"))
    .catch(() => errorHandler(res));
};
