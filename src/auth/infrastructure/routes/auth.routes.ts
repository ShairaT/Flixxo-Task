import { BaseRoutes } from "../../../adapters/base.routes";
import { asyncHandler } from "../../../shared/middleware/asyncHandler";
import { jwtCheck } from "../../../shared/middleware/jwtCheck";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes extends BaseRoutes {
  private authController: AuthController;

  constructor() {
    super({ mergeParams: true });
    this.authController = new AuthController();
    this.routes();
  }
  routes = (): void => {
    this.router.post(
      "/token",
      asyncHandler(this.authController.getAccessToken)
    );
  };
}
