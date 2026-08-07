import { SLA } from "../../../constants/rfq/sla.js";


/**
 * Create RFQ assignment notification
 *
 * Sent when operator receives
 * a new RFQ request.
 */
export const createRFQAssignmentNotification = ({
  rfq,
  operator,
  aircraft,
}) => {

  return {

    type:
      "RFQ_ASSIGNED",


    recipient:
      operator._id,


    priority:
      "HIGH",


    payload: {

      rfqId:
        rfq._id,

      aircraftId:
        aircraft._id,

      departure:
        rfq.departureAirport,

      arrival:
        rfq.arrivalAirport,

      departureDate:
        rfq.departureDate,

      responseDeadline:
        calculateDeadline(
          SLA.FIRST_RESPONSE_MINUTES
        ),

    },

  };

};



/**
 * Create operator reminder notification
 *
 * Triggered by SLA scheduler.
 */
export const createOperatorReminderNotification = ({
  rfq,
  operator,
}) => {

  return {

    type:
      "RFQ_REMINDER",


    recipient:
      operator._id,


    priority:
      "NORMAL",


    payload: {

      rfqId:
        rfq._id,


      message:
        "RFQ response requested",

    },

  };

};



/**
 * Create escalation notification
 *
 * Used when operators fail SLA.
 */
export const createEscalationNotification = ({
  rfq,
  operators,
}) => {

  return {

    type:
      "RFQ_ESCALATION",


    priority:
      "URGENT",


    recipients:
      operators.map(
        operator =>
          operator._id
      ),


    payload: {

      rfqId:
        rfq._id,


      reason:
        "No operator response within SLA",

    },

  };

};



/**
 * Create broker status update
 *
 * Keeps broker informed.
 */
export const createBrokerUpdateNotification = ({
  rfq,
  status,
  message,
}) => {

  return {

    type:
      "BROKER_RFQ_UPDATE",


    recipient:
      rfq.brokerId,


    priority:
      "NORMAL",


    payload: {

      rfqId:
        rfq._id,


      status,

      message,

    },

  };

};



/**
 * Build generic notification payload
 */
export const buildNotification = ({
  type,
  recipient,
  payload,
  priority = "NORMAL",
}) => {

  return {

    type,

    recipient,

    priority,

    payload,


    createdAt:
      new Date(),

  };

};



/**
 * Calculate notification deadline
 */
const calculateDeadline = (
  minutes
) => {

  return new Date(
    Date.now()
      +
    minutes * 60 * 1000
  );

};



/**
 * Build assignment notifications for every matched operator/aircraft pair.
 *
 * Public alias expected by the RFQ module barrel (modules/rfq/index.js).
 */
export const sendRFQNotifications = ({
  rfq,
  matches = [],
}) => {

  return matches.map(
    ({ operator, aircraft }) =>
      createRFQAssignmentNotification({
        rfq,
        operator,
        aircraft,
      })
  );

};



export default {
  createRFQAssignmentNotification,
  createOperatorReminderNotification,
  createEscalationNotification,
  createBrokerUpdateNotification,
  buildNotification,
  sendRFQNotifications,
  /*calculateDeadline*/    
};