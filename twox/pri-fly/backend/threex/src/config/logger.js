import pino from "pino";
import env from "./env.js";

/**
 * Base logger configuration
 * - Structured JSON in production
 * - Pretty logs in development
 */
const baseConfig = {
  level: env.isDev ? "debug" : "info",
  timestamp: pino.stdTimeFunctions.isoTime,
};

/**
 * Development logger (readable output)
 */
const devLogger = pino({
  ...baseConfig,
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname",
    },
  },
});

/**
 * Production logger (structured JSON)
 */
const prodLogger = pino(baseConfig);

/**
 * Main logger instance
 */
const logger = env.isDev ? devLogger : prodLogger;

/**
 * Helper: log API requests
 */
export const logRequest = (req) => {
  logger.info({
    type: "HTTP_REQUEST",
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userId: req.user?.id || null,
    organizationId: req.user?.organizationId || null,
  });
};

/**
 * Helper: log authentication events
 */
export const logAuthEvent = (event, data = {}) => {
  logger.info({
    type: "AUTH_EVENT",
    event,
    ...data,
  });
};

/**
 * Helper: log audit actions (important for aviation ops)
 */
export const logAuditEvent = (action, data = {}) => {
  logger.info({
    type: "AUDIT_EVENT",
    action,
    ...data,
  });
};

/**
 * Helper: log errors with context
 */
export const logError = (error, context = {}) => {
  logger.error({
    type: "ERROR",
    message: error.message,
    stack: error.stack,
    ...context,
  });
};

export default logger;