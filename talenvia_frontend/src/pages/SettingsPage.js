import React, { useState } from "react";
import PageShell from "../components/PageShell";
import { ENV } from "../config/env";

// PUBLIC_INTERFACE
export default function SettingsPage() {
  /** Renders the settings page with placeholders for user preferences and integrations. */
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);

  return (
    <PageShell
      title="Settings"
      subtitle="Manage your preferences and application settings. (Placeholder UI)"
      actions={<button className="tv-btn tv-btn-primary" type="button">Save (Coming soon)</button>}
    >
      <div className="tv-grid tv-grid-2">
        <div className="tv-card">
          <div className="tv-card-title">Preferences</div>

          <div className="tv-form">
            <label className="tv-check">
              <input
                type="checkbox"
                checked={emailUpdates}
                onChange={(e) => setEmailUpdates(e.target.checked)}
              />
              <span>Receive weekly job recommendations</span>
            </label>

            <label className="tv-check">
              <input
                type="checkbox"
                checked={privacyMode}
                onChange={(e) => setPrivacyMode(e.target.checked)}
              />
              <span>Privacy mode (hide profile from public views)</span>
            </label>

            <div className="tv-muted">These settings will persist once authentication is connected.</div>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Environment</div>
          <div className="tv-kv">
            <div className="tv-kv-row">
              <div className="tv-kv-key">App mode</div>
              <div className="tv-kv-value">{ENV.NODE_ENV}</div>
            </div>
            <div className="tv-kv-row">
              <div className="tv-kv-key">API base</div>
              <div className="tv-kv-value">
                {ENV.API_BASE || <span className="tv-muted">(not configured)</span>}
              </div>
            </div>
            <div className="tv-kv-row">
              <div className="tv-kv-key">Backend URL</div>
              <div className="tv-kv-value">
                {ENV.BACKEND_URL || <span className="tv-muted">(not configured)</span>}
              </div>
            </div>
            <div className="tv-kv-row">
              <div className="tv-kv-key">WebSocket URL</div>
              <div className="tv-kv-value">
                {ENV.WS_URL || <span className="tv-muted">(not configured)</span>}
              </div>
            </div>
          </div>
          <div className="tv-muted">
            Values are read from <code>REACT_APP_*</code> variables. No URLs are hardcoded.
          </div>
        </div>
      </div>
    </PageShell>
  );
}
