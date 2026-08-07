import mongoose from "mongoose";
import logger from "./logger.js";
import env from "./env.js";

/**
 * DATABASE CONNECTION
 * -------------------
 * Centralized MongoDB connection handler
 */

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.mongoUri, {
      dbName: env.DB_NAME,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    logger.info(
      `MongoDB Connected: ${conn.connection.host}`
    );

    return conn;
  } catch (error) {
    logger.error("MongoDB connection failed:", error.message);

    // Fail fast in production (important for reliability)
    process.exit(1);
  }
};

export default connectDB;