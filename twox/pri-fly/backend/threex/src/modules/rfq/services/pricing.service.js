import {
  calculateFlightHours,
} from "../helpers/calculateFlightHours.js";

import {
  calculateTripTime,
} from "../helpers/calculateTripTime.js";

import {
  CABIN_CLASS,
} from "../../../constants/rfq/cabinClasses.js";


/**
 * Estimate RFQ price
 *
 * Used for:
 * - broker estimates
 * - quote comparison
 * - pricing intelligence
 */
export const calculatePricing = (args) => estimateRFQPrice(args);

export const estimateRFQPrice = ({
  aircraft,
  rfq,
}) => {

  const flightHours =
    calculateFlightHours(
      rfq.route
    );


  const hourlyRate =
    getAircraftHourlyRate(
      aircraft.category
    );


  const basePrice =
    flightHours *
    hourlyRate;


  const adjustments =
    calculateAdjustments(
      rfq
    );


  return {

    basePrice,


    adjustments,


    estimatedPrice:
      basePrice +
      adjustments.total,


    currency:
      "USD",

  };

};



/**
 * Calculate operator quote baseline
 *
 * Used when operator submits pricing.
 */
export const calculateOperatorPrice = ({
  hourlyRate,
  flightHours,
  fees = 0,
}) => {

  return {

    subtotal:
      hourlyRate *
      flightHours,


    fees,


    total:
      (
        hourlyRate *
        flightHours
      )
      +
      fees,

  };

};



/**
 * Compare quote against estimate
 */
export const comparePrice = ({
  quotedPrice,
  estimatedPrice,
}) => {

  const difference =
    quotedPrice -
    estimatedPrice;


  const percentage =
    (
      difference /
      estimatedPrice
    )
    *
    100;


  return {

    difference,

    percentage:

      Number(
        percentage.toFixed(2)
      ),

    status:
      determinePricePosition(
        percentage
      ),

  };

};



/**
 * Determine aircraft hourly pricing
 *
 * Temporary rules.
 *
 * Eventually replaced with
 * market pricing engine.
 */
const getAircraftHourlyRate = (
  category
) => {

  const rates = {

    LIGHT_JET:
      3500,


    MIDSIZE_JET:
      5500,


    HEAVY_JET:
      8500,


    ULTRA_LONG_RANGE:
      12000,

  };


  return (
    rates[category]
    ||
    5000
  );

};



/**
 * Calculate pricing adjustments
 */
const calculateAdjustments = (
  rfq
) => {

  let total = 0;

  const reasons = [];


  if (
    rfq.priority === "URGENT"
  ) {

    total += 0.15;

    reasons.push(
      "Urgent flight premium"
    );

  }


  if (
    rfq.passengers > 8
  ) {

    total += 0.10;

    reasons.push(
      "Large passenger requirement"
    );

  }


  return {

    total,

    reasons,

  };

};



/**
 * Determine quote position
 */
const determinePricePosition = (
  percentage
) => {

  if (
    percentage <= -10
  ) {

    return "BELOW_MARKET";

  }


  if (
    percentage >= 10
  ) {

    return "ABOVE_MARKET";

  }


  return "WITHIN_RANGE";

};



export default {
  estimateRFQPrice,
  calculatePricing,
  calculateOperatorPrice,
  comparePrice,
  /*getAircraftHourlyRate,
  calculateAdjustments,
  determinePricePosition,*/
};