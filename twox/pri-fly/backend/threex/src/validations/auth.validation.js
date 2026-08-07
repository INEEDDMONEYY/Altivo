import { z } from "zod";

/**
 * REGISTER
 */
export const registerValidation = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password too long"),
    firstName: z
      .string()
      .min(2, "First name is too short")
      .max(50, "First name is too long")
      .optional(),
    lastName: z
      .string()
      .min(2, "Last name is too short")
      .max(50, "Last name is too long")
      .optional(),
  }),
});

/**
 * LOGIN
 */
export const loginValidation = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(1, "Password is required"),
  }),
});

/**
 * FORGOT PASSWORD
 */
export const forgotPasswordValidation = z.object({
  body: z.object({
    email: z.string().email("Invalid email format"),
  }),
});

/**
 * RESET PASSWORD
 */
export const resetPasswordValidation = z.object({
  body: z.object({
    token: z.string().min(1, "Reset token is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password too long"),
  }),
});

/**
 * REFRESH TOKEN
 */
export const refreshTokenValidation = z.object({
  body: z.object({
    refreshToken: z.string().min(1, "Refresh token is required"),
  }),
});

/**
 * VERIFY EMAIL
 */
export const verifyEmailValidation = z.object({
  body: z.object({
    token: z.string().min(1, "Verification token is required"),
  }),
});