import mongoose from "mongoose";

/**
 * Organization Schema
 *
 * Represents a tenant in the system.
 * Every RFQ, quote, and operational action is scoped to an organization.
 */
const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    /**
     * Unique slug for URLs, dashboards, and API scoping
     */
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    /**
     * Organization type defines behavior in RFQ system
     */
    type: {
      type: String,
      enum: ["BROKER", "OPERATOR", "CHARTER", "CORPORATE", "OTHER"],
      required: true,
      index: true,
    },

    /**
     * Owner (primary admin user)
     */
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    /**
     * Members are stored in User.organizations,
     * but we still track active users count for performance
     */
    memberCount: {
      type: Number,
      default: 0,
    },

    /**
     * Organization status
     */
    status: {
      type: String,
      enum: ["ACTIVE", "SUSPENDED", "PENDING", "DELETED"],
      default: "PENDING",
      index: true,
    },

    /**
     * Branding & UI customization (for dashboards later)
     */
    branding: {
      logoUrl: String,
      primaryColor: String,
      secondaryColor: String,
    },

    /**
     * Operational settings for RFQ system behavior
     */
    settings: {
      autoAssignRFQs: {
        type: Boolean,
        default: false,
      },
      allowPublicQuotes: {
        type: Boolean,
        default: false,
      },
      timezone: {
        type: String,
        default: "UTC",
      },
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Indexes for performance at scale
 */
organizationSchema.index({ slug: 1 });
organizationSchema.index({ type: 1, status: 1 });

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;