import { ApiError } from "../../../shared/helpers/api.error";


export class UpdateTokenQuoteError extends ApiError {
  constructor() {
    super({
      status: 404,
      message: UpdateTokenQuoteError.getMessage(),
      errorCode: 'UPDATE_TOKEN_QUOTE_ERROR',
    });
  }

  static getMessage(): string {
    return 'Unable to update token quote';
  }
}