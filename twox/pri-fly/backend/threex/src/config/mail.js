import env from "./env.js";
import logger from "./logger.js";

/**
 * Base Unosend configuration
 */
const UNOSEND_BASE_URL = env.unosend.baseUrl;
const UNOSEND_API_KEY = env.unosend.apiKey;

/**
 * Internal helper: send request to Unosend API
 */
const sendRequest = async (endpoint, payload) => {
  try {
    const res = await fetch(`${UNOSEND_BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${UNOSEND_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.message || "Unosend request failed");
    }

    return data;
  } catch (error) {
    logger.error({
      type: "EMAIL_ERROR",
      message: "Failed to send email via Unosend",
      error: error.message,
    });

    throw error;
  }
};

/**
 * Send a generic email
 */
export const sendEmail = async ({ to, subject, html, text }) => {
  return sendRequest("/email/send", {
    to,
    subject,
    html,
    text,
  });
};

/**
 * Send verification email
 */
export const sendVerificationEmail = async ({ to, name, token }) => {
  const verificationUrl = `${env.clientUrl}/verify-email?token=${token}`;

  return sendRequest("/email/send", {
    to,
    subject: "Verify your account",
    html: `
      <div>
        <h2>Welcome, ${name}</h2>
        <p>Please verify your email to activate your account.</p>
        <a href="${verificationUrl}">
          Verify Email
        </a>
      </div>
    `,
  });
};

/**
 * Send password reset email
 */
export const sendPasswordResetEmail = async ({ to, token }) => {
  const resetUrl = `${env.clientUrl}/reset-password?token=${token}`;

  return sendRequest("/email/send", {
    to,
    subject: "Reset your password",
    html: `
      <div>
        <p>You requested a password reset.</p>
        <a href="${resetUrl}">
          Reset Password
        </a>
      </div>
    `,
  });
};

/**
 * Send invitation email (organization onboarding)
 */
export const sendInvitationEmail = async ({
  to,
  inviterName,
  organizationName,
  inviteToken,
}) => {
  const inviteUrl = `${env.clientUrl}/accept-invite?token=${inviteToken}`;

  return sendRequest("/email/send", {
    to,
    subject: `You're invited to join ${organizationName}`,
    html: `
      <div>
        <h2>${inviterName} invited you</h2>
        <p>You have been invited to join ${organizationName}.</p>
        <a href="${inviteUrl}">
          Accept Invitation
        </a>
      </div>
    `,
  });
};

export default {
  sendEmail,
  sendVerificationEmail,
  sendPasswordResetEmail,
  sendInvitationEmail,
};