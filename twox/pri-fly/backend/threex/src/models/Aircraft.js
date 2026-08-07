import mongoose from "mongoose";
import { AIRCRAFT_STATUS } from "../constants/aircraft/statuses.js";

/**
 * Aircraft Schema
 *
 * A physical aircraft owned/operated by an Operator, matched against
 * RFQs based on category, capacity, and range.
 */
const aircraftSchema = new mongoose.Schema(
  {
    operatorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Operator",
      required: true,
      index: true,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AircraftCategory",
    },

    /**
     * Loose category label used for matching queries
     * (e.g. "LIGHT_JET", "HEAVY_JET", "ULTRA_LONG_RANGE")
     */
    category: {
      type: String,
      trim: true,
      index: true,
    },

    tailNumber: {
      type: String,
      trim: true,
      uppercase: true,
    },

    passengerCapacity: {
      type: Number,
      min: 1,
    },

    /**
     * Range in nautical miles
     */
    range: {
      type: Number,
      min: 0,
    },

    status: {
      type: String,
      enum: Object.values(AIRCRAFT_STATUS),
      default: AIRCRAFT_STATUS.ACTIVE,
      index: true,
    },

    /**
     * Rolling score used to rank aircraft during matching (higher = better)
     */
    operationalScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Aircraft = mongoose.model("Aircraft", aircraftSchema);

export default Aircraft;
