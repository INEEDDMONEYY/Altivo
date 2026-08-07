import ApiError from "../utils/ApiError.js";
import { statusCodes } from "../constants/http/statusCodes.js";

/**
 * ROLE + PERMISSION AUTHORIZATION MIDDLEWARE
 *
 * Usage:
 *   authorize("ADMIN")
 *   authorize(["ADMIN", "BROKER"])
 */
const authorize = (allowedRoles = []) => {
  // normalize input
  if (!Array.isArray(allowedRoles)) {
    allowedRoles = [allowedRoles];
  }

  return (req, res, next) => {
    const user = req.user;

    // 1. Ensure user exists (must run after authenticate)
    if (!user) {
      throw new ApiError(
        statusCodes.UNAUTHORIZED,
        "Unauthorized: No user context found."
      );
    }

    // 2. Ensure role exists on user
    if (!user.role) {
      throw new ApiError(
        statusCodes.FORBIDDEN,
        "Access denied: No role assigned."
      );
    }

    // 3. Admin override (full access always)
    if (user.role === "ADMIN") {
      return next();
    }

    // 4. Role check
    const hasAccess = allowedRoles.includes(user.role);

    if (!hasAccess) {
      throw new ApiError(
        statusCodes.FORBIDDEN,
        `Access denied: Requires one of [${allowedRoles.join(", ")}]`
      );
    }

    next();
  };
};

export default authorize;