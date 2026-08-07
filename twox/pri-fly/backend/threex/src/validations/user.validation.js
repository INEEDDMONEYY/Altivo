import { z } from "zod";
import { USER_ROLE_VALUES } from "../constants/auth/userRoles.js";

const objectIdSchema = z
  .string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid user ID format");

/**
 * UPDATE USER ROLE (admin only)
 */
export const updateUserRoleValidation = z.object({
  params: z.object({
    userId: objectIdSchema,
  }),
  body: z.object({
    role: z.enum(USER_ROLE_VALUES, `Role must be one of: ${USER_ROLE_VALUES.join(", ")}`),
  }),
});
