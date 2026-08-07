import { statusCodes } from "../constants/http/statusCodes.js";
import logger from "../config/logger.js";

/**
 * GLOBAL ERROR HANDLER
 * ---------------------
 * Ensures all API errors are returned in a consistent format.
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || statusCodes.INTERNAL_SERVER_ERROR;
  let message = err.message || "Something went wrong";

  // Log full error internally (never expose to client)
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
    userId: req.user?.id || null,
  });

  // Handle MongoDB duplicate key errors
  if (err.code === 11000) {
    statusCode = statusCodes.CONFLICT;
    message = "Duplicate field value entered";
  }

  // Handle Mongoose validation errors
  if (err.name === "ValidationError") {
    statusCode = statusCodes.BAD_REQUEST;
    message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
  }

  // Handle JWT errors
  if (err.name === "JsonWebTokenError") {
    statusCode = statusCodes.UNAUTHORIZED;
    message = "Invalid token";
  }

  if (err.name === "TokenExpiredError") {
    statusCode = statusCodes.UNAUTHORIZED;
    message = "Token expired";
  }

  res.status(statusCode).json({
    status: "error",
    message,
  });
};

export default errorHandler;