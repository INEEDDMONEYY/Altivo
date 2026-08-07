import mongoose from "mongoose";

/**
 * Permission Schema
 *
 * Represents a single actionable capability in the system.
 * Example: rfq.create, quote.submit, user.invite
 */
const permissionSchema = new mongoose.Schema(
  {
    /**
     * Unique permission key
     * Format: module.action
     */
    key: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    /**
     * Human-readable name
     */
    name: {
      type: String,
      required: true,
    },

    /**
     * Module this permission belongs to
     * Used for grouping in admin dashboards
     */
    module: {
      type: String,
      required: true,
      enum: [
        "auth",
        "user",
        "organization",
        "rfq",
        "quote",
        "aircraft",
        "messaging",
        "billing",
        "analytics",
        "system",
      ],
      index: true,
    },

    /**
     * Description of what this permission allows
     */
    description: {
      type: String,
      default: "",
    },

    /**
     * Whether this is a system-level permission
     * System permissions should not be deleted or modified casually
     */
    isSystem: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Indexes for performance and filtering
 */
permissionSchema.index({ key: 1 });
permissionSchema.index({ module: 1 });

const Permission = mongoose.model("Permission", permissionSchema);

export default Permission;