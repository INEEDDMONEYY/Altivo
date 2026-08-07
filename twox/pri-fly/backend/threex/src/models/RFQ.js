import mongoose from "mongoose";

import RFQ_STATUS from "../constants/rfq/statuses.js";
import TRIP_TYPE from "../constants/rfq/tripTypes.js";
import SOURCING_TYPE from "../constants/rfq/sourcingTypes.js";
import RFQ_PRIORITY from "../constants/rfq/priorities.js";
import CABIN_CLASS from "../constants/rfq/cabinClasses.js";

/**
 * RFQ Schema
 *
 * Core "Request for Quote" entity. A broker submits an RFQ describing
 * an itinerary (one or more FlightLegs), and it is matched/quoted by
 * operators until it is awarded, confirmed, or closed out.
 */
const rfqSchema = new mongoose.Schema(
  {
    brokerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true,
    },

    legs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FlightLeg",
      },
    ],

    tripType: {
      type: String,
      enum: Object.values(TRIP_TYPE),
      default: TRIP_TYPE.ONE_WAY,
    },

    sourcingType: {
      type: String,
      enum: Object.values(SOURCING_TYPE),
      default: SOURCING_TYPE.NETWORK,
    },

    priority: {
      type: String,
      enum: Object.values(RFQ_PRIORITY),
      default: RFQ_PRIORITY.NORMAL,
    },

    cabinClass: {
      type: String,
      enum: Object.values(CABIN_CLASS),
    },

    passengerCount: {
      type: Number,
      min: 1,
      default: 1,
    },

    status: {
      type: String,
      enum: Object.values(RFQ_STATUS),
      default: RFQ_STATUS.DRAFT,
      index: true,
    },

    /**
     * Operators matched/invited to quote this RFQ
     */
    matchedOperators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Operator",
      },
    ],

    /**
     * SLA tracking events (response reminders, alerts, escalations, etc.)
     */
    slaEvents: [
      {
        event: {
          type: String,
          required: true,
        },
        occurredAt: {
          type: Date,
          default: Date.now,
        },
        meta: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
    ],

    notes: {
      type: String,
      trim: true,
    },

    archived: {
      type: Boolean,
      default: false,
      index: true,
    },

    archivedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const RFQ = mongoose.model("RFQ", rfqSchema);

export default RFQ;
