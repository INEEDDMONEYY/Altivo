import mongoose from "mongoose";
import { hashPassword } from "../utils/hash.js";
import { USER_ROLE_VALUES } from "../constants/auth/userRoles.js";

/**
 * User Schema
 *
 * Core identity model for the entire RFQ platform.
 * Every action in the system ties back to a User.
 */
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    password: {
      type: String,
      required: true,
      select: false, // never return password by default
    },

    firstName: {
      type: String,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    /**
     * Global role (system-level role)
     * Organization-level roles will override this later
     */
    role: {
      type: String,
      enum: USER_ROLE_VALUES,
      default: "USER",
      index: true,
    },

    /**
     * Multi-tenant support
     * A user can belong to multiple organizations later
     */
    organizations: [
      {
        organizationId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Organization",
        },
        role: {
          type: String,
          enum: ["ADMIN", "BROKER", "OPERATOR", "DISPATCHER", "PILOT", "MEMBER"],
        },
        joinedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    lastLoginAt: {
      type: Date,
    },

    /**
     * Soft security flags
     */
    failedLoginAttempts: {
      type: Number,
      default: 0,
    },

    lockedUntil: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * Pre-save hook
 * Ensures password is always hashed before saving
 */
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await hashPassword(this.password);
});

/**
 * Indexes for performance at scale
 */
userSchema.index({ "organizations.organizationId": 1 });

const User = mongoose.model("User", userSchema);

export default User;