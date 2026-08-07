import asyncHandler from "../../../middleware/asyncHandler.js";

import {
  createRFQ,
  getRFQById,
  getRFQsByBroker,
  updateRFQ,
  updateRFQStatus,
  archiveRFQ,
} from "../services/rfq.service.js";

import {
  successResponse,
  createdResponse,
  paginatedResponse,
} from "../../../utils/response.js";


/**
 * Create RFQ
 *
 * Flow:
 * Controller
 *   ↓
 * RFQ Service
 *   ↓
 * Repository
 *   ↓
 * MongoDB
 *
 * Future:
 * - emit RFQCreated event
 * - queue matching engine
 * - start SLA tracking
 */
export const createRFQController = asyncHandler(
  async (req, res) => {

    const context = {
      userId: req.user.id,
      organizationId: req.user.organizationId,
    };


    const rfq = await createRFQ(
      req.body,
      context
    );


    return createdResponse(res, {
      message: "RFQ created successfully",
      data: rfq,
    });

  }
);



/**
 * Get RFQs created by broker
 *
 * Supports:
 * - pagination
 * - filtering
 * - organization isolation
 */
export const getBrokerRFQsController = asyncHandler(
  async (req, res) => {

    const {
      page = 1,
      limit = 25,
      status,
    } = req.query;


    const result = await getRFQsByBroker(
      req.user.id,
      {
        page,
        limit,
        status,
      }
    );


    return paginatedResponse(res, {
      message: "RFQs retrieved successfully",
      data: result.data,
      page: result.meta?.page ?? page,
      limit: result.meta?.limit ?? limit,
      total: result.meta?.total ?? 0,
    });

  }
);



/**
 * Get RFQ by ID
 *
 * Future:
 * - policy check
 * - audit logging
 */
export const getRFQController = asyncHandler(
  async (req, res) => {

    const rfq = await getRFQById(
      req.params.id,
      {
        userId: req.user.id,
        organizationId: req.user.organizationId,
      }
    );


    return successResponse(res, {
      message: "RFQ retrieved successfully",
      data: rfq,
    });

  }
);



/**
 * Update RFQ
 *
 * Future:
 * - validate state transitions
 * - prevent updates after sourcing
 */
export const updateRFQController = asyncHandler(
  async (req, res) => {

    const rfq = await updateRFQ(
      req.params.id,
      req.body,
      {
        userId: req.user.id,
        organizationId: req.user.organizationId,
      }
    );


    return successResponse(res, {
      message: "RFQ updated successfully",
      data: rfq,
    });

  }
);



/**
 * Update RFQ Status
 *
 * Future:
 * Status changes should emit:
 * - RFQMatched
 * - QuotesRequested
 * - RFQClosed
 */
export const updateRFQStatusController = asyncHandler(
  async (req, res) => {

    const rfq = await updateRFQStatus(
      req.params.id,
      req.body.status,
      {
        userId: req.user.id,
        organizationId: req.user.organizationId,
      }
    );


    return successResponse(res, {
      message: "RFQ status updated successfully",
      data: rfq,
    });

  }
);



/**
 * Archive RFQ
 *
 * Soft delete pattern.
 *
 * Future:
 * - audit event
 * - retention policy
 */
export const archiveRFQController = asyncHandler(
  async (req, res) => {

    const rfq = await archiveRFQ(
      req.params.id,
      {
        userId: req.user.id,
        organizationId: req.user.organizationId,
      }
    );


    return successResponse(res, {
      message: "RFQ archived successfully",
      data: rfq,
    });

  }
);