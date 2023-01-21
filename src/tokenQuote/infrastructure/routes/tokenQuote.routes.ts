import { BaseRoutes } from "../../../adapters/base.routes";
import { asyncHandler } from "../../../shared/middleware/asyncHandler";
import { jwtCheck } from "../../../shared/middleware/jwtCheck";
import { TokenQuoteController } from "../controllers/tokenQuote.controller";

export class TokenQuoteRoutes extends BaseRoutes {
  private tokenQuoteController: TokenQuoteController;

  constructor() {
    super({ mergeParams: true });
    this.tokenQuoteController = new TokenQuoteController();
    this.routes();
  }
  routes = (): void => {
    this.router.post("/", jwtCheck ,asyncHandler(this.tokenQuoteController.createTokenQuote));
    this.router.patch("/:tokenQuoteId", jwtCheck ,asyncHandler(this.tokenQuoteController.updateTokenQuote));
    this.router.get("/history" ,asyncHandler(this.tokenQuoteController.getTokenQuoteHistory));
    this.router.get("/last" ,asyncHandler(this.tokenQuoteController.getLastTokenQuote));
  };
}
