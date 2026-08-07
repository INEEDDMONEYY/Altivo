/**
 * RFQ Module Public API
 *
 * The RFQ domain boundary.
 *
 * External modules should import from here.
 *
 * Do not import directly from:
 * - services
 * - repositories
 * - controllers
 */


// ================================
// RFQ Services
// ================================

export {
  createRFQ,
  getRFQById,
  getRFQsByBroker,
  updateRFQ,
  updateRFQStatus,
  archiveRFQ,
} from "./services/rfq.service.js";


// ================================
// Matching
// ================================

export {
  matchRFQ,
} from "./services/matching.service.js";


// ================================
// Availability
// ================================

export {
  checkAircraftAvailability,
  findAvailableAircraft,
  checkOperatorAvailability,
  validateAvailability,
} from "./services/availability.service.js";


// ================================
// Routing
// ================================

export {
  routeRFQ,
} from "./services/routing.service.js";


// ================================
// SLA
// ================================

export {
  evaluateSLA,
  createSLAEvent,
} from "./services/sla.service.js";


// ================================
// Notifications
// ================================

export {
  sendRFQNotifications,
} from "./services/notification.service.js";


// ================================
// Pricing
// ================================

export {
  calculatePricing,
} from "./services/pricing.service.js";


// ================================
// Quotes
// ================================

export {
  createQuote,
  submitQuote,
  acceptQuote,
  declineQuote,
} from "./services/quote.service.js";


// ================================
// Controllers
// ================================

export * as rfqController from "./controllers/rfq.controller.js";
export * as quoteController from "./controllers/quote.controller.js";
export * as availabilityController from "./controllers/availability.controller.js";
export * as operatorController from "./controllers/operator.controller.js";


// ================================
// Routes
// ================================

export {
  default as rfqRoutes,
} from "./routes/rfq.routes.js";

export {
  default as quoteRoutes,
} from "./routes/quote.routes.js";

export {
  default as availabilityRoutes,
} from "./routes/availability.routes.js";