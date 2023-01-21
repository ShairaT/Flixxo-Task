import { Request, Response } from "express";
import { CreateTokenQuoteDTO } from "../dto/request/createTokenQuote.request.dto";
import { CreateTokenQuoteUseCase } from "../../useCases/createTokenQuote/createTokenQuote.usecase";
import { UpdateTokenQuoteDTO } from "../dto/request/updateTokenQuote.request.dto";
import { UpdateTokenQuoteUseCase } from "../../useCases/updateTokenQuote/updateTokenQuote.usecase";
import { GetTokenIdDTO } from "../dto/request/getTokenId.request.dto";
import { GetTokenQuoteHistoryUseCase } from "../../useCases/getTokenQuoteHistory/getTokenQuoteHistory.usecase";
import { GetLastTokenQuoteUseCase } from "../../useCases/getLastTokenQuote/getLastTokenQuote.usecase";
export class TokenQuoteController {
  public async createTokenQuote(req: Request, res: Response): Promise<void> {
    try {
      const createTokenQuoteDTO = new CreateTokenQuoteDTO(req, res);
      const newTokenQuote = await new CreateTokenQuoteUseCase().execute(
        createTokenQuoteDTO
      );
      res.status(201).json(newTokenQuote);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }

  public async updateTokenQuote(req: Request, res: Response): Promise<void> {
    try {
      const updateTokenQuoteDTO = new UpdateTokenQuoteDTO(req, res);
      const newTokenQuote = await new UpdateTokenQuoteUseCase().execute(
        updateTokenQuoteDTO
      );
      res.status(200).json(newTokenQuote);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }

  public async getTokenQuoteHistory(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { tokenId } = new GetTokenIdDTO(req, res);
      const tokenQuotes = await new GetTokenQuoteHistoryUseCase().execute(tokenId);
      res.status(200).json(tokenQuotes);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }

  public async getLastTokenQuote(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const { tokenId } = new GetTokenIdDTO(req, res);
      const lastTokenQuote = await new GetLastTokenQuoteUseCase().execute(tokenId);
      res.status(200).json(lastTokenQuote);
    } catch (error) {
      res.status(error.status).send(error);
    }
  }
}
