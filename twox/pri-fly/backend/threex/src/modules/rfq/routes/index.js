import { Router } from "express";

import rfqRoutes from "./rfq.routes.js";
import quoteRoutes from "./quote.routes.js";
import availabilityRoutes from "./availability.routes.js";


const router = Router();


/**
 * RFQ Module Routes
 *
 * Mounted:
 * /api/v1
 */


/**
 * RFQ lifecycle
 */
router.use(
  "/rfqs",
  rfqRoutes
);


/**
 * Quote management
 */
router.use(
  "/quotes",
  quoteRoutes
);


/**
 * Aircraft availability
 */
router.use(
  "/availability",
  availabilityRoutes
);


export default router;