import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import "reflect-metadata";
import { routes } from "./adapters/routes";
import AppDataSource from "./data-source";

const port = process.env.PORT || 3000; // default port to listen
dotenv.config();
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.initializeDataBase();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use("/", routes);

    this.app.use((_, res) => {
      res.status(404).json({
        message: "Page not found",
        errorCode: "ERROR_NOT_FOUND",
      });
    });
  }

  private initializeDataBase(): void {
    AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization:", err);
    });
  }
}

export const app = new App().app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
