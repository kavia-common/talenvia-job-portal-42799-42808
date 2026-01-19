import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { mockTestData, mockTestsData } from "../mock/mockData";

function formatDuration(seconds) {
  const total = Number(seconds) || 0;
  const mins = Math.max(0, Math.round(total / 60));
  return `${mins} min`;
}

function safePercent(correct, total) {
  if (!total) return 0;
  return Math.round((correct / total) * 100);
}

// PUBLIC_INTERFACE
export function MockTestsPage() {
  /** Mock tests: browse available tests, select one, take it, and view results. */
  const [step, setStep] = useState("list"); // list | taking | results
  const [activeTestId, setActiveTestId] = useState("");
  const [answersByQuestionId, setAnswersByQuestionId] = useState({});

  const tests = useMemo(() => {
    // Ensure we always have at least the legacy single test available.
    const list = Array.isArray(mockTestsData) && mockTestsData.length ? mockTestsData : [mockTestData];

    // Dedupe by id in case something imports/combines data elsewhere.
    const seen = new Set();
    return list.filter((t) => {
      if (!t?.id || seen.has(t.id)) return false;
      seen.add(t.id);
      return true;
    });
  }, []);

  const activeTest = useMemo(() => tests.find((t) => t.id === activeTestId) || null, [tests, activeTestId]);

  const score = useMemo(() => {
    const qs = activeTest?.questions || [];
    let correct = 0;

    for (const q of qs) {
      const selected = answersByQuestionId[q.id];
      if (selected && selected === q.correctAnswer) correct += 1;
    }

    return { correct, total: qs.length, percent: safePercent(correct, qs.length) };
  }, [activeTest, answersByQuestionId]);

  function startTest(testId) {
    setActiveTestId(testId);
    setAnswersByQuestionId({});
    setStep("taking");
  }

  function exitToList() {
    setStep("list");
    setActiveTestId("");
    setAnswersByQuestionId({});
  }

  function submit() {
    setStep("results");
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Mock Tests</h1>
        <p className="page-subtitle">
          Practice with guided assessments and review results. This view uses local mock datasets.
          <span className="muted"> (TODO: load/persist tests from backend.)</span>
        </p>
      </div>

      {step === "list" ? (
        <div className="stack">
          <Card
            title="Available tests"
            subtitle="Select a test to begin"
            actions={<Badge variant="primary">{tests.length} tests</Badge>}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 14,
                maxHeight: "62vh",
                overflow: "auto",
                paddingRight: 6,
              }}
              aria-label="Mock tests list"
            >
              {tests.map((t) => (
                <div key={t.id} className="card" style={{ padding: 14 }}>
                  <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 900, lineHeight: 1.2 }}>{t.title}</div>
                      <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
                        {t.questions?.length ?? 0} questions • {formatDuration(t.duration)}
                      </div>
                    </div>
                    <Badge variant="primary">Mock</Badge>
                  </div>

                  <div className="divider" />

                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <Button variant="primary" onClick={() => startTest(t.id)}>
                      Start
                    </Button>
                    <Button variant="ghost" onClick={() => startTest(t.id)}>
                      View & take
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="muted" style={{ marginTop: 12, fontSize: 13 }}>
              Tip: Start with fundamentals (CSS/JS), then move to intermediate React to build confidence.
            </div>
          </Card>
        </div>
      ) : null}

      {step === "taking" ? (
        <Card
          title={activeTest ? activeTest.title : "Taking test"}
          subtitle={activeTest ? `${activeTest.questions.length} questions • ${formatDuration(activeTest.duration)}` : "Answer the questions below"}
          actions={
            <>
              <Badge variant="primary">Mock</Badge>
              <Button variant="ghost" onClick={exitToList}>
                Exit
              </Button>
            </>
          }
        >
          {activeTest ? (
            <div className="stack">
              {activeTest.questions.map((q, idx) => (
                <div key={q.id} className="card" style={{ padding: 14 }}>
                  <div style={{ fontWeight: 900 }}>
                    Q{idx + 1}. {q.question}
                  </div>
                  <div className="divider" />
                  <div className="stack" role="radiogroup" aria-label={`Question ${idx + 1}`}>
                    {q.options.map((opt) => (
                      <label key={opt} className="sidebar-link" style={{ cursor: "pointer" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <input
                            type="radio"
                            name={`q_${activeTest.id}_${q.id}`}
                            checked={answersByQuestionId[q.id] === opt}
                            onChange={() => setAnswersByQuestionId((a) => ({ ...a, [q.id]: opt }))}
                          />
                          {opt}
                        </span>
                        <small className="muted">Option</small>
                      </label>
                    ))}
                  </div>
                </div>
              ))}

              <div className="row" style={{ justifyContent: "space-between" }}>
                <Button variant="ghost" onClick={exitToList}>
                  Back to tests
                </Button>
                <Button variant="primary" onClick={submit} disabled={activeTest.questions.length === 0}>
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <div className="alert" role="alert">
              <strong>Test not found</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Please return to the test list and try again.
              </div>
              <div style={{ marginTop: 12 }}>
                <Button variant="primary" onClick={exitToList}>
                  Back to tests
                </Button>
              </div>
            </div>
          )}
        </Card>
      ) : null}

      {step === "results" ? (
        <Card
          title="Results"
          subtitle="Review your performance"
          actions={
            <>
              <Badge variant={score.total > 0 && score.correct === score.total ? "success" : "primary"}>
                {score.correct}/{score.total}
              </Badge>
              <Button variant="ghost" onClick={exitToList}>
                Back to tests
              </Button>
            </>
          }
        >
          <div className="stack">
            <div style={{ lineHeight: 1.6 }}>
              You scored <strong>{score.correct}</strong> out of <strong>{score.total}</strong> (
              <strong>{score.percent}%</strong>).
            </div>

            {activeTest ? (
              <div className="muted" style={{ fontSize: 13 }}>
                Completed: <strong>{activeTest.title}</strong>
              </div>
            ) : null}

            <div className="divider" />

            <div className="row" style={{ justifyContent: "space-between" }}>
              <Button variant="ghost" onClick={() => startTest(activeTestId)}>
                Retake
              </Button>
              <Button variant="primary" onClick={exitToList}>
                Choose another test
              </Button>
            </div>

            <div className="muted" style={{ marginTop: 10 }}>
              TODO: Show explanations, topic breakdown, and recommended learning resources.
            </div>
          </div>
        </Card>
      ) : null}
    </>
  );
}
