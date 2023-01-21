import { BaseRoutes } from "../../../adapters/base.routes";
import { asyncHandler } from "../../../shared/middleware/asyncHandler";
import { TokenQuoteRoutes } from "../../../tokenQuote/infrastructure/routes";
import { TokenController } from "../constrollers/token.controller";

export class TokenRoutes extends BaseRoutes {
  private tokenController: TokenController;

  constructor() {
    super({ mergeParams: true });
    this.tokenController = new TokenController();
    this.routes();
  }
  routes = (): void => {
    this.router.use('/:tokenId/token-quote', new TokenQuoteRoutes().getRouter());
    this.router.get(
      "/",
      asyncHandler(this.tokenController.getTokens)
    );
  };
}
