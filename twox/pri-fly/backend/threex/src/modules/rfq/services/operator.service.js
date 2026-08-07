import ApiError from "../../../utils/ApiError.js";

import {
  findEligibleOperators as findEligibleOperatorsRecord,
  findOperatorById as findOperatorByIdRecord,
  findOperatorsByIds,
} from "../repositories/operator.repository.js";

import {
  findRFQById,
  updateRFQ,
  addSLAEvent,
} from "../repositories/rfq.repository.js";

const isMatchedOperator = (rfq, operatorId) =>
  rfq.matchedOperators.some((id) => String(id) === String(operatorId));

/**
 * Find operators eligible for RFQ matching
 */
export const findEligibleOperators = async ({ region, aircraftCategory }, options = {}) => {
  return findEligibleOperatorsRecord({ region, aircraftCategory }, options);
};

/**
 * Get operator by ID
 */
export const getOperatorById = async (operatorId) => {
  return findOperatorByIdRecord(operatorId);
};

/**
 * Get operators matched/invited to an RFQ
 */
export const getOperatorsForRFQ = async (rfqId) => {
  const rfq = await findRFQById(rfqId);
  return findOperatorsByIds(rfq.matchedOperators);
};

/**
 * Operator accepts an RFQ it was matched to
 */
export const acceptRFQ = async ({ rfqId, operatorId }) => {
  const rfq = await findRFQById(rfqId);

  if (!isMatchedOperator(rfq, operatorId)) {
    throw ApiError.forbidden("Operator is not matched to this RFQ");
  }

  await addSLAEvent(rfqId, {
    event: "OPERATOR_ACCEPTED",
    meta: { operatorId },
  });

  return findRFQById(rfqId);
};

/**
 * Operator declines an RFQ it was matched to
 */
export const declineRFQ = async ({ rfqId, operatorId, reason }) => {
  const rfq = await findRFQById(rfqId);

  if (!isMatchedOperator(rfq, operatorId)) {
    throw ApiError.forbidden("Operator is not matched to this RFQ");
  }

  await updateRFQ(rfqId, { $pull: { matchedOperators: operatorId } });

  await addSLAEvent(rfqId, {
    event: "OPERATOR_DECLINED",
    meta: { operatorId, reason },
  });

  return findRFQById(rfqId);
};

export default {
  findEligibleOperators,
  getOperatorById,
  getOperatorsForRFQ,
  acceptRFQ,
  declineRFQ,
};
