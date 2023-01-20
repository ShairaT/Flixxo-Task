import { Request } from "express";
import { GetAccessTokenDTOType } from "../../domain/interfaces/types";


export class GetAccessToken
  implements GetAccessTokenDTOType
{
  username: string;
  password: string;

  constructor(req: Request) {
    const { username, password } = req.body;
    this.username = username;
    this.password = password;
  }
}

