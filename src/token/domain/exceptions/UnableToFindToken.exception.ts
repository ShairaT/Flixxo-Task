import { ApiError } from "../../../shared/helpers/api.error";


export class UnableToFindTokenError extends ApiError {
  constructor() {
    super({
      status: 404,
      message: UnableToFindTokenError.getMessage(),
      errorCode: 'UNABLE_TO_FIND_TOKEN_ERROR',
    });
  }

  static getMessage(): string {
    return 'Unable to find token';
  }
}