import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { mockJobs } from "../mock/mockData";

// PUBLIC_INTERFACE
export function JobsPage() {
  /** Job listings page: search, filter, list, and details panel. */
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [selectedId, setSelectedId] = useState(mockJobs[0]?.id || "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const loc = location.trim().toLowerCase();
    return mockJobs.filter((j) => {
      const matchesQuery =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.tags.some((t) => t.toLowerCase().includes(q));
      const matchesLoc = !loc || j.location.toLowerCase().includes(loc);
      return matchesQuery && matchesLoc;
    });
  }, [query, location]);

  const selected = filtered.find((j) => j.id === selectedId) || filtered[0] || null;

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Job Listings</h1>
        <p className="page-subtitle">
          Search and filter roles. This view uses mock data when backend URLs are not configured.
          <span className="muted"> (TODO: wire to backend search endpoint.)</span>
        </p>
      </div>

      <div className="card" style={{ marginBottom: 18 }}>
        <div className="row">
          <div style={{ flex: 2, minWidth: 240 }}>
            <Input
              id="job-query"
              label="Search"
              placeholder="Role, company, or skill (e.g., React)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div style={{ flex: 1, minWidth: 200 }}>
            <Input
              id="job-location"
              label="Location"
              placeholder="Remote, New York, Austin..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div style={{ alignSelf: "end" }}>
            <Button variant="ghost" onClick={() => { setQuery(""); setLocation(""); }}>
              Clear
            </Button>
          </div>
        </div>
      </div>

      <div className="shell-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="stack" aria-label="Job list">
          <Card
            title={`Results (${filtered.length})`}
            subtitle="Select a role to view details"
          >
            {filtered.length === 0 ? (
              <div className="muted">No jobs match your filters.</div>
            ) : (
              <table className="table" aria-label="Job results table">
                <thead>
                  <tr>
                    <th>Role</th>
                    <th>Company</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((job) => (
                    <tr
                      key={job.id}
                      onClick={() => setSelectedId(job.id)}
                      style={{
                        cursor: "pointer",
                        background:
                          selectedId === job.id ? "rgba(139, 92, 246, 0.10)" : "transparent",
                      }}
                      aria-selected={selectedId === job.id}
                    >
                      <td style={{ fontWeight: 800 }}>{job.title}</td>
                      <td>{job.company}</td>
                      <td className="muted">{job.location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </Card>
        </div>

        <div className="stack" aria-label="Job details">
          <Card
            title="Details"
            subtitle={selected ? `${selected.company} • ${selected.location}` : "Select a job"}
            actions={
              selected ? (
                <>
                  <Badge variant="primary">{selected.type}</Badge>
                  <Badge variant="success">{selected.salaryRange}</Badge>
                </>
              ) : null
            }
          >
            {selected ? (
              <>
                <div className="row" style={{ marginBottom: 10 }}>
                  {selected.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div style={{ lineHeight: 1.6 }}>{selected.description}</div>
                <div className="divider" />
                <div className="row">
                  <Button
                    variant="primary"
                    onClick={() => alert("TODO: Implement apply flow / save job.")}
                  >
                    Apply / Save
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => alert("TODO: Share job link.")}
                  >
                    Share
                  </Button>
                </div>
              </>
            ) : (
              <div className="muted">No job selected.</div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}
