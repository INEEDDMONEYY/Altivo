import { Router } from "express";

import authenticate from "../../../middleware/authenticate.js";


const router = Router();


/**
 * Availability Routes
 *
 * Base:
 * /api/v1/availability
 */


/**
 * Check aircraft availability
 *
 * POST /availability/check
 */
router.post(
  "/check",
  authenticate,
  (req, res) => {
    res.json({
      message: "Availability check endpoint ready",
    });
  }
);


/**
 * Find available aircraft
 *
 * GET /availability/aircraft/:aircraftId
 */
router.get(
  "/aircraft/:aircraftId",
  authenticate,
  (req, res) => {
    res.json({
      message: "Aircraft availability endpoint ready",
    });
  }
);


/**
 * Check operator availability
 *
 * GET /availability/operators/:operatorId
 */
router.get(
  "/operators/:operatorId",
  authenticate,
  (req, res) => {
    res.json({
      message: "Operator availability endpoint ready",
    });
  }
);


export default router;