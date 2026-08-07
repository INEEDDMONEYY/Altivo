import dotenv from "dotenv";
dotenv.config();

import createExpressApp from "./startup/express.js";
import connectDB from "./config/database.js";
import logger from "./config/logger.js";

const app = createExpressApp();

/**
 * START SERVER SEQUENCE
 */
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    logger.info(`🚀 Server running on port ${PORT}`);
  });
};

startServer();