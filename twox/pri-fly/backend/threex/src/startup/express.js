import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { rateLimiter } from "../middleware/rateLimiter.js";
import notFound from "../middleware/notFound.js";
import errorHandler from "../middleware/errorHandler.js";

import routes from "./routes.js";

const createExpressApp = () => {
  const app = express();

  /**
   * =========================
   * CORE MIDDLEWARE
   * =========================
   */

  app.use(helmet()); // security headers
  app.use(cors()); // cross-origin support
  app.use(express.json({ limit: "10kb" })); // body parsing
  app.use(express.urlencoded({ extended: true }));

  /**
   * =========================
   * LOGGING
   * =========================
   */
  if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
  }

  /**
   * =========================
   * RATE LIMITING
   * =========================
   */
  app.use(rateLimiter);

  /**
   * =========================
   * HEALTH CHECK
   * =========================
   */
  app.get("/health", (req, res) => {
    res.status(200).json({
      status: "ok",
      service: "altivo-api",
      timestamp: new Date().toISOString(),
    });
  });

  // Render (and other platforms) ping "/" by default for health checks
  app.get("/", (req, res) => {
    res.status(200).json({
      status: "ok",
      service: "altivo-api",
    });
  });

  /**
   * =========================
   * API ROUTES
   * =========================
   */
  app.use("/api", routes);

  /**
   * =========================
   * 404 HANDLER
   * =========================
   */
  app.use(notFound);

  /**
   * =========================
   * GLOBAL ERROR HANDLER
   * =========================
   */
  app.use(errorHandler);

  return app;
};

export default createExpressApp;