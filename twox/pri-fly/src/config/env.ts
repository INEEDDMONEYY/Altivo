// Must match constants/routes.js's API_BASE (`${API_PREFIX}${API_VERSION}` = "/api/v1") on the backend.
export const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
};
