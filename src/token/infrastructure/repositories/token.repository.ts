import { DeleteResult, ObjectLiteral } from "typeorm";
import { DataSource } from "../../../db/DataSource";
import { Token } from "../../../db/entities/Token";

export class TokenRepository extends DataSource {
  async find(): Promise<any[]> {
    return await this.getRepository(Token).find();
  }

  async findOne(id: number): Promise<any | undefined> {
    return await this.getRepository(Token).findOne({ where: { id } });
  }

  async save(token: Token): Promise<Token> {
    return await this.getRepository(Token).save(token);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.getRepository(Token).delete({ where: { id } });
  }
}
