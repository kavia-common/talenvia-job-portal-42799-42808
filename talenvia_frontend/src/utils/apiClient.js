import { getEnv } from "../config/env";

/**
 * Minimal fetch wrapper.
 * If no base URL is configured, it returns a predictable mock/fallback response.
 */

// PUBLIC_INTERFACE
export async function apiRequest(path, { method = "GET", body, headers = {}, signal } = {}) {
  /** Performs an HTTP request against configured API base (if present). */
  const env = getEnv();

  // Prefer explicit API base; else fallback to backendUrl; else no network.
  const base = env.apiBase || env.backendUrl;

  if (!base) {
    // Graceful no-backend mode: return a consistent shape.
    return {
      ok: true,
      status: 200,
      data: null,
      meta: {
        mocked: true,
        reason: "No REACT_APP_API_BASE or REACT_APP_BACKEND_URL configured.",
      },
    };
  }

  const url = `${base.replace(/\/$/, "")}/${String(path).replace(/^\//, "")}`;

  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    signal,
  };

  if (body !== undefined) opts.body = typeof body === "string" ? body : JSON.stringify(body);

  let res;
  try {
    res = await fetch(url, opts);
  } catch (err) {
    return {
      ok: false,
      status: 0,
      data: null,
      error: String(err?.message || err),
      meta: { mocked: true, reason: "Network error or backend unreachable." },
    };
  }

  let data = null;
  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    try {
      data = await res.json();
    } catch {
      data = null;
    }
  } else {
    try {
      data = await res.text();
    } catch {
      data = null;
    }
  }

  return {
    ok: res.ok,
    status: res.status,
    data,
  };
}
