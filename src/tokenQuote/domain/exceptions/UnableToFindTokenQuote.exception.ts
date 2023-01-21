import { ApiError } from "../../../shared/helpers/api.error";


export class UnableToFindTokenQuoteError extends ApiError {
  constructor() {
    super({
      status: 404,
      message: UnableToFindTokenQuoteError.getMessage(),
      errorCode: 'UNABLE_TO_FIND_TOKEN_QUOTE_ERROR',
    });
  }

  static getMessage(): string {
    return 'Unable to find token quote';
  }
}