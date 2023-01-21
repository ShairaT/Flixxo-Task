import { Request, Response } from "express";
import { TokenRepository } from "../repositories/token.repository";
export class TokenController {
  public async getTokens(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const tokenRepository = new TokenRepository();
      const response = await tokenRepository.find();
      res.status(200).json(response);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }
}
