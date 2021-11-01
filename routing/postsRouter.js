import Router from "express";

import PostController from "../cotrollers/postsController.js";

const postsRouter = new Router();

postsRouter.get("/", PostController.getHome);
postsRouter.get("/posts", PostController.getPosts);
postsRouter.get("/posts/:id", PostController.getPost);
postsRouter.delete("/posts/:id", PostController.deletePost);
postsRouter.get("/create-post", PostController.getCreatePost);
postsRouter.post("/create-post", PostController.createPost);

export default postsRouter;
