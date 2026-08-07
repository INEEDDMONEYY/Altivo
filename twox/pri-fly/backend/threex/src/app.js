import createExpressApp from "./startup/express.js";
import connectDatabase from "./startup/database.js";
import registerQueues from "./startup/queues.js";
import registerEvents from "./startup/events.js";
import registerScheduler from "./startup/scheduler.js";

export const createApp = async () => {
  await connectDatabase();

  registerEvents();
  registerQueues();
  registerScheduler();

  return createExpressApp();
};

export default createApp;