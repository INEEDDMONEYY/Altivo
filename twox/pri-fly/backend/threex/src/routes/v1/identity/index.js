import express from "express";

import authRoutes from "./auth.routes.js";
import userRoutes from "./user.routes.js";
import organizationRoutes from "./organization.routes.js";
import invitationRoutes from "./invitation.routes.js";
import apiKeyRoutes from "./apiKey.routes.js";

const router = express.Router();

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/users",
  userRoutes
);

router.use(
  "/organizations",
  organizationRoutes
);

router.use(
  "/invitations",
  invitationRoutes
);

router.use(
  "/api-keys",
  apiKeyRoutes
);

export default router;
