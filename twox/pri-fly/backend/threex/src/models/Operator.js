import mongoose from "mongoose";
import { OPERATOR_STATUS } from "../constants/aircraft/operatorStatuses.js";

/**
 * Operator Schema
 *
 * A charter operator that can be matched to RFQs, quote flights,
 * and accept/decline sourcing requests.
 */
const operatorSchema = new mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: Object.values(OPERATOR_STATUS),
      default: OPERATOR_STATUS.PENDING_VERIFICATION,
      index: true,
    },

    /**
     * Regions this operator services (used by matching/routing engine)
     */
    regionsServed: {
      type: [String],
      default: [],
    },

    /**
     * Aircraft categories this operator can fulfill
     */
    aircraftCategories: {
      type: [String],
      default: [],
    },

    /**
     * Home/base airports
     */
    bases: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Airport",
      },
    ],

    /**
     * Rolling score used to rank operators during matching (higher = better)
     */
    responseScore: {
      type: Number,
      default: 0,
    },

    /**
     * SLA response performance metrics
     */
    responseMetrics: {
      avgResponseTimeMinutes: {
        type: Number,
        default: 0,
      },
      totalResponses: {
        type: Number,
        default: 0,
      },
      acceptanceRate: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Operator = mongoose.model("Operator", operatorSchema);

export default Operator;
