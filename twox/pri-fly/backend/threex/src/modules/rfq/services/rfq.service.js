import ApiError from "../../../utils/ApiError.js";

import {
  createRFQ as createRFQRecord,
  findRFQById,
  findRFQsByBroker,
  updateRFQ as updateRFQRecord,
  updateRFQStatus as updateRFQStatusRecord,
  archiveRFQ as archiveRFQRecord,
} from "../repositories/rfq.repository.js";

import {
  RFQ_STATUS,
} from "../../../constants/rfq/index.js";


/**
 * Create RFQ
 *
 * Main RFQ creation workflow
 */
export const createRFQ = async ({
  brokerId,
  organizationId,
  rfqData,
}) => {

  if (!brokerId) {
    throw new ApiError(
      400,
      "Broker ID is required"
    );
  }


  if (!organizationId) {
    throw new ApiError(
      400,
      "Organization ID is required"
    );
  }


  const rfq = await createRFQRecord({
    brokerId,
    organizationId,

    ...rfqData,

    status:
      RFQ_STATUS.DRAFT,
  });


  /**
   * Future additions:
   *
   * - Publish RFQCreated event
   * - Start SLA timer
   * - Begin operator matching
   * - Send notifications
   */


  return rfq;
};


/**
 * Get RFQ details
 */
export const getRFQById = async (
  rfqId
) => {

  const rfq =
    await findRFQById(rfqId);


  if (!rfq) {
    throw new ApiError(
      404,
      "RFQ not found"
    );
  }


  return rfq;
};


/**
 * Get broker RFQs
 */
export const getRFQsByBroker = async (
  brokerId,
  options
) => {

  const { data, meta } = await findRFQsByBroker(
    brokerId,
    options
  );

  return {
    data,
    ...meta,
  };

};


/**
 * Update RFQ details
 */
export const updateRFQ = async (
  rfqId,
  updates
) => {

  const existingRFQ =
    await findRFQById(rfqId);


  if (!existingRFQ) {
    throw new ApiError(
      404,
      "RFQ not found"
    );
  }


  return updateRFQRecord(
    rfqId,
    updates
  );

};


/**
 * Move RFQ workflow status
 */
export const updateRFQStatus = async (
  rfqId,
  status
) => {

  const rfq =
    await findRFQById(rfqId);


  if (!rfq) {
    throw new ApiError(
      404,
      "RFQ not found"
    );
  }


  /**
   * Future:
   *
   * Validate status transitions
   *
   * Example:
   *
   * DRAFT
   *  ↓
   * SUBMITTED
   *  ↓
   * MATCHING
   *  ↓
   * QUOTING
   *  ↓
   * AWARDED
   */


  return updateRFQStatusRecord(
    rfqId,
    status
  );

};


/**
 * Submit RFQ
 *
 * Changes RFQ from draft
 * into active sourcing
 */
export const submitRFQ = async (
  rfqId
) => {

  const rfq =
    await findRFQById(rfqId);


  if (!rfq) {
    throw new ApiError(
      404,
      "RFQ not found"
    );
  }


  if (
    rfq.status !==
    RFQ_STATUS.DRAFT
  ) {

    throw new ApiError(
      400,
      "Only draft RFQs can be submitted"
    );

  }


  return updateRFQStatusRecord(
    rfqId,
    RFQ_STATUS.SUBMITTED
  );

};


/**
 * Cancel RFQ
 */
export const cancelRFQ = async (
  rfqId
) => {

  const rfq =
    await findRFQById(rfqId);


  if (!rfq) {
    throw new ApiError(
      404,
      "RFQ not found"
    );
  }


  return updateRFQStatusRecord(
    rfqId,
    RFQ_STATUS.CANCELLED
  );

};


/**
 * Archive RFQ
 */
export const archiveRFQ = async (
  rfqId
) => {

  const rfq =
    await findRFQById(rfqId);


  if (!rfq) {
    throw new ApiError(
      404,
      "RFQ not found"
    );
  }


  return archiveRFQRecord(rfqId);

};


export default {
  createRFQ,
  getRFQById,
  getRFQsByBroker,
  updateRFQ,
  updateRFQStatus,
  submitRFQ,
  cancelRFQ,
  archiveRFQ,
};