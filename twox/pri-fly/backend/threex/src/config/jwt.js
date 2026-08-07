import jwt from "jsonwebtoken";
import env from "./env.js";

/**
 * Standard JWT configuration
 */
const jwtConfig = {
  access: {
    secret: env.jwt.accessSecret,
    expiresIn: env.jwt.accessExpiresIn, // e.g. 15m
  },
  refresh: {
    secret: env.jwt.refreshSecret,
    expiresIn: env.jwt.refreshExpiresIn, // e.g. 7d / 30d
  },
};

/**
 * Generate Access Token
 * Contains user identity + permissions context
 */
export const generateAccessToken = (payload) => {
  return jwt.sign(payload, jwtConfig.access.secret, {
    expiresIn: jwtConfig.access.expiresIn,
  });
};

/**
 * Generate Refresh Token
 * Used only to obtain new access tokens
 */
export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, jwtConfig.refresh.secret, {
    expiresIn: jwtConfig.refresh.expiresIn,
  });
};

/**
 * Verify Access Token
 */
export const verifyAccessToken = (token) => {
  return jwt.verify(token, jwtConfig.access.secret);
};

/**
 * Verify Refresh Token
 */
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, jwtConfig.refresh.secret);
};

/**
 * Decode token without verification (use carefully)
 */
export const decodeToken = (token) => {
  return jwt.decode(token);
};

/**
 * Standard token payload builder
 * Ensures consistency across the entire platform
 */
export const buildTokenPayload = (user, session = {}) => {
  return {
    sub: user._id,
    email: user.email,
    role: user.role,
    organizationId: user.organizationId,

    // Security + session tracking
    sessionId: session.id || null,
    deviceId: session.deviceId || null,

    // Permissions snapshot (optional but powerful later)
    permissions: user.permissions || [],
  };
};

export default jwtConfig;