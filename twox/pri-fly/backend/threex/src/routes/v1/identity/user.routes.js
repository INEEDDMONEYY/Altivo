import express from "express";

import authenticate from "../../../middleware/authenticate.js";
import authorize from "../../../middleware/authorize.js";
import validate from "../../../middleware/validate.js";
import * as userController from "../../../controllers/user.controller.js";
import { updateUserRoleValidation } from "../../../validations/user.validation.js";

const router = express.Router();

// UPDATE USER ROLE (admin only)
router.patch(
  "/:userId/role",
  authenticate,
  authorize(["ADMIN"]),
  validate(updateUserRoleValidation),
  userController.updateUserRole
);

export default router;
