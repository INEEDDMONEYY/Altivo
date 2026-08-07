import env from "../config/env.js";

/**
 * Standard API response wrapper
 *
 * Ensures every endpoint returns a consistent structure:
 *
 * {
 *   status: "success",
 *   message: "...",
 *   data: {},
 *   meta: {}
 * }
 */

/**
 * Send success response
 *
 * @param {object} res - Express response object
 * @param {object} options
 */
export const successResponse = (res, { message = "Success", data = null, meta = null, statusCode = 200 }) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
    ...(meta && { meta }),
    ...(env.isDev && { debug: true }),
  });
};

/**
 * Send created response (201)
 */
export const createdResponse = (res, options = {}) => {
  return successResponse(res, {
    ...options,
    statusCode: 201,
  });
};

/**
 * Send paginated response
 *
 * Used heavily in:
 * - users list
 * - RFQ lists
 * - quotes
 * - audit logs
 */
export const paginatedResponse = (
  res,
  {
    message = "Success",
    data = [],
    page = 1,
    limit = 10,
    total = 0,
  }
) => {
  return res.status(200).json({
    status: "success",
    message,
    data,
    meta: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
    ...(env.isDev && { debug: true }),
  });
};

/**
 * Send empty success response (useful for deletes)
 */
export const emptyResponse = (res, message = "Deleted successfully") => {
  return res.status(200).json({
    status: "success",
    message,
    data: null,
  });
};

export default {
  successResponse,
  createdResponse,
  paginatedResponse,
  emptyResponse,
};