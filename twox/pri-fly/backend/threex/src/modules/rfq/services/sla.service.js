import { SLA } from "../../../constants/rfq/sla.js";


/**
 * Create SLA tracking state
 *
 * Called when RFQ is created.
 */
export const initializeSLA = (
  rfq
) => {

  const createdAt =
    new Date();


  return {

    rfqId:
      rfq._id,


    createdAt,


    deadlines: {

      firstResponse:
        addMinutes(
          createdAt,
          SLA.FIRST_RESPONSE_MINUTES
        ),


      reminder:
        addMinutes(
          createdAt,
          SLA.REMINDER_MINUTES
        ),


      escalation:
        addMinutes(
          createdAt,
          SLA.ESCALATION_MINUTES
        ),


      brokerReady:
        addMinutes(
          createdAt,
          SLA.BROKER_RESPONSE_MINUTES
        ),

    },


    status:
      "ACTIVE",

  };

};



/**
 * Determine current SLA stage
 */
export const evaluateSLA = (
  sla,
  now = new Date()
) => {


  if (
    now >= sla.deadlines.brokerReady
  ) {

    return {
      stage:
        "BROKER_READY",

      breached:
        true,
    };

  }



  if (
    now >= sla.deadlines.escalation
  ) {

    return {
      stage:
        "ESCALATION",

      breached:
        true,
    };

  }



  if (
    now >= sla.deadlines.reminder
  ) {

    return {
      stage:
        "REMINDER",

      breached:
        false,
    };

  }



  return {

    stage:
      "INITIAL_ROUTING",

    breached:
      false,

  };

};



/**
 * Check operator response SLA
 */
export const evaluateOperatorResponse = ({
  assignedAt,
  respondedAt,
}) => {


  if (!respondedAt) {

    return {

      responded:
        false,


      durationMinutes:
        calculateMinutes(
          assignedAt,
          new Date()
        ),

    };

  }



  return {

    responded:
      true,


    durationMinutes:
      calculateMinutes(
        assignedAt,
        respondedAt
      ),

  };

};



/**
 * Determine if RFQ requires escalation
 */
export const requiresEscalation = ({
  responseCount,
  createdAt,
}) => {

  const elapsed =
    calculateMinutes(
      createdAt,
      new Date()
    );


  return (
    responseCount === 0 &&
    elapsed >= SLA.ESCALATION_MINUTES
  );

};



/**
 * Create SLA event payload
 *
 * Stored later through repository.
 */
export const createSLAEvent = ({
  rfqId,
  type,
  metadata = {},
}) => {

  return {

    rfqId,

    type,

    metadata,

    createdAt:
      new Date(),

  };

};



/**
 * Add minutes to date
 */
const addMinutes = (
  date,
  minutes
) => {

  return new Date(
    date.getTime()
      +
    minutes * 60 * 1000
  );

};



/**
 * Calculate minute difference
 */
const calculateMinutes = (
  start,
  end
) => {

  return Math.floor(
    (
      end.getTime()
      -
      start.getTime()
    )
    /
    60000
  );

};



export default {
  initializeSLA,
  evaluateSLA,
  evaluateOperatorResponse,
  requiresEscalation,
  createSLAEvent,
};