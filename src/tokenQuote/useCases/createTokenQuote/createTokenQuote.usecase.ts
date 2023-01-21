import { TokenQuote } from "../../../db/entities/TokenQuote";
import { Logger } from "../../../lib/logger";
import { UnexpectedError } from "../../../shared/exceptions/UnexpectedError.exception";
import { UnableToFindTokenError } from "../../../token/domain/exceptions/UnableToFindToken.exception";
import { TokenRepository } from "../../../token/infrastructure/repositories/token.repository";
import { CreateTokenQuoteDTO } from "../../infrastructure/dto/request/createTokenQuote.request.dto";
import { TokenQuoteRepository } from "../../infrastructure/repositories/tokenQuote.repository";

export class CreateTokenQuoteUseCase {
  private readonly logger;
  private readonly tokenQuoteRepository: TokenQuoteRepository;
  private readonly tokenRepository: TokenRepository;

  constructor() {
    this.logger = Logger.getInstance();
    this.tokenQuoteRepository = new TokenQuoteRepository();
    this.tokenRepository = new TokenRepository();
  }
  private setTokenQuote(value: number): TokenQuote {
    const tokenQuote = new TokenQuote();
    tokenQuote.value = value;
    tokenQuote.createdAt = new Date();
    tokenQuote.updatedAt = new Date();
    return tokenQuote;
  }

  async execute(dto: CreateTokenQuoteDTO): Promise<any> {
    try {
      const { value, tokenId } = dto;

      const tokenQuote = this.setTokenQuote(value);
      const token = await this.tokenRepository.findOne(tokenId);
      if (!token) {
        throw new UnableToFindTokenError();
      }
      tokenQuote.token = token;
      const newTokenQuote = await this.tokenQuoteRepository.save(tokenQuote);
      return newTokenQuote;
    } catch (error) {
      this.logger.error(error);
        if(error instanceof UnableToFindTokenError){
          throw error;
        }
      throw new UnexpectedError();
    }
  }
}
