import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  buildTokenPayload,
} from "../config/jwt.js";

// Re-export so consumers can import from this utility instead of config/jwt directly
export { generateAccessToken, generateRefreshToken, verifyRefreshToken };

/**
 * Generate both access and refresh tokens
 *
 * This is the single source of truth for token creation.
 *
 * @param {Object} user - User document
 * @param {Object} session - Optional session metadata (deviceId, sessionId)
 */
export const generateTokens = (user, session = {}) => {
  if (!user) {
    throw new Error("User is required to generate tokens");
  }

  // Standardized payload for both tokens
  const payload = buildTokenPayload(user, session);

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    accessToken,
    refreshToken,
  };
};

/**
 * Generate access token only (useful for refresh flows)
 *
 * @param {Object} user
 * @param {Object} session
 */
export const generateAccessOnly = (user, session = {}) => {
  const payload = buildTokenPayload(user, session);
  return generateAccessToken(payload);
};

/**
 * Generate refresh token only (rare use cases, but useful for rotation)
 *
 * @param {Object} user
 * @param {Object} session
 */
export const generateRefreshOnly = (user, session = {}) => {
  const payload = buildTokenPayload(user, session);
  return generateRefreshToken(payload);
};

export default {
  generateTokens,
  generateAccessOnly,
  generateRefreshOnly,
};