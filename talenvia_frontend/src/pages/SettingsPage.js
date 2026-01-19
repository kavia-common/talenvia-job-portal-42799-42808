import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { getEnv } from "../config/env";
import { parseFeatureFlags } from "../config/featureFlags";

// PUBLIC_INTERFACE
export function SettingsPage() {
  /** User preferences/settings page (local only). */
  const env = useMemo(() => getEnv(), []);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [jobType, setJobType] = useState("Full-time");
  const [locationPreference, setLocationPreference] = useState("Remote");

  const flags = parseFeatureFlags(process.env.REACT_APP_FEATURE_FLAGS || "");

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">
          Personalize your experience. These settings are stored locally in this demo.
          <span className="muted"> (TODO: persist to backend.)</span>
        </p>
      </div>

      <Card
        title="Preferences"
        subtitle="Update defaults used in job recommendations"
        actions={<Button variant="primary" onClick={() => alert("TODO: Save preferences")}>Save</Button>}
      >
        <div className="stack">
          <label className="sidebar-link" style={{ cursor: "pointer" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <input type="checkbox" checked={emailAlerts} onChange={(e) => setEmailAlerts(e.target.checked)} />
              Email alerts for new roles
            </span>
            <small className="muted">{emailAlerts ? "Enabled" : "Disabled"}</small>
          </label>

          <Input
            id="pref-jobType"
            label="Preferred job type"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          />

          <Input
            id="pref-location"
            label="Preferred location"
            value={locationPreference}
            onChange={(e) => setLocationPreference(e.target.value)}
          />
        </div>
      </Card>

      <Card title="Environment" subtitle="Current runtime configuration (safe to share)">
        <div className="stack">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="muted">API Base</span>
            <Badge variant={env.apiBase ? "success" : "primary"}>{env.apiBase ? "Set" : "Not set"}</Badge>
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="muted">Backend URL</span>
            <Badge variant={env.backendUrl ? "success" : "primary"}>{env.backendUrl ? "Set" : "Not set"}</Badge>
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="muted">WS URL</span>
            <Badge variant={env.wsUrl ? "success" : "primary"}>{env.wsUrl ? "Set" : "Not set"}</Badge>
          </div>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <span className="muted">Log level</span>
            <Badge>{env.logLevel}</Badge>
          </div>

          <div className="divider" />

          <div className="muted" style={{ fontSize: 13 }}>
            Feature flags (REACT_APP_FEATURE_FLAGS):
          </div>
          <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
            {JSON.stringify(flags, null, 2)}
          </pre>
        </div>
      </Card>
    </>
  );
}
