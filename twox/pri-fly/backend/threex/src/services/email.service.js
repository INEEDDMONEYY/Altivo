import logger from "../config/logger.js";

/**
 * Email service stub — replace with Unosend integration.
 */
const emailService = {
  sendVerificationEmail: async (email, token) => {
    logger.warn(`[EMAIL STUB] sendVerificationEmail → ${email}`);
  },
  sendPasswordResetEmail: async (email, token) => {
    logger.warn(`[EMAIL STUB] sendPasswordResetEmail → ${email}`);
  },
};

export default emailService;
