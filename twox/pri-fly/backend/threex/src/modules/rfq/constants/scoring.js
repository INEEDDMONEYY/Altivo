/**
 * RFQ Matching Scoring Configuration
 *
 * The matching engine uses weighted scoring
 * to rank operators and aircraft combinations.
 *
 * Total score is calculated out of 100.
 */

export const SCORING = {
  /**
   * Maximum possible score
   */
  MAX_SCORE: 100,


  /**
   * Operator scoring weights
   */
  OPERATOR: {
    RESPONSE_TIME: 20,
    SLA_PERFORMANCE: 20,
    ACCEPTANCE_RATE: 15,
    EXPERIENCE: 10,
  },


  /**
   * Aircraft scoring weights
   */
  AIRCRAFT: {
    CATEGORY_MATCH: 15,
    RANGE_MATCH: 10,
    AVAILABILITY: 5,
    AGE: 5,
  },


  /**
   * Score thresholds
   *
   * Used for ranking quality.
   */
  THRESHOLDS: {
    EXCELLENT: 90,
    GOOD: 75,
    ACCEPTABLE: 60,
    POOR: 0,
  },


  /**
   * Ranking multipliers
   *
   * Used when applying
   * additional business rules.
   */
  PRIORITY: {
    PREFERRED_OPERATOR: 5,
    FAST_RESPONSE: 5,
    PREMIUM_FLEET: 5,
  },
};


export default SCORING;