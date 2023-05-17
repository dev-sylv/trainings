import express, { Application, Request, Response } from "express";
import { appConfig } from "./app";
import { dbConfig } from "./config/db";

const port = 2023;

const app: Application = express();
appConfig(app);
dbConfig();

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "api is ready for consumption",
  });
});

app.listen(port, () => {
  console.log(`server is up on port : ${port}`);
});
