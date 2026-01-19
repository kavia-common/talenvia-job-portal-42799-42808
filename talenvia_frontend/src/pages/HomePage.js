import React, { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import { mockJobs } from "../data/mockJobs";

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Renders the home page with a jobs listing and placeholder filters. */
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mockJobs.filter((j) => {
      const matchesQuery =
        !q || `${j.title} ${j.company} ${j.location}`.toLowerCase().includes(q);
      const matchesLevel = level === "All" ? true : j.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [query, level]);

  return (
    <PageShell
      title="Discover jobs"
      subtitle="Search curated opportunities and save roles to your profile. (Mock data for now)"
      actions={
        <button className="tv-btn tv-btn-primary" type="button">
          Post a Job (Coming soon)
        </button>
      }
    >
      <div className="tv-grid tv-grid-2">
        <div className="tv-card">
          <div className="tv-card-title">Quick filters</div>
          <div className="tv-form">
            <label className="tv-label" htmlFor="job-search">
              Search
            </label>
            <input
              id="job-search"
              className="tv-input"
              placeholder="Title, company, location..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <label className="tv-label" htmlFor="job-level">
              Level
            </label>
            <select id="job-level" className="tv-select" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="All">All</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>

            <div className="tv-muted">
              Future: connect these filters to the backend via <code>REACT_APP_API_BASE</code>.
            </div>
          </div>
        </div>

        <div className="tv-card">
          <div className="tv-card-title">Recommended for you</div>
          <div className="tv-list">
            {filtered.length === 0 ? (
              <div className="tv-empty">
                No results. Try a different search or reset filters.
              </div>
            ) : (
              filtered.map((job) => (
                <article key={job.id} className="tv-job">
                  <div className="tv-job-main">
                    <div className="tv-job-title">{job.title}</div>
                    <div className="tv-job-meta">
                      <span className="tv-pill">{job.company}</span>
                      <span className="tv-pill subtle">{job.location}</span>
                      <span className="tv-pill outline">{job.level}</span>
                      {job.skill ? <span className="tv-pill subtle">{job.skill}</span> : null}
                      {typeof job.totalQuestions === "number" ? (
                        <span className="tv-pill outline">{job.totalQuestions} Qs</span>
                      ) : null}
                      {job.duration ? <span className="tv-pill outline">{job.duration}</span> : null}
                    </div>
                  </div>
                  <div className="tv-job-actions">
                    <button className="tv-btn tv-btn-secondary" type="button">
                      Save
                    </button>
                    <button className="tv-btn tv-btn-primary" type="button">
                      View
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
