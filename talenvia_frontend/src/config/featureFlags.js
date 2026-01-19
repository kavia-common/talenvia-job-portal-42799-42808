/**
 * Feature flags for Talenvia.
 * - REACT_APP_FEATURE_FLAGS supports a CSV list (e.g. "challenges,tests") or JSON object (e.g. {"challenges":true})
 * - REACT_APP_EXPERIMENTS_ENABLED supports "true"/"1"/"yes"
 */

// PUBLIC_INTERFACE
export function parseFeatureFlags(raw) {
  /** Parses flags from string into a { [flagName]: boolean } object. */
  if (!raw || typeof raw !== "string") return {};

  const trimmed = raw.trim();
  if (!trimmed) return {};

  // JSON form: {"flag": true, "flag2": false}
  if (trimmed.startsWith("{")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && typeof parsed === "object") {
        const out = {};
        for (const [k, v] of Object.entries(parsed)) out[k] = Boolean(v);
        return out;
      }
    } catch {
      // fall back to CSV parsing
    }
  }

  // CSV form: "flag,flag2"
  const flags = trimmed
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const out = {};
  for (const f of flags) out[f] = true;
  return out;
}

// PUBLIC_INTERFACE
export function getExperimentsEnabled() {
  /** Returns boolean for experiments toggle. */
  const raw = String(process.env.REACT_APP_EXPERIMENTS_ENABLED || "").toLowerCase().trim();
  return raw === "true" || raw === "1" || raw === "yes" || raw === "on";
}

// PUBLIC_INTERFACE
export function getFeatureFlag(name) {
  /** Returns a single flag by name from REACT_APP_FEATURE_FLAGS. */
  const flags = parseFeatureFlags(process.env.REACT_APP_FEATURE_FLAGS || "");
  return Boolean(flags[name]);
}
