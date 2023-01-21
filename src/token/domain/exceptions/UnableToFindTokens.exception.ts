import { ApiError } from "../../../shared/helpers/api.error";


export class UnableToFindTokensError extends ApiError {
  constructor() {
    super({
      status: 404,
      message: UnableToFindTokensError.getMessage(),
      errorCode: 'UNABLE_TO_FIND_TOKENS_ERROR',
    });
  }

  static getMessage(): string {
    return 'No Token Found';
  }
}