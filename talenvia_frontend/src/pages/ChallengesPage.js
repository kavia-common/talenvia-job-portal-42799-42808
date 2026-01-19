import React from "react";
import PageShell from "../components/PageShell";

const MOCK_CHALLENGES = [
  { id: "c1", title: "CSS Layout Sprint", desc: "Build a responsive card grid with elegant spacing.", reward: "50 XP" },
  { id: "c2", title: "React State Kata", desc: "Implement filtering + sorting with good UX.", reward: "80 XP" },
  { id: "c3", title: "API Integration Drill", desc: "Wire up a list view to an API (coming soon).", reward: "100 XP" }
];

// PUBLIC_INTERFACE
export default function ChallengesPage() {
  /** Renders the challenges page, a placeholder for gamified learning modules. */
  return (
    <PageShell
      title="Challenges"
      subtitle="Level up with bite-sized tasks and earn rewards. (Placeholder UI)"
      actions={<button className="tv-btn tv-btn-primary" type="button">Create Challenge (Coming soon)</button>}
    >
      <div className="tv-grid tv-grid-2">
        <div className="tv-card">
          <div className="tv-card-title">Your streak</div>
          <div className="tv-stats">
            <div className="tv-stat">
              <div className="tv-stat-value">4</div>
              <div className="tv-stat-label">days</div>
            </div>
            <div className="tv-stat">
              <div className="tv-stat-value">230</div>
              <div className="tv-stat-label">XP</div>
            </div>
            <div className="tv-stat">
              <div className="tv-stat-value">2</div>
              <div className="tv-stat-label">badges</div>
            </div>
          </div>
          <div className="tv-muted">Future: streaks and XP will sync to your profile.</div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Available challenges</div>
          <div className="tv-list">
            {MOCK_CHALLENGES.map((c) => (
              <div key={c.id} className="tv-challenge">
                <div className="tv-challenge-main">
                  <div className="tv-challenge-title">{c.title}</div>
                  <div className="tv-muted">{c.desc}</div>
                </div>
                <div className="tv-challenge-actions">
                  <span className="tv-pill outline">{c.reward}</span>
                  <button className="tv-btn tv-btn-primary" type="button">
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
