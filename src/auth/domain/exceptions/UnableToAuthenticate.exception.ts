import { ApiError } from "../../../shared/helpers/api.error";


export class UnableToAuthenticate extends ApiError {
  constructor() {
    super({
      status: 404,
      message: UnableToAuthenticate.getMessage(),
      errorCode: 'UNABLE_TO_AUTHENTICATE_ERROR',
    });
  }

  static getMessage(): string {
    return 'Unable to authenticate';
  }
}