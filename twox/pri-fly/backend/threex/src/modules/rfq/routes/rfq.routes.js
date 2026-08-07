import { Router } from "express";

import {
  createRFQController,
  getBrokerRFQsController,
  getRFQController,
  updateRFQController,
  updateRFQStatusController,
  archiveRFQController,
} from "../controllers/rfq.controller.js";

import authenticate from "../../../middleware/authenticate.js";


const router = Router();


/**
 * RFQ Routes
 *
 * Base:
 * /api/v1/rfqs
 */


/**
 * Create RFQ
 *
 * POST /api/v1/rfqs
 */
router.post(
  "/",
  authenticate,
  createRFQController
);


/**
 * Get broker RFQs
 *
 * GET /api/v1/rfqs
 */
router.get(
  "/",
  authenticate,
  getBrokerRFQsController
);


/**
 * Get RFQ details
 *
 * GET /api/v1/rfqs/:id
 */
router.get(
  "/:id",
  authenticate,
  getRFQController
);


/**
 * Update RFQ
 *
 * PATCH /api/v1/rfqs/:id
 */
router.patch(
  "/:id",
  authenticate,
  updateRFQController
);


/**
 * Update RFQ status
 *
 * PATCH /api/v1/rfqs/:id/status
 */
router.patch(
  "/:id/status",
  authenticate,
  updateRFQStatusController
);


/**
 * Archive RFQ
 *
 * PATCH /api/v1/rfqs/:id/archive
 */
router.patch(
  "/:id/archive",
  authenticate,
  archiveRFQController
);


export default router;