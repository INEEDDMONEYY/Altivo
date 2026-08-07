import User from "../models/User.js";
import createBaseRepository from "../shared/database/baseRepository.js";

const userBase = createBaseRepository(User, { entityName: "User" });

/**
 * Create a new user
 */
export const createUser = async (data, { session } = {}) => {
  return userBase.create(data, { session });
};

/**
 * Find user by email (used heavily in auth)
 *
 * Returns null (not throw) when not found — callers should respond with a
 * generic "invalid credentials" error rather than leaking account existence.
 */
export const findUserByEmail = async (email, { projection = null, session = null } = {}) => {
  return User.findOne({ email }, projection).select("+password").session(session);
};

/**
 * Find user by ID (throws if not found)
 */
export const findUserById = async (id, { projection, session } = {}) => {
  return userBase.findById(id, { projection, session });
};

/**
 * Update user by ID (throws if not found)
 */
export const updateUserById = async (id, update, { session } = {}) => {
  return userBase.updateById(id, update, { session });
};

/**
 * Delete user (soft delete recommended later, but hard delete here for base layer)
 */
export const deleteUserById = async (id, { session } = {}) => {
  return userBase.deleteById(id, { session });
};

/**
 * Add organization membership to user
 */
export const addUserOrganization = async (userId, organizationData, { session } = {}) => {
  return userBase.updateById(
    userId,
    {
      $push: {
        organizations: organizationData,
      },
    },
    { session }
  );
};

/**
 * Remove organization membership from user
 */
export const removeUserOrganization = async (userId, organizationId, { session } = {}) => {
  return userBase.updateById(
    userId,
    {
      $pull: {
        organizations: { organizationId },
      },
    },
    { session }
  );
};

/**
 * Increment failed login attempts
 */
export const incrementFailedLogins = async (userId, { session } = {}) => {
  return userBase.updateById(
    userId,
    {
      $inc: { failedLoginAttempts: 1 },
    },
    { session }
  );
};

/**
 * Reset failed login attempts
 */
export const resetFailedLogins = async (userId, { session } = {}) => {
  return userBase.updateById(
    userId,
    {
      $set: { failedLoginAttempts: 0, lockedUntil: null },
    },
    { session }
  );
};

/**
 * Lock user account temporarily
 */
export const lockUserAccount = async (userId, unlockTime, { session } = {}) => {
  return userBase.updateById(
    userId,
    {
      $set: { lockedUntil: unlockTime },
    },
    { session }
  );
};

/**
 * Update last login timestamp
 */
export const updateLastLogin = async (userId, { session } = {}) => {
  return userBase.updateById(
    userId,
    {
      $set: { lastLoginAt: new Date() },
    },
    { session }
  );
};

export default {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserById,
  deleteUserById,
  addUserOrganization,
  removeUserOrganization,
  incrementFailedLogins,
  resetFailedLogins,
  lockUserAccount,
  updateLastLogin,
};