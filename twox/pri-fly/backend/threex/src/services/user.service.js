import { updateUserById } from "../repositories/user.repository.js";

/**
 * Change a user's system-level role (admin only, enforced by authorize() middleware).
 * Password is excluded automatically via the User schema's select:false.
 */
const updateUserRole = async (userId, role) => {
  return updateUserById(userId, { role });
};

export default {
  updateUserRole,
};
