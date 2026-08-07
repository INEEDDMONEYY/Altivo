import bcrypt from "bcryptjs";

/**
 * Cost factor for hashing
 * 10–12 is standard for production (balance between security & performance)
 */
const SALT_ROUNDS = 12;

/**
 * Hash a plain text value (password, secret, etc.)
 *
 * @param {string} value
 * @returns {Promise<string>}
 */
export const hashValue = async (value) => {
  if (!value) {
    throw new Error("Value required for hashing");
  }

  return bcrypt.hash(value, SALT_ROUNDS);
};

/**
 * Compare plain text with hashed value
 *
 * @param {string} value - plain text
 * @param {string} hashedValue - stored hash
 * @returns {Promise<boolean>}
 */
export const compareHash = async (value, hashedValue) => {
  if (!value || !hashedValue) {
    return false;
  }

  return bcrypt.compare(value, hashedValue);
};

/**
 * Hash password specifically (semantic clarity)
 */
export const hashPassword = async (password) => {
  return hashValue(password);
};

/**
 * Compare password specifically (semantic clarity)
 */
export const comparePassword = async (password, hashedPassword) => {
  return compareHash(password, hashedPassword);
};

/**
 * Optional: hash sensitive tokens (API keys, refresh tokens if needed)
 * Uses stronger deterministic SHA approach pattern via bcrypt (non-reversible)
 */
export const hashSecret = async (secret) => {
  return hashValue(secret);
};

export default {
  hashValue,
  compareHash,
  hashPassword,
  comparePassword,
  hashSecret,
};