import mongoose from "mongoose";

/**
 * Aircraft Availability Schema
 *
 * Tracks booked/blocked windows for an aircraft; queried before an RFQ
 * is sent out to confirm the aircraft can operate the requested dates.
 */
const aircraftAvailabilitySchema = new mongoose.Schema(
  {
    aircraftId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Aircraft",
      required: true,
      index: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
      index: true,
    },

    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

aircraftAvailabilitySchema.index({ aircraftId: 1, startDate: 1, endDate: 1 });

const AircraftAvailability = mongoose.model(
  "AircraftAvailability",
  aircraftAvailabilitySchema
);

export default AircraftAvailability;
