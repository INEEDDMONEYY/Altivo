import asyncHandler from "../../../middleware/asyncHandler.js";

import {
  checkAircraftAvailability,
  findAvailableAircraft,
  checkOperatorAvailability,
  validateAvailability,
} from "../services/availability.service.js";

import {
  successResponse,
} from "../../../utils/response.js";


/**
 * Validate complete RFQ availability
 *
 * Used before RFQ enters matching pipeline.
 */
export const validateAvailabilityController = asyncHandler(
  async (req, res) => {

    const result = await validateAvailability(
      req.body
    );

    return successResponse(res, {
      message: "Availability validated successfully",
      data: result,
    });

  }
);


/**
 * Check specific aircraft availability
 *
 * Used by:
 * - matching engine
 * - operator responses
 */
export const checkAircraftAvailabilityController = asyncHandler(
  async (req, res) => {

    const result = await checkAircraftAvailability({
      aircraftId: req.params.aircraftId,
      departureDate: req.body.departureDate,
      arrivalDate: req.body.arrivalDate,
    });


    return successResponse(res, {
      message: "Aircraft availability checked successfully",
      data: result,
    });

  }
);


/**
 * Find available aircraft
 *
 * Used for:
 * - broker search
 * - matching preparation
 */
export const findAvailableAircraftController = asyncHandler(
  async (req, res) => {

    const result = await findAvailableAircraft(
      req.body
    );


    return successResponse(res, {
      message: "Available aircraft retrieved successfully",
      data: result,
    });

  }
);


/**
 * Check operator availability
 *
 * Ensures operator can accept RFQ requirements.
 */
export const checkOperatorAvailabilityController = asyncHandler(
  async (req, res) => {

    const result = await checkOperatorAvailability(
      req.body
    );


    return successResponse(res, {
      message: "Operator availability checked successfully",
      data: result,
    });

  }
);


export default {
  validateAvailabilityController,
  checkAircraftAvailabilityController,
  findAvailableAircraftController,
  checkOperatorAvailabilityController,
};


