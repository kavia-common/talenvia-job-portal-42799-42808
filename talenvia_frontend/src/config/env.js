/**
 * Centralized access to environment variables.
 * Values may be empty in some environments; consumers must handle gracefully.
 */

const read = (key, fallback = "") => {
  const value = process.env[key];
  return typeof value === "string" ? value : fallback;
};

export const ENV = Object.freeze({
  NODE_ENV: read("REACT_APP_NODE_ENV", process.env.NODE_ENV || "development"),
  API_BASE: read("REACT_APP_API_BASE", ""),
  BACKEND_URL: read("REACT_APP_BACKEND_URL", ""),
  FRONTEND_URL: read("REACT_APP_FRONTEND_URL", ""),
  WS_URL: read("REACT_APP_WS_URL", ""),
  HEALTHCHECK_PATH: read("REACT_APP_HEALTHCHECK_PATH", ""),
  FEATURE_FLAGS: read("REACT_APP_FEATURE_FLAGS", ""),
  EXPERIMENTS_ENABLED: read("REACT_APP_EXPERIMENTS_ENABLED", "")
});

// PUBLIC_INTERFACE
export function getApiBaseUrl() {
  /** Returns the configured API base URL (may be empty until backend integration is added). */
  return ENV.API_BASE || ENV.BACKEND_URL || "";
}
