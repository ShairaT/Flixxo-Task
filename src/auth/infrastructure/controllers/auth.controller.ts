import { Request, Response } from "express";
import { GetAccessToken } from "../dto/getAccessToken";
import { GetAccessTokenUseCase } from "../useCases/getAccessToken/getAccessToken.usecase";
export class AuthController {
  public async getAccessToken(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const dto = new GetAccessToken(req);
      const accessToken =
        await new GetAccessTokenUseCase().execute(dto);
      res.status(200).json(accessToken);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }
}
