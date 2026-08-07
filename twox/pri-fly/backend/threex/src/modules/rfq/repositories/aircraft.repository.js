import Aircraft from "../../../models/Aircraft.js";
import AircraftAvailability from "../../../models/AircraftAvailability.js";
import AIRCRAFT_STATUS from "../../../constants/aircraft/statuses.js";
import createBaseRepository from "../../../shared/database/baseRepository.js";

const aircraftBase = createBaseRepository(Aircraft, { entityName: "Aircraft" });
const availabilityBase = createBaseRepository(AircraftAvailability, {
  entityName: "Aircraft availability",
});


/**
 * Create aircraft record
 */
export const createAircraft = async (
  aircraftData,
  { session } = {}
) => {
  return aircraftBase.create(aircraftData, { session });
};


/**
 * Find aircraft by ID (throws if not found)
 */
export const findAircraftById = async (
  aircraftId,
  { session } = {}
) => {
  return aircraftBase.findById(aircraftId, {
    populate: ["operatorId", "categoryId"],
    session,
  });
};


/**
 * Find aircraft belonging to operator
 */
export const findAircraftByOperator = async (
  operatorId,
  { page, limit, session } = {}
) => {
  return aircraftBase.paginate(
    {
      operatorId,
      status: AIRCRAFT_STATUS.ACTIVE,
    },
    { page, limit, session }
  );
};


/**
 * Find aircraft by category
 *
 * Example:
 * LIGHT_JET
 * HEAVY_JET
 * ULTRA_LONG_RANGE
 */
export const findAircraftByCategory = async (
  category,
  { page, limit, session } = {}
) => {
  return aircraftBase.paginate(
    {
      category,
      status: AIRCRAFT_STATUS.ACTIVE,
    },
    { page, limit, session }
  );
};


/**
 * Find aircraft capable of passenger count
 */
export const findAircraftByCapacity = async (
  passengers,
  { page, limit, session } = {}
) => {
  return aircraftBase.paginate(
    {
      passengerCapacity: {
        $gte: passengers,
      },
      status: AIRCRAFT_STATUS.ACTIVE,
    },
    { page, limit, session }
  );
};


/**
 * Find aircraft matching RFQ requirements
 *
 * Used by matching.service.js
 */
export const findMatchingAircraft = async (
  { category, passengers, range },
  { page, limit, session } = {}
) => {

  const query = {
    status: AIRCRAFT_STATUS.ACTIVE,
  };


  if (category) {
    query.category = category;
  }


  if (passengers) {
    query.passengerCapacity = {
      $gte: passengers,
    };
  }


  if (range) {
    query.range = {
      $gte: range,
    };
  }


  return aircraftBase.paginate(query, {
    page,
    limit,
    sort: { operationalScore: -1 },
    session,
  });
};


/**
 * Check aircraft availability
 *
 * Used before sending RFQ to operators
 */
export const findAvailableAircraft = async (
  { aircraftId, departureDate, arrivalDate },
  { session } = {}
) => {

  return AircraftAvailability.find({
    aircraftId,

    startDate: {
      $lte: departureDate,
    },

    endDate: {
      $gte: arrivalDate,
    },

    available: true,
  })
    .session(session)
    .lean();

};


/**
 * Update aircraft (throws if not found)
 */
export const updateAircraft = async (
  aircraftId,
  updates,
  { session } = {}
) => {
  return aircraftBase.updateById(aircraftId, updates, { session });
};


/**
 * Update aircraft availability (throws if not found)
 */
export const updateAvailability = async (
  availabilityId,
  updates,
  { session } = {}
) => {
  return availabilityBase.updateById(availabilityId, updates, { session });
};


export default {
  createAircraft,
  findAircraftById,
  findAircraftByOperator,
  findAircraftByCategory,
  findAircraftByCapacity,
  findMatchingAircraft,
  findAvailableAircraft,
  updateAircraft,
  updateAvailability,
};