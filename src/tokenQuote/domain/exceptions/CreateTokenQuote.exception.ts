import { ApiError } from "../../../shared/helpers/api.error";


export class CreateTokenQuoteError extends ApiError {
  constructor() {
    super({
      status: 404,
      message: CreateTokenQuoteError.getMessage(),
      errorCode: 'CREATE_TOKEN_QUOTE_ERROR',
    });
  }

  static getMessage(): string {
    return 'Unable to create token quote';
  }
}