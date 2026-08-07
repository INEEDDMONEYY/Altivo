import mongoose from "mongoose";
import crypto from "crypto";

const passwordResetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

passwordResetSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

/**
 * Generate and store a password reset token for the given user.
 * @param {ObjectId} userId
 * @returns {string} raw token
 */
passwordResetSchema.statics.createToken = async function (userId) {
  const token = crypto.randomBytes(32).toString("hex");
  await this.deleteMany({ user: userId }); // invalidate old tokens
  await this.create({
    user: userId,
    token,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
  });
  return token;
};

/**
 * Verify a token and return the record.
 * @param {string} token
 * @returns {Document|null}
 */
passwordResetSchema.statics.verifyToken = async function (token) {
  return this.findOne({ token, expiresAt: { $gt: new Date() } });
};

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchema);

export default PasswordReset;
