import Operator from "../../../models/Operator.js";
import OPERATOR_STATUS from "../../../constants/aircraft/operatorStatuses.js";
import createBaseRepository from "../../../shared/database/baseRepository.js";

const operatorBase = createBaseRepository(Operator, { entityName: "Operator" });

/**
 * Create operator profile
 */
export const createOperator = async (operatorData, { session } = {}) => {
  return operatorBase.create(operatorData, { session });
};


/**
 * Find operator by ID (throws if not found)
 */
export const findOperatorById = async (operatorId, { session } = {}) => {
  return operatorBase.findById(operatorId, {
    populate: ["organizationId", "bases"],
    session,
  });
};


/**
 * Find operators by a list of IDs (e.g. an RFQ's matchedOperators)
 */
export const findOperatorsByIds = async (operatorIds = [], { session } = {}) => {
  if (!operatorIds.length) return [];

  const { data } = await operatorBase.paginate(
    { _id: { $in: operatorIds } },
    { limit: operatorIds.length, session }
  );

  return data;
};


/**
 * Find all active operators
 */
export const findActiveOperators = async ({ page, limit, session } = {}) => {
  return operatorBase.paginate(
    {
      status: OPERATOR_STATUS.ACTIVE,
    },
    { page, limit, session }
  );
};


/**
 * Find operators by geographic region
 *
 * Used by RFQ routing engine
 */
export const findOperatorsByRegion = async (
  region,
  { page, limit, session } = {}
) => {
  return operatorBase.paginate(
    {
      regionsServed: region,
      status: OPERATOR_STATUS.ACTIVE,
    },
    { page, limit, session }
  );
};


/**
 * Find operators capable of aircraft category
 *
 * Example:
 * Light Jet
 * Heavy Jet
 * Ultra Long Range
 */
export const findOperatorsByAircraftCategory = async (
  category,
  { page, limit, session } = {}
) => {
  return operatorBase.paginate(
    {
      aircraftCategories: category,
      status: OPERATOR_STATUS.ACTIVE,
    },
    { page, limit, session }
  );
};


/**
 * Find operators matching RFQ requirements
 *
 * Initial matching query.
 * More advanced scoring will happen in matching.service.js
 */
export const findEligibleOperators = async (
  { region, aircraftCategory },
  { page, limit, session } = {}
) => {

  const query = {
    status: OPERATOR_STATUS.ACTIVE,
  };


  if (region) {
    query.regionsServed = region;
  }


  if (aircraftCategory) {
    query.aircraftCategories =
      aircraftCategory;
  }


  return operatorBase.paginate(query, {
    page,
    limit,
    sort: { responseScore: -1 },
    session,
  });
};


/**
 * Update operator
 */
export const updateOperator = async (
  operatorId,
  updates,
  { session } = {}
) => {
  return operatorBase.updateById(operatorId, updates, { session });
};


/**
 * Update operator SLA performance metrics
 *
 * Used later by SLA service
 */
export const updateResponseMetrics = async (
  operatorId,
  metrics,
  { session } = {}
) => {

  return operatorBase.updateById(
    operatorId,
    {
      $set: {
        responseMetrics: metrics,
      },
    },
    { session }
  );
};


export default {
  createOperator,
  findOperatorById,
  findOperatorsByIds,
  findActiveOperators,
  findOperatorsByRegion,
  findOperatorsByAircraftCategory,
  findEligibleOperators,
  updateOperator,
  updateResponseMetrics,
};