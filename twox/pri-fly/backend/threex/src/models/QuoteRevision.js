import mongoose from "mongoose";

/**
 * Quote Revision Schema
 *
 * Historical record of price/terms changes made to a Quote after
 * its initial submission (re-quotes, negotiation, etc.).
 */
const quoteRevisionSchema = new mongoose.Schema(
  {
    quoteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quote",
      required: true,
      index: true,
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

    notes: {
      type: String,
      trim: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const QuoteRevision = mongoose.model("QuoteRevision", quoteRevisionSchema);

export default QuoteRevision;
