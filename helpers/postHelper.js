import path from "path";

export const __dirname = path.resolve();

export const createPath = (file) =>
  path.resolve(__dirname, "views", `${file}.ejs`);
