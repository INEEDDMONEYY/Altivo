import { statusCodes } from "../constants/http/statusCodes.js";

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100;

const store = new Map();

/**
 * Simple in-memory rate limiter.
 * Limits each IP to MAX_REQUESTS per WINDOW_MS.
 */
export const rateLimiter = (req, res, next) => {
  const ip = req.ip || req.socket?.remoteAddress || "unknown";
  const now = Date.now();

  const record = store.get(ip);

  if (!record || now > record.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return next();
  }

  if (record.count >= MAX_REQUESTS) {
    return res.status(statusCodes.TOO_MANY_REQUESTS).json({
      status: "error",
      message: "Too many requests, please try again later.",
    });
  }

  record.count++;
  next();
};
