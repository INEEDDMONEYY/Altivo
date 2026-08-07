import express from "express";
import validate from "../../../middleware/validate.js";
import authenticate from "../../../middleware/authenticate.js";
import * as authController from "../../../controllers/auth.controller.js";
import {
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  resetPasswordValidation,
  refreshTokenValidation,
  verifyEmailValidation,
} from "../../../validations/auth.validation.js";

const router = express.Router();

/**
 * AUTH ROUTES
 * -----------
 * Identity system entry point
 */

// REGISTER
router.post(
  "/register",
  validate(registerValidation),
  authController.register
);

// LOGIN
router.post(
  "/login",
  validate(loginValidation),
  authController.login
);

// REFRESH TOKEN
router.post(
  "/refresh-token",
  validate(refreshTokenValidation),
  authController.refreshToken
);

// FORGOT PASSWORD
router.post(
  "/forgot-password",
  validate(forgotPasswordValidation),
  authController.forgotPassword
);

// RESET PASSWORD
router.post(
  "/reset-password",
  validate(resetPasswordValidation),
  authController.resetPassword
);

// VERIFY EMAIL
router.post(
  "/verify-email",
  validate(verifyEmailValidation),
  authController.verifyEmail
);

// GET CURRENT USER (protected route)
router.get(
  "/me",
  authenticate,
  authController.getMe
);

// LOGOUT (optional but important for token revocation flows)
router.post(
  "/logout",
  authenticate,
  authController.logout
);

export default router;