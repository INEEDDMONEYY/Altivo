import mongoose from "mongoose";

/**
 * Role Schema
 *
 * Defines access groups used across the platform.
 * Roles are mapped to permissions for RBAC.
 */
const roleSchema = new mongoose.Schema(
  {
    /**
     * Role name (system-level identifier)
     */
    name: {
      type: String,
      required: true,
      enum: [
        "ADMIN",
        "BROKER",
        "OPERATOR",
        "DISPATCHER",
        "PILOT",
        "USER",
      ],
      unique: true,
      index: true,
    },

    /**
     * Human-readable description
     */
    description: {
      type: String,
      default: "",
    },

    /**
     * Permissions attached to this role
     * This is where RBAC is enforced
     */
    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
      },
    ],

    /**
     * Whether this role is system-defined (cannot be deleted/edited)
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
 * Indexes for fast lookup
 */
roleSchema.index({ name: 1 });

const Role = mongoose.model("Role", roleSchema);

export default Role;