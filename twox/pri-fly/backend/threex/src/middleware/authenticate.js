import jwt from "jsonwebtoken";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "./asyncHandler.js";
import User from "../models/User.js";
import { statusCodes } from "../constants/http/statusCodes.js";

/**
 * AUTHENTICATION MIDDLEWARE
 * --------------------------
 * Verifies JWT access token and attaches user to request object.
 */
const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // 1. Extract token from Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  // 2. If no token found
  if (!token) {
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Authentication required. No token provided."
    );
  }

  try {
    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    // 4. Fetch user (keep lightweight, no sensitive fields)
    const user = await User.findById(decoded.id).select(
      "-password -refreshTokens -__v"
    );

    if (!user) {
      throw new ApiError(
        statusCodes.UNAUTHORIZED,
        "User not found or no longer active."
      );
    }

    // 5. Attach user to request
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(
      statusCodes.UNAUTHORIZED,
      "Invalid or expired token."
    );
  }
});

export default authenticate;