import asyncHandler from "../../../middleware/asyncHandler.js";

import {
  createQuote,
  getQuoteById,
  getQuotesByRFQ,
  getQuotesByOperator,
  updateQuote,
  acceptQuote,
  declineQuote,
  getQuoteRevisions,
  archiveQuote,
} from "../services/quote.service.js";

import {
  successResponse,
  createdResponse,
} from "../../../utils/response.js";


/**
 * Submit quote for RFQ
 */
export const createQuoteController = asyncHandler(
  async (req, res) => {

    const quote = await createQuote({
      ...req.body,
      operatorId: req.user.id,
      organizationId: req.user.organizationId,
    });


    return createdResponse(res, {
      message: "Quote submitted successfully",
      data: quote,
    });
  }
);


/**
 * Get quote by ID
 */
export const getQuoteController = asyncHandler(
  async (req, res) => {

    const quote = await getQuoteById(
      req.params.id
    );


    return successResponse(res, {
      message: "Quote retrieved successfully",
      data: quote,
    });
  }
);


/**
 * Get quotes for RFQ
 *
 * Broker dashboard
 */
export const getRFQQuotesController = asyncHandler(
  async (req, res) => {

    const quotes = await getQuotesByRFQ(
      req.params.rfqId
    );


    return successResponse(res, {
      message: "RFQ quotes retrieved successfully",
      data: quotes,
    });
  }
);


/**
 * Get quotes submitted by operator
 */
export const getOperatorQuotesController = asyncHandler(
  async (req, res) => {

    const quotes = await getQuotesByOperator(
      req.user.id
    );


    return successResponse(res, {
      message: "Operator quotes retrieved successfully",
      data: quotes,
    });
  }
);


/**
 * Update quote
 */
export const updateQuoteController = asyncHandler(
  async (req, res) => {

    const quote = await updateQuote(
      req.params.id,
      req.body
    );


    return successResponse(res, {
      message: "Quote updated successfully",
      data: quote,
    });
  }
);


/**
 * Accept quote
 *
 * Broker action
 */
export const acceptQuoteController = asyncHandler(
  async (req, res) => {

    const quote = await acceptQuote(
      req.params.id,
      {
        acceptedBy: req.user.id,
      }
    );


    return successResponse(res, {
      message: "Quote accepted successfully",
      data: quote,
    });
  }
);


/**
 * Decline quote
 *
 * Broker action
 */
export const declineQuoteController = asyncHandler(
  async (req, res) => {

    const quote = await declineQuote(
      req.params.id,
      {
        declinedBy: req.user.id,
      }
    );


    return successResponse(res, {
      message: "Quote declined successfully",
      data: quote,
    });
  }
);


/**
 * Get quote revision history
 */
export const getQuoteRevisionsController = asyncHandler(
  async (req, res) => {

    const revisions = await getQuoteRevisions(
      req.params.id
    );


    return successResponse(res, {
      message: "Quote revisions retrieved successfully",
      data: revisions,
    });
  }
);


/**
 * Archive quote
 */
export const archiveQuoteController = asyncHandler(
  async (req, res) => {

    const quote = await archiveQuote(
      req.params.id
    );


    return successResponse(res, {
      message: "Quote archived successfully",
      data: quote,
    });
  }
);