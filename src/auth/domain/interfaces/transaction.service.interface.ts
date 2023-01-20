import { IAuth } from "./auth.interface";

export interface IAuthService {
  getAccessToken: (username: string, password: string) => Promise<IAuth>;
  }
