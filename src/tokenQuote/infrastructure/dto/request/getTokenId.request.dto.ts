import { Request, Response } from "express";

export class GetTokenIdDTO {
  tokenId: number;

  constructor(req: Request, res: Response) {
    const { tokenId } = req.params;
    this.tokenId = Number(tokenId);
  }
}
