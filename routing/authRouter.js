import { Router } from "express";

import { signUpPage, signInPage } from "../cotrollers/authController.js";

const authRouter = new Router();

authRouter.get("/signup", signUpPage);
authRouter.get("/signin", signInPage);

export default authRouter;
