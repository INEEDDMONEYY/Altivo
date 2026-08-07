import * as aircraftRepository from "../repositories/aircraft.repository.js";
import * as operatorRepository from "../repositories/operator.repository.js";


/**
 * Check aircraft availability for RFQ
 *
 * Determines whether a selected aircraft
 * can operate during requested dates.
 */
export const checkAircraftAvailability = async ({
  aircraftId,
  departureDate,
  arrivalDate,
}) => {

  const availability =
    await aircraftRepository.findAvailableAircraft({
      aircraftId,
      departureDate,
      arrivalDate,
    });


  return availability.length > 0;

};



/**
 * Find available aircraft
 *
 * Used after matching engine
 * identifies possible aircraft.
 */
export const findAvailableAircraft = async ({
  category,
  passengers,
  range,
  departureDate,
  arrivalDate,
}) => {

  const aircraft =
    await aircraftRepository.findMatchingAircraft({
      category,
      passengers,
      range,
    });


  if (!aircraft.length) {
    return [];
  }


  const availableAircraft = [];


  for (const item of aircraft) {

    const available =
      await checkAircraftAvailability({
        aircraftId: item._id,
        departureDate,
        arrivalDate,
      });


    if (available) {
      availableAircraft.push(item);
    }

  }


  return availableAircraft;

};



/**
 * Check operator availability
 *
 * Ensures operator is active
 * and capable of handling request.
 */
export const checkOperatorAvailability = async (
  operatorId
) => {

  const operator =
    await operatorRepository.findOperatorById(
      operatorId
    );


  if (!operator) {
    return false;
  }


  return operator.status === "ACTIVE";

};



/**
 * Validate complete RFQ availability
 *
 * Combines aircraft and operator checks.
 */
export const validateAvailability = async ({
  operatorId,
  aircraftId,
  departureDate,
  arrivalDate,
}) => {

  const operatorAvailable =
    await checkOperatorAvailability(
      operatorId
    );


  if (!operatorAvailable) {
    return {
      available: false,
      reason:
        "Operator unavailable",
    };
  }


  const aircraftAvailable =
    await checkAircraftAvailability({
      aircraftId,
      departureDate,
      arrivalDate,
    });


  if (!aircraftAvailable) {
    return {
      available: false,
      reason:
        "Aircraft unavailable",
    };
  }


  return {
    available: true,
  };

};



export default {
  checkAircraftAvailability,
  findAvailableAircraft,
  checkOperatorAvailability,
  validateAvailability,
};