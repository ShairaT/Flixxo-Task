import { Logger } from "../../../../lib/logger";
import { UnexpectedError } from "../../../../shared/exceptions/UnexpectedError.exception";
import { UnableToFindTokensError } from "../../../domain/exceptions/UnableToFindTokens.exception";
import { TokenRepository } from "../../repositories/token.repository";

export class GetTokensUseCase {
  private readonly logger;
  private readonly tokenRepository: TokenRepository;

  constructor() {
    this.logger = Logger.getInstance();
    this.tokenRepository = new TokenRepository();
  }

  async execute(): Promise<any> {
    try {

      const tokens = await this.tokenRepository.find();
      if (!tokens.length) {
        throw new UnableToFindTokensError();
      }
      return tokens;
    } catch (error) {
      this.logger.error(error);
        if(error instanceof UnableToFindTokensError){
          throw error;
        }
      throw new UnexpectedError();
    }
  }
}
