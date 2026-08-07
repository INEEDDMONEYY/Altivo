import mongoose from "mongoose";
import crypto from "crypto";

const emailVerificationSchema = new mongoose.Schema(
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

emailVerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

/**
 * Generate and store a verification token for the given user.
 * @param {ObjectId} userId
 * @returns {string} raw token
 */
emailVerificationSchema.statics.createToken = async function (userId) {
  const token = crypto.randomBytes(32).toString("hex");
  await this.deleteMany({ user: userId }); // invalidate old tokens
  await this.create({
    user: userId,
    token,
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  });
  return token;
};

/**
 * Verify a token and return the record.
 * @param {string} token
 * @returns {Document|null}
 */
emailVerificationSchema.statics.verifyToken = async function (token) {
  return this.findOne({ token, expiresAt: { $gt: new Date() } });
};

const EmailVerification = mongoose.model(
  "EmailVerification",
  emailVerificationSchema
);

export default EmailVerification;
