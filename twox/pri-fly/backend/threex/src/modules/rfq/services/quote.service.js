import * as quoteRepository from "../repositories/quote.repository.js";

import {
  comparePrice,
} from "./pricing.service.js";

import {
  QUOTE_STATUS,
} from "../../../constants/rfq/quoteStatuses.js";


/**
 * Create/submit a quote
 */
export const createQuote = async (data) => {
  return quoteRepository.createQuote({
    ...data,
    status: QUOTE_STATUS.SUBMITTED,
    submittedAt: new Date(),
  });
};


/**
 * Submit operator quote (rfq/operator object variant)
 */
export const submitQuote = async ({
  rfq,
  operator,
  quoteData,
}) => {

  return createQuote({

    rfqId:
      rfq._id,


    operatorId:
      operator._id,


    aircraftId:
      quoteData.aircraftId,


    price:
      quoteData.price,


    currency:
      quoteData.currency || "USD",

  });

};


/**
 * Get quote by ID
 */
export const getQuoteById = async (quoteId) => {
  return quoteRepository.findQuoteById(quoteId);
};


/**
 * Get quotes for broker review
 */
export const getQuotesByRFQ = async (rfqId, options) => {
  return quoteRepository.findQuotesByRFQ(rfqId, options);
};


/**
 * Get quotes submitted by an operator
 */
export const getQuotesByOperator = async (operatorId, options) => {
  return quoteRepository.findQuotesByOperator(operatorId, options);
};


/**
 * Update quote
 */
export const updateQuote = async (quoteId, updates) => {
  return quoteRepository.updateQuote(quoteId, updates);
};


/**
 * Evaluate quote pricing
 */
export const evaluateQuote = ({
  quote,
  estimatedPrice,
}) => {


  return comparePrice({

    quotedPrice:
      quote.price,


    estimatedPrice,

  });

};



/**
 * Accept quote
 */
export const acceptQuote = async (quoteId) => {
  return quoteRepository.acceptQuote(quoteId);
};



/**
 * Decline quote
 */
export const declineQuote = async (quoteId) => {
  return quoteRepository.rejectQuote(quoteId);
};



/**
 * Get quote revision history
 */
export const getQuoteRevisions = async (quoteId, options) => {
  return quoteRepository.findQuoteRevisions(quoteId, options);
};



/**
 * Archive quote
 */
export const archiveQuote = async (quoteId) => {
  return quoteRepository.archiveQuote(quoteId);
};



/**
 * Determine best quote
 *
 * Used by broker dashboard.
 */
export const selectBestQuote = (
  quotes
) => {


  if (!quotes.length) {
    return null;
  }


  return quotes.sort(
    (
      a,
      b
    ) =>
      a.price -
      b.price
  )[0];

};



export default {
  createQuote,
  submitQuote,
  getQuoteById,
  getQuotesByRFQ,
  getQuotesByOperator,
  updateQuote,
  evaluateQuote,
  acceptQuote,
  declineQuote,
  getQuoteRevisions,
  archiveQuote,
  selectBestQuote,
};