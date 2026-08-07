import ApiError from "../utils/ApiError.js";
import { statusCodes } from "../constants/http/statusCodes.js";

/**
 * NOT FOUND MIDDLEWARE
 * ---------------------
 * Catches all undefined routes and returns a consistent API response.
 */
const notFound = (req, res, next) => {
  next(
    new ApiError(
      statusCodes.NOT_FOUND,
      `Route not found: ${req.originalUrl}`
    )
  );
};

export default notFound;