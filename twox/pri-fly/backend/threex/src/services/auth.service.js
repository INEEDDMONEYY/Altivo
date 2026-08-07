import jwt from "jsonwebtoken";

import User from "../models/User.js";
import RefreshToken from "../models/RefreshToken.js";
import EmailVerification from "../models/EmailVerification.js";
import PasswordReset from "../models/PasswordReset.js";

import ApiError from "../utils/ApiError.js";
import { statusCodes } from "../constants/http/statusCodes.js";

import {
  hashPassword,
  comparePassword,
} from "../utils/hash.js";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/generateTokens.js";

import emailService from "./email.service.js";

/**
 * Build the minimal JWT payload used across access & refresh tokens.
 * Must match the shape `authenticate.js` expects (`decoded.id`).
 */
const buildPayload = (user) => ({
  id: user._id,
  email: user.email,
  role: user.role,
});

/**
 * REGISTER USER
 */
const register = async (data) => {
  const { email, password } = data;

  // 1. Check if user exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(
      statusCodes.CONFLICT,
      "User already exists with this email"
    );
  }

  // 2. Create user (password hashing is handled by the User pre-save hook)
  const user = await User.create(data);

  // 4. Generate email verification token
  const verificationToken = await EmailVerification.createToken(user._id);

  // 5. Send verification email (Unosend integration later)
  await emailService.sendVerificationEmail(email, verificationToken);

  return {
    id: user._id,
    email: user.email,
  };
};

/**
 * LOGIN USER
 */
const login = async (data) => {
  const { email, password } = data;

  // 1. Find user (password is select:false by default, must opt in)
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Invalid credentials"
    );
  }

  // 2. Validate password
  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Invalid credentials"
    );
  }

  // 3. Generate tokens
  const payload = buildPayload(user);
  const accessToken = generateAccessToken(payload);
  const refreshTokenValue = generateRefreshToken(payload);

  // 4. Persist refresh token so it can be validated/rotated later
  const decoded = jwt.decode(refreshTokenValue);
  await RefreshToken.create({
    user: user._id,
    token: refreshTokenValue,
    expiresAt: new Date(decoded.exp * 1000),
  });

  return {
    user: {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    accessToken,
    refreshToken: refreshTokenValue,
  };
};

/**
 * REFRESH TOKEN
 */
const refreshToken = async (token) => {
  if (!token) {
    throw new ApiError(statusCodes.UNAUTHORIZED, "No refresh token provided");
  }

  const decoded = verifyRefreshToken(token);

  const storedToken = await RefreshToken.findOne({
    token,
    user: decoded.id,
  });

  if (!storedToken) {
    throw new ApiError(statusCodes.UNAUTHORIZED, "Invalid refresh token");
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    throw new ApiError(statusCodes.UNAUTHORIZED, "User not found");
  }

  const newAccessToken = generateAccessToken(buildPayload(user));

  return {
    accessToken: newAccessToken,
  };
};

/**
 * LOGOUT USER
 */
const logout = async (userId) => {
  await RefreshToken.deleteMany({ user: userId });
};

/**
 * FORGOT PASSWORD
 */
const forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    return; // silent fail (security best practice)
  }

  const resetToken = await PasswordReset.createToken(user._id);

  await emailService.sendPasswordResetEmail(email, resetToken);
};

/**
 * RESET PASSWORD
 */
const resetPassword = async ({ token, password }) => {
  const resetRecord = await PasswordReset.verifyToken(token);

  if (!resetRecord) {
    throw new ApiError(statusCodes.BAD_REQUEST, "Invalid or expired token");
  }

  const hashedPassword = await hashPassword(password);

  await User.findByIdAndUpdate(resetRecord.user, {
    password: hashedPassword,
  });

  await PasswordReset.deleteOne({ _id: resetRecord._id });
};

/**
 * VERIFY EMAIL
 */
const verifyEmail = async (token) => {
  const record = await EmailVerification.verifyToken(token);

  if (!record) {
    throw new ApiError(statusCodes.BAD_REQUEST, "Invalid verification token");
  }

  await User.findByIdAndUpdate(record.user, {
    isEmailVerified: true,
  });

  await EmailVerification.deleteOne({ _id: record._id });
};

export default {
  register,
  login,
  refreshToken,
  logout,
  forgotPassword,
  resetPassword,
  verifyEmail,
};