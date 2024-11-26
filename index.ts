import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// CONFIGURATION THE '.env' FILE
dotenv.config();

// CREATE EXPRESS APP
const app: Express = express();
const port: string | number = process.env.PORT || 8000;

// DEFINE THE FIRST ROUTE OF APP
app.get("/", (request: Request, response: Response) => {
  // SEND HELLO WORLD
  response.send("Hello world XD this is my intro to TYPESCRIPT");
});

// EXCUTE APP AND LISTES TO PORT
app.listen(port, () => {
  console.log(`EXPRESS SERVER:Running at http://localhost:${port}`);
});
