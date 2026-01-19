import React from "react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

// PUBLIC_INTERFACE
export function HowItWorksPage() {
  /** Explains how Talenvia works. */
  return (
    <>
      <div className="page-header">
        <h1 className="page-title">How Talenvia Works</h1>
        <p className="page-subtitle">
          A calm, repeatable system for job search: discover roles, practice skills, and maintain momentum through simple weekly rituals.
        </p>
      </div>

      <div className="stack">
        <Card
          title="1) Discover"
          subtitle="Search roles and save shortlists"
          actions={<Badge variant="primary">Jobs</Badge>}
        >
          <div style={{ lineHeight: 1.7 }}>
            Use search and filters to find roles aligned with your interests. Save roles you want to apply for and keep notes on requirements.
          </div>
        </Card>

        <Card
          title="2) Prepare"
          subtitle="Practice with mock tests"
          actions={<Badge variant="primary">Mock Tests</Badge>}
        >
          <div style={{ lineHeight: 1.7 }}>
            Take mock tests to sharpen fundamentals. Review results to identify gaps and focus your next week’s learning.
          </div>
        </Card>

        <Card
          title="3) Build momentum"
          subtitle="Gamified progress without pressure"
          actions={<Badge variant="primary">Challenges</Badge>}
        >
          <div style={{ lineHeight: 1.7 }}>
            Lightweight challenges help you show up daily: applications, practice sessions, and portfolio improvements. Track progress and celebrate consistency.
          </div>
          <div className="muted" style={{ marginTop: 10 }}>
            Note: Challenges can be toggled via feature flags / experiments.
          </div>
        </Card>

        <Card title="4) Refine" subtitle="Update your profile and preferences">
          <div style={{ lineHeight: 1.7 }}>
            Keep your profile current and make preferences explicit. This enables better recommendations and a smoother application workflow.
          </div>
          <div className="muted" style={{ marginTop: 10 }}>
            TODO: Add onboarding steps and personalized recommendations once backend is connected.
          </div>
        </Card>
      </div>
    </>
  );
}
