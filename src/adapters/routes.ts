import { Router } from "express";
import { AuthRoutes } from "../auth/infrastructure/routes";
import { TokenRoutes } from "../token/infrastructure/routes";
import { TokenQuoteRoutes } from "../tokenQuote/infrastructure/routes";
const routes = Router();

routes.use("/auth", new AuthRoutes().getRouter());
routes.use("/token", new TokenRoutes().getRouter());


export { routes };
