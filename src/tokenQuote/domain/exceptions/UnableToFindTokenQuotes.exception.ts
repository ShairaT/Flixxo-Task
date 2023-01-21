import { ApiError } from "../../../shared/helpers/api.error";


export class UnableToFindTokenQuotesError extends ApiError {
  constructor() {
    super({
      status: 404,
      message: UnableToFindTokenQuotesError.getMessage(),
      errorCode: 'UNABLE_TO_FIND_TOKEN_QUOTES_ERROR',
    });
  }

  static getMessage(): string {
    return 'Unable to find token quotes';
  }
}