
import axios from "axios";
import { IAuthService } from "../../domain/interfaces/transaction.service.interface";
import { IAuth } from "../../domain/interfaces/auth.interface";
import { Logger } from "winston";

export class AuthService implements IAuthService {
  protected logger;
  private audience: string;
  private client_id: string;
  private client_secret: string;
  private domain: string;

  constructor(logger: Logger) {
    this.logger = logger;
    this.audience = process.env.AUTH0_AUDIENCE;
    this.client_id = process.env.AUTH0_CLIENT_ID;
    this.client_secret = process.env.AUTH0_CLIENT_SECRET;
    this.domain = process.env.AUTH0_DOMAIN;
  }

  public async getAccessToken (
    username: string,
    password: string
  ): Promise<IAuth> {
    try {
      const data = {
        grant_type: 'password',
        audience: this.audience,
        client_id: this.client_id,
        client_secret: this.client_secret,
        username,
        password,
      };

      const response = await axios.post(
        `https://${this.domain}.us.auth0.com/oauth/token`,
        data
      );
      return {
        access_token: response.data?.access_token,
        scope: response.data?.scope,
        expires_in: response.data?.expires_in,
        error: response.data?.error,
      } as IAuth
    } catch (error) {
      this.logger.error(error);
      return error;
    }
  };
}
