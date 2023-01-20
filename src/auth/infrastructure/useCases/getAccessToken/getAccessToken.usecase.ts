import { UnexpectedError } from "../../../../shared/exceptions/UnexpectedError.exception";
import { Logger } from "../../../../shared/lib/logger";
import { UnableToAuthenticate } from "../../../domain/exceptions/UnableToAuthenticate.exception";
import { IAuth } from "../../../domain/interfaces/auth.interface";
import { GetAccessTokenDTOType } from "../../../domain/interfaces/types";
import { AuthService } from "../../services/auth.service";

export class GetAccessTokenUseCase {
  private readonly logger;
  private readonly authService: AuthService;

  constructor() {
    this.logger = Logger.getInstance();
    this.authService = new AuthService(this.logger);
  }
  async execute(
    dto: GetAccessTokenDTOType
  ): Promise<IAuth> {
    try {
      const { username, password } = dto;
      const auth_credentials = await this.authService.getAccessToken(username, password);
      if (auth_credentials.error) {
        throw new UnableToAuthenticate();
      }
      return auth_credentials;
    } catch (error) {
      this.logger.error(error);
      if(error instanceof UnableToAuthenticate){
        throw error;
      }
      throw new UnexpectedError();
    }
  }
}
