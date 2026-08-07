import Quote from "../../../models/Quote.js";
import QuoteRevision from "../../../models/QuoteRevision.js";
import QUOTE_STATUS from "../../../constants/rfq/quoteStatuses.js";
import createBaseRepository from "../../../shared/database/baseRepository.js";

const quoteBase = createBaseRepository(Quote, { entityName: "Quote" });
const revisionBase = createBaseRepository(QuoteRevision, {
  entityName: "Quote revision",
});


/**
 * Create a quote
 */
export const createQuote = async (
  quoteData,
  { session } = {}
) => {
  return quoteBase.create(quoteData, { session });
};


/**
 * Find quote by ID (throws if not found)
 */
export const findQuoteById = async (
  quoteId,
  { session } = {}
) => {
  return quoteBase.findById(quoteId, {
    populate: ["rfqId", "operatorId"],
    session,
  });
};


/**
 * Find all quotes for RFQ
 *
 * Used by broker dashboard
 */
export const findQuotesByRFQ = async (
  rfqId,
  { page, limit, session } = {}
) => {

  return quoteBase.paginate(
    {
      rfqId,
    },
    { page, limit, populate: ["operatorId"], session }
  );
};


/**
 * Find quotes submitted by operator
 */
export const findQuotesByOperator = async (
  operatorId,
  { page, limit, session } = {}
) => {

  return quoteBase.paginate(
    {
      operatorId,
    },
    { page, limit, populate: ["rfqId"], session }
  );
};


/**
 * Find active quotes
 */
export const findActiveQuotes = async (
  { page, limit, session } = {}
) => {

  return quoteBase.paginate(
    {
      status: {
        $in: [
          QUOTE_STATUS.PENDING,
          QUOTE_STATUS.SUBMITTED,
          QUOTE_STATUS.REVISED,
        ],
      },
    },
    { page, limit, session }
  );
};


/**
 * Update quote
 */
export const updateQuote = async (
  quoteId,
  updates,
  { session } = {}
) => {

  return quoteBase.updateById(quoteId, updates, { session });
};


/**
 * Update quote status
 */
export const updateQuoteStatus = async (
  quoteId,
  status,
  { session } = {}
) => {

  return quoteBase.updateById(quoteId, { status }, { session });
};


/**
 * Accept quote
 */
export const acceptQuote = async (
  quoteId,
  { session } = {}
) => {

  return quoteBase.updateById(
    quoteId,
    {
      status: QUOTE_STATUS.ACCEPTED,
      acceptedAt: new Date(),
    },
    { session }
  );
};


/**
 * Reject quote
 */
export const rejectQuote = async (
  quoteId,
  { session } = {}
) => {

  return quoteBase.updateById(
    quoteId,
    {
      status: QUOTE_STATUS.DECLINED,
      rejectedAt: new Date(),
    },
    { session }
  );
};


/**
 * Create quote revision
 */
export const createQuoteRevision = async (
  revisionData,
  { session } = {}
) => {

  return revisionBase.create(revisionData, { session });
};


/**
 * Find quote revisions
 */
export const findQuoteRevisions = async (
  quoteId,
  { page, limit, session } = {}
) => {

  return revisionBase.paginate(
    {
      quoteId,
    },
    { page, limit, session }
  );
};


/**
 * Archive quote
 */
export const archiveQuote = async (
  quoteId,
  { session } = {}
) => {

  return quoteBase.updateById(
    quoteId,
    {
      archived: true,
      archivedAt: new Date(),
    },
    { session }
  );
};


export default {
  createQuote,
  findQuoteById,
  findQuotesByRFQ,
  findQuotesByOperator,
  findActiveQuotes,
  updateQuote,
  updateQuoteStatus,
  acceptQuote,
  rejectQuote,
  createQuoteRevision,
  findQuoteRevisions,
  archiveQuote,
};