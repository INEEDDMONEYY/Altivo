import env from "../config/env.js";

/**
 * Standard API Error class
 * Used across services, controllers, and middleware
 *
 * This ensures all errors follow a consistent structure:
 * - message (human readable)
 * - statusCode (HTTP status)
 * - isOperational (safe to expose to client)
 * - stack (dev only)
 */
class ApiError extends Error {
  /**
   * @param {number} statusCode - HTTP status code
   * @param {string} message - Error message
   * @param {boolean} isOperational - Whether this is a known/handled error
   * @param {any} details - Optional extra metadata
   */
  constructor(statusCode, message, isOperational = true, details = null) {
    super(message);

    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;

    // Capture stack trace properly (V8)
    Error.captureStackTrace(this, this.constructor);
  }

  /**
   * Serialize error for API response
   */
  toJSON() {
    return {
      status: "error",
      message: this.message,
      ...(this.details && { details: this.details }),
      ...(env.isDev && { stack: this.stack }),
    };
  }

  /**
   * Factory: Bad Request (400)
   */
  static badRequest(message = "Bad Request", details = null) {
    return new ApiError(400, message, true, details);
  }

  /**
   * Factory: Unauthorized (401)
   */
  static unauthorized(message = "Unauthorized") {
    return new ApiError(401, message);
  }

  /**
   * Factory: Forbidden (403)
   */
  static forbidden(message = "Forbidden") {
    return new ApiError(403, message);
  }

  /**
   * Factory: Not Found (404)
   */
  static notFound(message = "Resource not found") {
    return new ApiError(404, message);
  }

  /**
   * Factory: Conflict (409)
   */
  static conflict(message = "Conflict occurred") {
    return new ApiError(409, message);
  }

  /**
   * Factory: Validation Error (400)
   */
  static validation(message = "Validation failed", details = null) {
    return new ApiError(400, message, true, details);
  }

  /**
   * Factory: Internal Server Error (500)
   */
  static internal(message = "Internal Server Error") {
    return new ApiError(500, message, false);
  }
}

export default ApiError;