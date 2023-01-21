import { TokenQuote } from "../../../db/entities/TokenQuote";
import { Logger } from "../../../lib/logger";
import { UnableToFindTokenQuoteError } from "../../domain/exceptions/UnableToFindTokenQuote.exception";
import { UpdateTokenQuoteError } from "../../domain/exceptions/UpdateTokenQuote.exception";
import { UpdateTokenQuoteDTO } from "../../infrastructure/dto/request/updateTokenQuote.request.dto";
import { TokenQuoteRepository } from "../../infrastructure/repositories/tokenQuote.repository";


export class UpdateTokenQuoteUseCase {
  private readonly logger;
  private readonly tokenQuoteRepository: TokenQuoteRepository;

  constructor() {
    this.logger = Logger.getInstance();
    this.tokenQuoteRepository = new TokenQuoteRepository();
  }
  private setTokenQuote(value: number, tokenQuote: TokenQuote): TokenQuote {
    tokenQuote.value = value;
    tokenQuote.updatedAt = new Date();
    return tokenQuote;
  }

  async execute(
    dto: UpdateTokenQuoteDTO
  ): Promise<any> {
    try {
      const { tokenQuoteId, value } = dto;
      let tokenQuote = await this.tokenQuoteRepository.findOne(tokenQuoteId);
      if(!tokenQuote){
          throw new UnableToFindTokenQuoteError();
      }
      tokenQuote = this.setTokenQuote(value, tokenQuote);
      const updatedTokenQuote = await this.tokenQuoteRepository.update(tokenQuoteId, tokenQuote);
      return updatedTokenQuote;
    } catch (error) {
      this.logger.error(error);
      if (error instanceof UnableToFindTokenQuoteError) {
        throw error;
      }
      throw new UpdateTokenQuoteError();
    }
  }
}
