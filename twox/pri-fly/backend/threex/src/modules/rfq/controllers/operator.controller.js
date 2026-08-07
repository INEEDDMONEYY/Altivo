import asyncHandler from "../../../middleware/asyncHandler.js";

import {
  findEligibleOperators,
  getOperatorById,
  getOperatorsForRFQ,
  acceptRFQ,
  declineRFQ,
} from "../services/operator.service.js";

import {
  successResponse,
  paginatedResponse,
} from "../../../utils/response.js";


/**
 * Get operators eligible for RFQ matching
 *
 * Used by:
 * - matching engine
 * - broker dashboard
 * - admin tools
 */
export const getEligibleOperatorsController = asyncHandler(
  async (req, res) => {

    const {
      region,
      aircraftCategory,
    } = req.query;


    const operators = await findEligibleOperators({
      region,
      aircraftCategory,
    });


    return successResponse(res, {
      message: "Eligible operators retrieved successfully",
      data: operators,
    });
  }
);



/**
 * Get operator by ID
 */
export const getOperatorController = asyncHandler(
  async (req, res) => {

    const operator = await getOperatorById(
      req.params.id
    );


    return successResponse(res, {
      message: "Operator retrieved successfully",
      data: operator,
    });

  }
);



/**
 * Find operators for RFQ sourcing
 *
 * Used internally by routing engine
 */
export const getOperatorsForRFQController = asyncHandler(
  async (req, res) => {

    const operators = await getOperatorsForRFQ(
      req.params.rfqId
    );


    return successResponse(res, {
      message: "RFQ operators retrieved successfully",
      data: operators,
    });

  }
);



/**
 * Operator accepts RFQ
 */
export const acceptRFQController = asyncHandler(
  async (req, res) => {

    const result = await acceptRFQ({
      rfqId: req.params.rfqId,
      operatorId: req.user.operatorId,
    });


    return successResponse(res, {
      message: "RFQ accepted successfully",
      data: result,
    });

  }
);



/**
 * Operator declines RFQ
 */
export const declineRFQController = asyncHandler(
  async (req, res) => {

    const result = await declineRFQ({
      rfqId: req.params.rfqId,
      operatorId: req.user.operatorId,
      reason: req.body.reason,
    });


    return successResponse(res, {
      message: "RFQ declined successfully",
      data: result,
    });

  }
);