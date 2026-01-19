import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getEnv } from "../../config/env";
import { getExperimentsEnabled, getFeatureFlag } from "../../config/featureFlags";
import { Badge } from "../ui/Badge";

// PUBLIC_INTERFACE
export function Sidebar() {
  /** Optional sidebar with quick links and environment status. */
  const location = useLocation();
  const env = getEnv();
  const experiments = getExperimentsEnabled();
  const showChallenges = experiments || getFeatureFlag("challenges");

  const apiStatus = env.apiBase || env.backendUrl ? "Connected" : "Mock mode";

  return (
    <aside className="sidebar" aria-label="Quick links">
      <h3>Quick links</h3>
      <p>
        Navigate faster across Talenvia’s core areas. Current:{" "}
        <strong>{location.pathname}</strong>
      </p>

      <div className="sidebar-links">
        <Link className="sidebar-link" to="/jobs">
          Job search <small>Search & filters</small>
        </Link>
        <Link className="sidebar-link" to="/profile">
          Profile <small>View & edit</small>
        </Link>
        <Link className="sidebar-link" to="/tests">
          Mock Tests <small>Practice</small>
        </Link>
        {showChallenges ? (
          <Link className="sidebar-link" to="/challenges">
            Challenges <small>Progress</small>
          </Link>
        ) : null}
      </div>

      <div className="divider" />

      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="muted">API</span>
        <Badge variant={apiStatus === "Connected" ? "success" : "primary"}>{apiStatus}</Badge>
      </div>

      <div className="row" style={{ justifyContent: "space-between", marginTop: 10 }}>
        <span className="muted">Experiments</span>
        <Badge variant={experiments ? "success" : "default"}>{experiments ? "On" : "Off"}</Badge>
      </div>

      <div className="muted" style={{ marginTop: 12, fontSize: 12 }}>
        TODO: connect sidebar widgets to backend (saved searches, recommendations).
      </div>
    </aside>
  );
}
