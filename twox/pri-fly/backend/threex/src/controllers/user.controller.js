import asyncHandler from "../middleware/asyncHandler.js";
import userService from "../services/user.service.js";
import { successResponse } from "../utils/response.js";
import { statusCodes } from "../constants/http/statusCodes.js";

/**
 * UPDATE USER ROLE (admin only)
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const { role } = req.body;

  const user = await userService.updateUserRole(userId, role);

  return successResponse(res, {
    statusCode: statusCodes.OK,
    message: "User role updated successfully",
    data: user,
  });
});
