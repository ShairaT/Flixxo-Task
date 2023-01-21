import {
  DeleteResult,
  FindOneOptions,
  InsertResult,
  UpdateResult,
} from "typeorm";
import { DataSource } from "../../../db/DataSource";
import { TokenQuote } from "../../../db/entities/TokenQuote";

export class TokenQuoteRepository extends DataSource {
  async find(): Promise<any[]> {
    return await this.getRepository(TokenQuote).find();
  }

  async findByTokenId(tokenId: number): Promise<any[]> {
    return await this.getRepository(TokenQuote).find({
      where: { token: { id: tokenId } },
    });
  }

  async findLastOneByToken(tokenId: number): Promise<any> {
    return await this.getRepository(TokenQuote).findOne({
      where: { token: { id: tokenId } },
      order: {
        createdAt: "DESC",
      },
    });
  }

  async findOne(id: number): Promise<any | undefined> {
    return await this.getRepository(TokenQuote).findOne({ where: { id } });
  }

  async insert(tokenQuote: TokenQuote): Promise<InsertResult> {
    return await this.getRepository(TokenQuote).insert(tokenQuote);
  }

  async update(id: number, tokenQuote: TokenQuote): Promise<UpdateResult> {
    return await this.getRepository(TokenQuote).update({ id }, tokenQuote);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.getRepository(TokenQuote).delete({ where: { id } });
  }
}
