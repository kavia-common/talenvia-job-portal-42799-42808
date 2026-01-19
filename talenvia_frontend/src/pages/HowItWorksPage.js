import React from "react";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

// PUBLIC_INTERFACE
export function HowItWorksPage() {
  /** Explains how Talenvia works. */
  return (
    <>
      <div className="page-header howitworks-header">
        <div className="howitworks-header-top">
          <div className="howitworks-header-copy">
            <h1 className="page-title">How Talenvia Works</h1>
            <p className="page-subtitle">
              A calm, repeatable system for job search: discover roles, practice skills, and maintain momentum through simple weekly rituals.
            </p>
          </div>

          {/* Action kept as a Badge (existing UI). Positioned to align with title/subtitle row. */}
          <div className="howitworks-header-action">
            <Badge variant="primary">Jobs</Badge>
          </div>
        </div>
      </div>

      <div className="howitworks-steps">
        <Card>
          <div className="howitworks-step">
            <div className="howitworks-step-icon" aria-hidden="true">
              1
            </div>
            <div className="howitworks-step-body">
              <div className="howitworks-step-title">Discover</div>
              <div className="howitworks-step-subtitle">Search roles and save shortlists</div>
              <div className="howitworks-step-description" style={{ lineHeight: 1.7 }}>
                Use search and filters to find roles aligned with your interests. Save roles you want to apply for and keep notes on requirements.
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="howitworks-step">
            <div className="howitworks-step-icon" aria-hidden="true">
              2
            </div>
            <div className="howitworks-step-body">
              <div className="howitworks-step-title">Prepare</div>
              <div className="howitworks-step-subtitle">Practice with mock tests</div>
              <div className="howitworks-step-description" style={{ lineHeight: 1.7 }}>
                Take mock tests to sharpen fundamentals. Review results to identify gaps and focus your next week’s learning.
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="howitworks-step">
            <div className="howitworks-step-icon" aria-hidden="true">
              3
            </div>
            <div className="howitworks-step-body">
              <div className="howitworks-step-title">Build momentum</div>
              <div className="howitworks-step-subtitle">Gamified progress without pressure</div>
              <div className="howitworks-step-description" style={{ lineHeight: 1.7 }}>
                Lightweight challenges help you show up daily: applications, practice sessions, and portfolio improvements. Track progress and celebrate consistency.
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                Note: Challenges can be toggled via feature flags / experiments.
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="howitworks-step">
            <div className="howitworks-step-icon" aria-hidden="true">
              4
            </div>
            <div className="howitworks-step-body">
              <div className="howitworks-step-title">Refine</div>
              <div className="howitworks-step-subtitle">Update your profile and preferences</div>
              <div className="howitworks-step-description" style={{ lineHeight: 1.7 }}>
                Keep your profile current and make preferences explicit. This enables better recommendations and a smoother application workflow.
              </div>
              <div className="muted" style={{ marginTop: 10 }}>
                TODO: Add onboarding steps and personalized recommendations once backend is connected.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
