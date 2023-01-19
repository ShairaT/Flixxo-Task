import express, { Request, Response, Application } from "express";
import * as dotenv from "dotenv";
import "reflect-metadata";
import { auth } from "express-openid-connect";

// import { routes } from "./adapters/routes";

const port = process.env.PORT || 3000; // default port to listen
dotenv.config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "a long, randomly-generated string stored in env",
  baseURL: "http://localhost:3000",
  clientID: "BrkfKS04gueXKWxytzhgb6biTLVnLSFP",
  issuerBaseURL: "https://dev-02desu4qt876dphe.us.auth0.com",
};
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.use(auth(config));

    this.app.get("/", (req, res) => {
      res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
    });
  }
}

export const app = new App().app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
