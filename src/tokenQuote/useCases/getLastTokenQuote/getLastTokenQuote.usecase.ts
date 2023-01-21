import { TokenQuote } from "../../../db/entities/TokenQuote";
import { Logger } from "../../../lib/logger";
import { UnexpectedError } from "../../../shared/exceptions/UnexpectedError.exception";
import { UnableToFindTokenQuotesError } from "../../domain/exceptions/UnableToFindTokenQuotes.exception";
import { TokenQuoteRepository } from "../../infrastructure/repositories/tokenQuote.repository";

export class GetLastTokenQuoteUseCase {
  private readonly logger;
  private readonly tokenQuoteRepository: TokenQuoteRepository;

  constructor() {
    this.logger = Logger.getInstance();
    this.tokenQuoteRepository = new TokenQuoteRepository();
  }
  async execute(tokenId: number): Promise<TokenQuote> {
    try {
      const lastTokenQuote = await this.tokenQuoteRepository.findLastOneByToken(
        tokenId
      );
      if (!lastTokenQuote) {
        throw new UnableToFindTokenQuotesError();
      }
      return lastTokenQuote;
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
