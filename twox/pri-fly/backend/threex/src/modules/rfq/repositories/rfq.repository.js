import RFQ from "../../../models/RFQ.js";
import RFQ_STATUS from "../../../constants/rfq/statuses.js";
import createBaseRepository from "../../../shared/database/baseRepository.js";

const rfqBase = createBaseRepository(RFQ, { entityName: "RFQ" });

/**
 * Create a new RFQ
 */
export const createRFQ = async (rfqData, { session } = {}) => {
  return rfqBase.create(rfqData, { session });
};


/**
 * Find RFQ by ID (throws if not found)
 */
export const findRFQById = async (rfqId, { session } = {}) => {
  return rfqBase.findById(rfqId, {
    populate: ["brokerId", "organizationId", "legs"],
    session,
  });
};


/**
 * Find RFQs created by a broker/user
 */
export const findRFQsByBroker = async (brokerId, options = {}) => {
  const {
    status,
    page,
    limit,
    session,
  } = options;

  const query = {
    brokerId,
  };

  if (status) {
    query.status = status;
  }

  return rfqBase.paginate(query, { page, limit, session });
};


/**
 * Find open RFQs available for sourcing
 */
export const findOpenRFQs = async ({ page, limit, session } = {}) => {
  return rfqBase.paginate(
    {
      status: {
        $in: [
          RFQ_STATUS.SUBMITTED,
          RFQ_STATUS.MATCHING,
          RFQ_STATUS.AWAITING_QUOTES,
        ],
      },
    },
    { page, limit, session }
  );
};


/**
 * Update RFQ
 */
export const updateRFQ = async (rfqId, updates, { session } = {}) => {
  return rfqBase.updateById(rfqId, updates, { session });
};


/**
 * Update RFQ status
 */
export const updateRFQStatus = async (
  rfqId,
  status,
  { session } = {}
) => {
  return rfqBase.updateById(rfqId, { status }, { session });
};


/**
 * Assign operators to RFQ
 */
export const assignOperators = async (
  rfqId,
  operators,
  { session } = {}
) => {
  return rfqBase.updateById(
    rfqId,
    {
      $addToSet: {
        matchedOperators: {
          $each: operators,
        },
      },
    },
    { session }
  );
};


/**
 * Add SLA tracking data
 */
export const addSLAEvent = async (
  rfqId,
  slaEvent,
  { session } = {}
) => {
  return rfqBase.updateById(
    rfqId,
    {
      $push: {
        slaEvents: slaEvent,
      },
    },
    { session }
  );
};


/**
 * Archive RFQ
 */
export const archiveRFQ = async (
  rfqId,
  { session } = {}
) => {
  return rfqBase.updateById(
    rfqId,
    {
      archived: true,
      archivedAt: new Date(),
    },
    { session }
  );
};


export default {
  createRFQ,
  findRFQById,
  findRFQsByBroker,
  findOpenRFQs,
  updateRFQ,
  updateRFQStatus,
  assignOperators,
  addSLAEvent,
  archiveRFQ,
};