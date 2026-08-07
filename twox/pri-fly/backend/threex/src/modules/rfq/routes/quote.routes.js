import { Router } from "express";

import authenticate from "../../../middleware/authenticate.js";


const router = Router();


/**
 * Quote Routes
 *
 * Base:
 * /api/v1/quotes
 */


/**
 * Submit quote
 *
 * POST /api/v1/quotes
 */
router.post(
  "/",
  authenticate,
  (req, res) => {
    res.json({
      message: "Submit quote endpoint ready",
    });
  }
);


/**
 * Get quote
 *
 * GET /api/v1/quotes/:id
 */
router.get(
  "/:id",
  authenticate,
  (req, res) => {
    res.json({
      message: "Get quote endpoint ready",
    });
  }
);


/**
 * Get quotes by RFQ
 *
 * GET /api/v1/quotes/rfq/:rfqId
 */
router.get(
  "/rfq/:rfqId",
  authenticate,
  (req, res) => {
    res.json({
      message: "RFQ quotes endpoint ready",
    });
  }
);


/**
 * Update quote
 *
 * PATCH /api/v1/quotes/:id
 */
router.patch(
  "/:id",
  authenticate,
  (req, res) => {
    res.json({
      message: "Update quote endpoint ready",
    });
  }
);


/**
 * Accept quote
 *
 * PATCH /api/v1/quotes/:id/accept
 */
router.patch(
  "/:id/accept",
  authenticate,
  (req, res) => {
    res.json({
      message: "Accept quote endpoint ready",
    });
  }
);


/**
 * Decline quote
 *
 * PATCH /api/v1/quotes/:id/decline
 */
router.patch(
  "/:id/decline",
  authenticate,
  (req, res) => {
    res.json({
      message: "Decline quote endpoint ready",
    });
  }
);


export default router;