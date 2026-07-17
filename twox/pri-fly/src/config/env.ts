/**
 * Centralized frontend environment configuration.
 * Vite only exposes variables prefixed with VITE_ via import.meta.env.
 */
const env = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api/v1",
};

export default env;
