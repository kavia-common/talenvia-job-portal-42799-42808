import React from "react";
import PageShell from "../components/PageShell";

// PUBLIC_INTERFACE
export default function HowItWorksPage() {
  /** Renders the How Talenvia Works informational page. */
  return (
    <PageShell
      title="How Talenvia Works"
      subtitle="A simple flow: discover → prepare → apply → improve."
    >
      <div className="tv-grid tv-grid-3">
        <div className="tv-card">
          <div className="tv-step">
            <div className="tv-step-num">1</div>
            <div className="tv-step-body">
              <div className="tv-card-title">Discover</div>
              <div className="tv-muted">Browse curated job listings and save what fits.</div>
            </div>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-step">
            <div className="tv-step-num">2</div>
            <div className="tv-step-body">
              <div className="tv-card-title">Prepare</div>
              <div className="tv-muted">Use mock tests to assess readiness and identify gaps.</div>
            </div>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-step">
            <div className="tv-step-num">3</div>
            <div className="tv-step-body">
              <div className="tv-card-title">Level up</div>
              <div className="tv-muted">Solve challenges, earn XP, and track progress in your profile.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tv-card tv-mt">
        <div className="tv-card-title">Coming next</div>
        <div className="tv-muted">
          Auth, saved jobs, test results, and challenge completion will be connected to backend APIs using existing
          environment variables.
        </div>
      </div>
    </PageShell>
  );
}
