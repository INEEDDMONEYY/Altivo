/**
 * SLA Configuration
 * Times are stored in minutes.
 * Complete file because routing depends on:
 * Initial operator count
 * Escalation timing,
 * reminder timing,
 * broker response expectation
 * This file needs to support the sla service from the rfq service module.
 */

export const SLA = Object.freeze({
  RESPONSE_REMINDER: 15,
  RESPONSE_TARGET: 30,
  BROKER_ALERT: 45,
  ESCALATION: 60,
});

export default SLA;