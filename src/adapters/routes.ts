import { Router } from "express";
import { AuthRoutes } from "../auth/infrastructure/routes";
const routes = Router();

routes.use("/auth", new AuthRoutes().getRouter());

export { routes };
