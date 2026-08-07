import asyncHandler from "../middleware/asyncHandler.js";
import authService from "../services/auth.service.js";
import { successResponse } from "../utils/response.js";
import { statusCodes } from "../constants/http/statusCodes.js";

/**
 * REGISTER USER
 */
export const register = asyncHandler(async (req, res) => {
  const user = await authService.register(req.body);

  return successResponse(res, {
    statusCode: statusCodes.CREATED,
    message: "User registered successfully",
    data: user,
  });
});

/**
 * LOGIN USER
 */
export const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "Login successful",
    data: result,
  });
});

/**
 * REFRESH TOKEN
 */
export const refreshToken = asyncHandler(async (req, res) => {
  const result = await authService.refreshToken(req.body.refreshToken);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "Token refreshed successfully",
    data: result,
  });
});

/**
 * FORGOT PASSWORD
 */
export const forgotPassword = asyncHandler(async (req, res) => {
  await authService.forgotPassword(req.body.email);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "Password reset email sent if account exists",
  });
});

/**
 * RESET PASSWORD
 */
export const resetPassword = asyncHandler(async (req, res) => {
  await authService.resetPassword(req.body);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "Password reset successful",
  });
});

/**
 * VERIFY EMAIL
 */
export const verifyEmail = asyncHandler(async (req, res) => {
  await authService.verifyEmail(req.body.token);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "Email verified successfully",
  });
});

/**
 * GET CURRENT USER
 */
export const getMe = asyncHandler(async (req, res) => {
  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "User retrieved successfully",
    data: req.user,
  });
});

/**
 * LOGOUT USER
 */
export const logout = asyncHandler(async (req, res) => {
  await authService.logout(req.user.id);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "Logged out successfully",
  });
});