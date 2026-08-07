import { matchRFQ } from "./matching.service.js";
import {
  findAvailableAircraft,
} from "./availability.service.js";

import {
  SOURCING_TYPE,
} from "../../../constants/rfq/sourcingTypes.js";

import {
  SLA,
} from "../../../constants/rfq/sla.js";


/**
 * Create routing plan for RFQ
 *
 * Determines which operators
 * should receive the request.
 */
export const createRoutingPlan = async (
  rfq
) => {

  const matches =
    await matchRFQ(rfq);


  if (!matches.length) {
    return {
      operators: [],
      reason:
        "No matching operators found",
    };
  }


  const availableMatches = [];


  for (const match of matches) {

    const aircraft =
      await findAvailableAircraft({
        category:
          match.aircraft.category,

        passengers:
          rfq.passengers,

        range:
          rfq.range,

        departureDate:
          rfq.departureDate,

        arrivalDate:
          rfq.arrivalDate,
      });


    if (!aircraft.length) {
      continue;
    }


    availableMatches.push(match);

  }


  return buildRoutingStrategy(
    availableMatches,
    rfq
  );

};



/**
 * Build operator distribution strategy
 */
const buildRoutingStrategy = (
  matches,
  rfq
) => {

  const priorityMatches =
    matches.slice(
      0,
      SLA.INITIAL_OPERATOR_COUNT
    );


  return {

    sourcingType:
      rfq.sourcingType ||
      SOURCING_TYPE.NETWORK,


    operators:
      priorityMatches.map(
        (match) => ({
          operatorId:
            match.operator._id,

          aircraftId:
            match.aircraft._id,

          score:
            match.score,

          reasons:
            match.reasons,

        })
      ),


    escalation: {

      enabled: true,

      nextEscalationMinutes:
        SLA.ESCALATION_MINUTES,

    },

  };

};



/**
 * Public alias expected by the RFQ module barrel (modules/rfq/index.js).
 */
export const routeRFQ = createRoutingPlan;



/**
 * Expand routing pool
 *
 * Used when operators do not respond.
 */
export const escalateRouting = async (
  rfq,
  currentOperators
) => {

  const matches =
    await matchRFQ(rfq);


  return matches.filter(
    (match) =>
      !currentOperators.includes(
        String(match.operator._id)
      )
  );

};



/**
 * Determine if escalation is required
 */
export const shouldEscalate = ({
  responseCount,
  elapsedMinutes,
}) => {

  return (
    responseCount === 0 &&
    elapsedMinutes >=
      SLA.ESCALATION_MINUTES
  );

};



export default {
  createRoutingPlan,
  routeRFQ: createRoutingPlan,
  escalateRouting,
  shouldEscalate,
  /*buildRoutingStrategy*/
};