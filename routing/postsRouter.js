import Router from "express";

import {
  getHome,
  getPosts,
  getPost,
  deletePost,
  getCreatePost,
  createPost,
} from "../cotrollers/postsController.js";

const postsRouter = new Router();

postsRouter.get("/", getHome);
postsRouter.get("/posts", getPosts);
postsRouter.get("/posts/:id", getPost);
postsRouter.delete("/posts/:id", deletePost);
postsRouter.get("/create-post", getCreatePost);
postsRouter.post("/create-post", createPost);

export default postsRouter;
