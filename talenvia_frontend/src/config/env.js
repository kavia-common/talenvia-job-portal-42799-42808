/**
 * Env helpers for the Talenvia frontend.
 * Uses CRA-style REACT_APP_* variables. All values are optional and should have safe fallbacks.
 */

// PUBLIC_INTERFACE
export function getEnv() {
  /** Returns normalized environment configuration derived from REACT_APP_* variables. */
  const apiBase = process.env.REACT_APP_API_BASE || "";
  const backendUrl = process.env.REACT_APP_BACKEND_URL || "";
  const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "";
  const wsUrl = process.env.REACT_APP_WS_URL || "";

  const nodeEnv = process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || "development";
  const logLevel = process.env.REACT_APP_LOG_LEVEL || (nodeEnv === "production" ? "warn" : "debug");
  const healthcheckPath = process.env.REACT_APP_HEALTHCHECK_PATH || "/health";

  return {
    apiBase,
    backendUrl,
    frontendUrl,
    wsUrl,
    nodeEnv,
    logLevel,
    healthcheckPath,
  };
}
