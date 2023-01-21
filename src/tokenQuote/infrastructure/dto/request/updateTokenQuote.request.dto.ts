import { Request, Response } from "express";
import { updateTokenQuoteDTOType } from "../../../domain/interfaces/updateTokenQuote.type.dto";

export class UpdateTokenQuoteDTO implements updateTokenQuoteDTOType {
  tokenQuoteId: number;
  value: number;

  constructor(req: Request, res: Response) {
    const { value } = req.body;
    const { tokenQuoteId } = req.params;
    this.tokenQuoteId = Number(tokenQuoteId);
    this.value = value;
  }
}
