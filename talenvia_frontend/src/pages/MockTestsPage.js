import React from "react";
import PageShell from "../components/PageShell";

// PUBLIC_INTERFACE
export default function MockTestsPage() {
  /** Renders the mock tests page with placeholder test catalog. */
  return (
    <PageShell
      title="Mock tests"
      subtitle="Practice with role-based assessments and track your performance. (Placeholder UI)"
      actions={<button className="tv-btn tv-btn-primary" type="button">Start a Test</button>}
    >
      <div className="tv-grid tv-grid-3">
        <div className="tv-card">
          <div className="tv-card-title">Frontend (React)</div>
          <div className="tv-muted">45 min • 25 questions • mixed difficulty</div>
          <div className="tv-card-actions">
            <button className="tv-btn tv-btn-secondary" type="button">Preview</button>
            <button className="tv-btn tv-btn-primary" type="button">Start</button>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Backend (Node.js)</div>
          <div className="tv-muted">60 min • 30 questions • scenario-based</div>
          <div className="tv-card-actions">
            <button className="tv-btn tv-btn-secondary" type="button">Preview</button>
            <button className="tv-btn tv-btn-primary" type="button">Start</button>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Data & Analytics</div>
          <div className="tv-muted">40 min • 20 questions • practical</div>
          <div className="tv-card-actions">
            <button className="tv-btn tv-btn-secondary" type="button">Preview</button>
            <button className="tv-btn tv-btn-primary" type="button">Start</button>
          </div>
        </div>
      </div>

      <div className="tv-card tv-mt">
        <div className="tv-card-title">Results & insights</div>
        <div className="tv-empty">
          This section will show score history, strengths, and recommended next steps once data is connected.
        </div>
      </div>
    </PageShell>
  );
}
