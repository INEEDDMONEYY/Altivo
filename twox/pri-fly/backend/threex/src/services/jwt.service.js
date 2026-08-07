import jwt from "jsonwebtoken";
import crypto from "crypto";
import RefreshToken from "../models/RefreshToken.js";
import { jwtConfig } from "../config/jwt.js";
import ApiError from "../utils/ApiError.js";
import { statusCodes } from "../constants/http/statusCodes.js";

/**
 * Generate ACCESS TOKEN
 */
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      orgId: user.organization || null,
    },
    jwtConfig.accessSecret,
    {
      expiresIn: jwtConfig.accessExpiry,
    }
  );
};

/**
 * Generate REFRESH TOKEN
 */
const generateRefreshToken = async (user) => {
  const token = crypto.randomBytes(64).toString("hex");

  await RefreshToken.create({
    user: user._id,
    token,
    expiresAt: new Date(
      Date.now() + jwtConfig.refreshExpiryMs
    ),
  });

  return token;
};

/**
 * VERIFY ACCESS TOKEN
 */
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, jwtConfig.accessSecret);
  } catch (err) {
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Invalid or expired access token"
    );
  }
};

/**
 * VERIFY REFRESH TOKEN (DB-backed)
 */
const verifyRefreshToken = async (token) => {
  const storedToken = await RefreshToken.findOne({ token });

  if (!storedToken) {
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Invalid refresh token"
    );
  }

  if (storedToken.expiresAt < new Date()) {
    await RefreshToken.deleteOne({ _id: storedToken._id });
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Refresh token expired"
    );
  }

  return storedToken;
};

/**
 * REVOKE REFRESH TOKENS (logout or security event)
 */
const revokeUserTokens = async (userId) => {
  await RefreshToken.deleteMany({ user: userId });
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  revokeUserTokens,
};