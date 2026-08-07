import express from "express";


// Identity
import identityRoutes from "./identity/index.js";


// Domain Modules
import {
  rfqRoutes,
  quoteRoutes,
  availabilityRoutes,
} from "../../modules/rfq/index.js";


import aircraftRoutes from "../../modules/aircraft/routes/index.js";
import operatorRoutes from "../../modules/operators/routes/index.js";
import analyticsRoutes from "../../modules/analytics/routes/index.js";
import messagingRoutes from "../../modules/messaging/routes/index.js";


const router = express.Router();


/**
 * Identity
 */

router.use(identityRoutes);



/**
 * RFQ Platform
 */

router.use(
  "/rfqs",
  rfqRoutes
);

router.use(
  "/quotes",
  quoteRoutes
);

router.use(
  "/availability",
  availabilityRoutes
);



/**
 * Aircraft
 */

router.use(
  "/aircraft",
  aircraftRoutes
);



/**
 * Operators
 */

router.use(
  "/operators",
  operatorRoutes
);



/**
 * Analytics
 */

router.use(
  "/analytics",
  analyticsRoutes
);



/**
 * Messaging
 */

router.use(
  "/messaging",
  messagingRoutes
);


export default router;