import React from "react";
import { Card } from "../components/ui/Card";

// PUBLIC_INTERFACE
export function AboutPage() {
  /** About Talenvia informational page. */
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">About Us</h1>
        <p className="page-subtitle">
          Talenvia is an elegant job discovery and skill-building experience designed to keep you moving forward—calmly and consistently.
        </p>
      </div>

      <div className="stack">
        <Card title="Our mission" subtitle="Make job searching feel structured and achievable">
          <div style={{ lineHeight: 1.7 }}>
            We help candidates discover opportunities, strengthen interview skills, and build momentum through habit-forming challenges.
            The platform blends job listings, mock tests, and progress tracking in one focused experience.
          </div>
        </Card>

        <Card title="What you can do here" subtitle="A single place for your weekly career workflow">
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
            <li>Search and filter job listings</li>
            <li>Maintain a profile and highlight your skills</li>
            <li>Practice with mock tests and review results</li>
            <li>Use challenges to stay consistent and track progress</li>
          </ul>
          <div className="muted" style={{ marginTop: 12 }}>
            TODO: Add team details, contact page, and privacy policy.
          </div>
        </Card>
      </div>
    </>
  );
}
