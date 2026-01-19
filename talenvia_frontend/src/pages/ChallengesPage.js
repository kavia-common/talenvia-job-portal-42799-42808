import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { mockChallenges } from "../mock/mockData";

// PUBLIC_INTERFACE
export function ChallengesPage() {
  /** Gamified challenges: list, participate, and track progress (mock/local). */
  const [progressById, setProgressById] = useState(() => {
    const init = {};
    for (const c of mockChallenges) init[c.id] = c.progress;
    return init;
  });

  const enriched = useMemo(() => {
    return mockChallenges.map((c) => ({
      ...c,
      progress: progressById[c.id] ?? c.progress,
    }));
  }, [progressById]);

  function increment(id) {
    setProgressById((p) => ({
      ...p,
      [id]: Math.min((p[id] ?? 0) + 1, mockChallenges.find((c) => c.id === id)?.goal ?? 0),
    }));
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Gamified Challenges</h1>
        <p className="page-subtitle">
          Participate in challenges and track progress. This module can be enabled via feature flags.
          <span className="muted"> (TODO: persist progress to backend.)</span>
        </p>
      </div>

      <div className="stack">
        {enriched.map((c) => {
          const complete = c.progress >= c.goal;
          return (
            <Card
              key={c.id}
              title={c.title}
              subtitle={c.description}
              actions={
                <>
                  <Badge variant={complete ? "success" : "primary"}>
                    {c.progress}/{c.goal}
                  </Badge>
                  <Button variant={complete ? "ghost" : "primary"} onClick={() => increment(c.id)} disabled={complete}>
                    {complete ? "Completed" : "Log progress"}
                  </Button>
                </>
              }
            >
              <div className="muted" style={{ fontSize: 13 }}>
                Tip: Set small daily goals and use Talenvia mock tests to reinforce learning.
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
