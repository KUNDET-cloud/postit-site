import { createPath } from "../helpers/postHelper.js";

export const signUpPage = (req, res) => {
  res.render(createPath("signUp"), { title: "SignUp" });
};

export const signInPage = (req, res) => {
  res.render(createPath("signIn"), { title: "SignIn" });
};
