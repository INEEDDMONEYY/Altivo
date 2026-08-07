import mongoose from "mongoose";
import { QUOTE_STATUS } from "../constants/rfq/quoteStatuses.js";

/**
 * Quote Schema
 *
 * An operator's priced offer against a specific RFQ.
 */
const quoteSchema = new mongoose.Schema(
  {
    rfqId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RFQ",
      required: true,
      index: true,
    },

    operatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Operator",
      required: true,
      index: true,
    },

    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },

    aircraftId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Aircraft",
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "USD",
      uppercase: true,
    },

    status: {
      type: String,
      enum: Object.values(QUOTE_STATUS),
      default: QUOTE_STATUS.PENDING,
      index: true,
    },

    submittedAt: {
      type: Date,
      default: Date.now,
    },

    acceptedAt: {
      type: Date,
    },

    rejectedAt: {
      type: Date,
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

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
