import React from "react";
import PageShell from "../components/PageShell";

// PUBLIC_INTERFACE
export default function AboutPage() {
  /** Renders the About Us informational page. */
  return (
    <PageShell
      title="About Us"
      subtitle="Talenvia blends career discovery, practice, and progress into one elegant experience."
    >
      <div className="tv-grid tv-grid-2">
        <div className="tv-card">
          <div className="tv-card-title">Our mission</div>
          <p className="tv-paragraph">
            Help candidates find meaningful opportunities while building confidence through structured preparation.
          </p>
          <p className="tv-paragraph tv-muted">
            This is a scaffolded frontend—content and integrations will expand as backend services are connected.
          </p>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">What you’ll find here</div>
          <ul className="tv-list-bullets">
            <li>Job browsing and saving</li>
            <li>Profile building and progress tracking</li>
            <li>Mock tests for role readiness</li>
            <li>Gamified challenges to practice skills</li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
