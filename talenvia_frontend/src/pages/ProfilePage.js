import React from "react";
import PageShell from "../components/PageShell";

// PUBLIC_INTERFACE
export default function ProfilePage() {
  /** Renders the user profile page with placeholder sections for future integration. */
  return (
    <PageShell
      title="Your profile"
      subtitle="Showcase your skills, saved jobs, and progress. (Placeholder UI)"
      actions={<button className="tv-btn tv-btn-primary" type="button">Edit Profile</button>}
    >
      <div className="tv-grid tv-grid-2">
        <div className="tv-card">
          <div className="tv-card-title">Profile summary</div>
          <div className="tv-kv">
            <div className="tv-kv-row">
              <div className="tv-kv-key">Name</div>
              <div className="tv-kv-value">Guest User</div>
            </div>
            <div className="tv-kv-row">
              <div className="tv-kv-key">Target role</div>
              <div className="tv-kv-value">Frontend Engineer</div>
            </div>
            <div className="tv-kv-row">
              <div className="tv-kv-key">Experience</div>
              <div className="tv-kv-value">3+ years (mock)</div>
            </div>
          </div>
          <div className="tv-muted">
            Future: connect auth + profile data once backend is available.
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Saved jobs</div>
          <div className="tv-empty">
            You haven’t saved any jobs yet. Save jobs from the Home page to track them here (coming soon).
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Skills & badges</div>
          <div className="tv-badges">
            <span className="tv-badge">React</span>
            <span className="tv-badge">CSS</span>
            <span className="tv-badge">Problem Solving</span>
            <span className="tv-badge subtle">More soon…</span>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Progress</div>
          <div className="tv-progress">
            <div className="tv-progress-row">
              <div className="tv-progress-label">Mock tests completed</div>
              <div className="tv-progress-bar">
                <div className="tv-progress-fill" style={{ width: "35%" }} />
              </div>
              <div className="tv-progress-value">3</div>
            </div>
            <div className="tv-progress-row">
              <div className="tv-progress-label">Challenges solved</div>
              <div className="tv-progress-bar">
                <div className="tv-progress-fill" style={{ width: "20%" }} />
              </div>
              <div className="tv-progress-value">5</div>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
