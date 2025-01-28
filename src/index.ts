// initiate the project.
import "./init.js";

import express from "express";
import cors from "cors";

import { errorHandler } from "./middleware/index.js";

const app = express();
const port = process.env.SERVER_PORT ?? 3000;

//* Middleware
app.use(express.json());
app.use(cors());
app.use(errorHandler);

//* Routes

/**
 * This represents the path with the application server. (useful for scalable applications)
 */
const baseServerPath = `/api/${process.env.API_VERSION}`;

//! This portion is for .http file variables usage only.
if (process.env.NODE_ENV === "development") {
  app.get(`${baseServerPath}/random`, (req, res) => {
    res.status(200).json({ value: Math.round(Math.random() * 1_000_000_000) });
  });
}

const protocol = "http";
const host = process.env.SERVER_HOST;
const baseURL = `${protocol}://${host}:${port}${baseServerPath}`;
console.log(baseURL);
app.listen(port, () => {
  console.log(`Server running at ${baseURL}`);
});
