import mongoose from "mongoose";

/**
 * FlightLeg Schema
 *
 * Represents a single leg of an RFQ's itinerary.
 * An RFQ can have one (one-way) or many (multi-leg) FlightLegs.
 */
const flightLegSchema = new mongoose.Schema(
  {
    origin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Airport",
      required: true,
    },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Airport",
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    departureTime: {
      type: String, // e.g. "14:30"
      trim: true,
    },

    passengerCount: {
      type: Number,
      min: 1,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

const FlightLeg = mongoose.model("FlightLeg", flightLegSchema);

export default FlightLeg;
