import ApiError from "../../../utils/ApiError.js";

/**
 * Validate that an RFQ has enough route data to run matching.
 */
export const validateRoute = (rfq) => {
  if (!rfq.passengers || rfq.passengers < 1) {
    throw ApiError.badRequest("RFQ must specify a valid passenger count");
  }

  if (!rfq.range || rfq.range <= 0) {
    throw ApiError.badRequest("RFQ must specify a valid route range");
  }
};

export default validateRoute;
