import { Request, Response } from "express";
import { createTokenQuoteDTOType } from "../../../domain/interfaces/createTokenQuote.type.dto";

export class CreateTokenQuoteDTO implements createTokenQuoteDTOType {
  value: number;
  tokenId: number;

  constructor(req: Request, res: Response) {
    const { value } = req.body;
    const { tokenId } = req.params;
    this.tokenId = Number(tokenId);
    this.value = value;
  }
}
