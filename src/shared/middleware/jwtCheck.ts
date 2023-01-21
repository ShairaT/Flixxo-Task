import { auth } from "express-oauth2-jwt-bearer"
import * as dotenv from "dotenv";

dotenv.config();

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}.us.auth0.com/`
})
