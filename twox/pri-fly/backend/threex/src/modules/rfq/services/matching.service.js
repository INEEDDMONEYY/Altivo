import * as operatorRepository from "../repositories/operator.repository.js";
import * as aircraftRepository from "../repositories/aircraft.repository.js";

import { MATCHING } from "../constants/matching.js";
import { SCORING } from "../constants/scoring.js";

import { validateRoute } from "../helpers/validateRoute.js";


/**
 * Match RFQ to qualified operators and aircraft
 *
 * Main entry point for RFQ routing engine
 */
export const matchRFQ = async (rfq) => {

  validateRoute(rfq);


  const operators = await matchOperators(rfq);


  const matches = [];


  for (const operator of operators) {

    const aircraft = await matchAircraft(
      operator,
      rfq
    );


    if (!aircraft) {
      continue;
    }


    const score = scoreMatch(
      {
        operator,
        aircraft,
      },
      rfq
    );


    matches.push({
      operator,
      aircraft,
      score: score.total,
      reasons: score.reasons,
    });

  }


  return rankMatches(matches);

};



/**
 * Find operators capable of handling RFQ
 */
const matchOperators = async (rfq) => {

  return operatorRepository.findEligibleOperators({
    region: rfq.region,
    aircraftCategory:
      rfq.aircraftCategory,
  });

};



/**
 * Find best aircraft for operator
 */
const matchAircraft = async (
  operator,
  rfq
) => {

  const aircraft =
    await aircraftRepository.findMatchingAircraft({
      category:
        rfq.aircraftCategory,

      passengers:
        rfq.passengers,

      range:
        rfq.range,
    });


  if (!aircraft.length) {
    return null;
  }


  /**
   * Future:
   * Filter by operator ownership,
   * availability windows,
   * maintenance,
   * positioning flights.
   */

  return aircraft.find(
    (item) =>
      String(item.operatorId)
      === String(operator._id)
  );

};



/**
 * Calculate match score
 */
const scoreMatch = (
  {
    operator,
    aircraft,
  },
  rfq
) => {

  let total = 0;

  const reasons = [];


  /**
   * Operator scoring
   */

  if (
    operator.responseScore
  ) {

    total +=
      SCORING.OPERATOR.RESPONSE_TIME;

    reasons.push(
      "Strong operator response history"
    );

  }


  if (
    operator.slaPerformance
  ) {

    total +=
      SCORING.OPERATOR.SLA_PERFORMANCE;

    reasons.push(
      "Strong SLA performance"
    );

  }



  /**
   * Aircraft scoring
   */

  if (
    aircraft.category ===
    rfq.aircraftCategory
  ) {

    total +=
      SCORING.AIRCRAFT.CATEGORY_MATCH;


    reasons.push(
      "Aircraft category matches request"
    );

  }



  if (
    aircraft.range >= rfq.range
  ) {

    total +=
      SCORING.AIRCRAFT.RANGE_MATCH;


    reasons.push(
      "Aircraft range satisfies route"
    );

  }



  return {
    total: Math.min(
      total,
      SCORING.MAX_SCORE
    ),

    reasons,
  };

};



/**
 * Rank matches from strongest
 * to weakest
 */
const rankMatches = (
  matches
) => {

  return matches
    .sort(
      (a,b) =>
        b.score - a.score
    )
    .slice(
      0,
      MATCHING.MAX_RESULTS
    );

};



export default {
  matchRFQ,
  matchOperators,
  matchAircraft,
  scoreMatch,
  rankMatches,
};