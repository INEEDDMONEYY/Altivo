import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

/**
 * Load environment variables from .env file
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

/**
 * Validate required environment variables
 */
const requiredEnvVars = [
  "NODE_ENV",
  "PORT",
  "MONGO_URI",
  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",
  "JWT_ACCESS_EXPIRES_IN",
  "JWT_REFRESH_EXPIRES_IN",
  "CLIENT_URL",
  "UNOSEND_API_KEY",
];

requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

/**
 * Centralized environment configuration
 */
const env = {
  nodeEnv: process.env.NODE_ENV,
  isProd: process.env.NODE_ENV === "production",
  isDev: process.env.NODE_ENV === "development",

  port: Number(process.env.PORT),

  mongoUri: process.env.MONGO_URI,

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },

  clientUrl: process.env.CLIENT_URL,

  unosend: {
    apiKey: process.env.UNOSEND_API_KEY,
    baseUrl: process.env.UNOSEND_BASE_URL || "https://api.unosend.com",
  },
};

export default env;