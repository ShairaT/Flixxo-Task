import { TokenQuote } from "../../../db/entities/TokenQuote";
import { Logger } from "../../../lib/logger";
import { UnexpectedError } from "../../../shared/exceptions/UnexpectedError.exception";
import { TokenRepository } from "../../../token/infrastructure/repositories/token.repository";
import { UnableToFindTokenQuotesError } from "../../domain/exceptions/UnableToFindTokenQuotes.exception";
import { UpdateTokenQuoteDTO } from "../../infrastructure/dto/request/updateTokenQuote.request.dto";
import { TokenQuoteRepository } from "../../infrastructure/repositories/tokenQuote.repository";

export class GetTokenQuoteHistoryUseCase {
  private readonly logger;
  private readonly tokenQuoteRepository: TokenQuoteRepository;

  constructor() {
    this.logger = Logger.getInstance();
    this.tokenQuoteRepository = new TokenQuoteRepository();
  }
  async execute(tokenId: number): Promise<TokenQuote[]> {
    try {
      const tokenQuotes = await this.tokenQuoteRepository.findByTokenId(
        tokenId
      );
      if (!tokenQuotes.length) {
        throw new UnableToFindTokenQuotesError();
      }
      return tokenQuotes;
    } catch (error) {
      console.log(error);
      this.logger.error(error);
      if (error instanceof UnableToFindTokenQuotesError) {
        throw error;
      }
      throw new UnexpectedError();
    }
  }
}
