/**
 * Reusable query filter builders shared across repositories.
 */

export const excludeArchived = (field = "archived") => ({
  [field]: { $ne: true },
});

export const matchStatus = (status, field = "status") => {
  if (!status) return {};
  return { [field]: Array.isArray(status) ? { $in: status } : status };
};

export const byOrganization = (organizationId, field = "organizationId") => ({
  [field]: organizationId,
});
