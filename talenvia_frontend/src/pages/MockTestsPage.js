import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { mockTestData, mockTests } from "../mock/mockData";

// PUBLIC_INTERFACE
export function MockTestsPage() {
  /** Mock tests: list tests, take a mock test using the integrated question bank, view results. */
  const [activeTestId, setActiveTestId] = useState("");
  const [step, setStep] = useState("list"); // list | taking | results
  const [answersByQuestionId, setAnswersByQuestionId] = useState({});

  const active = useMemo(() => mockTests.find((t) => t.id === activeTestId) || null, [activeTestId]);

  // In this UI demo, we currently support one integrated test dataset.
  // If the selected test matches it, we render its real questions; otherwise we show an empty bank (until more are added).
  const activeQuestionBank = useMemo(() => {
    if (activeTestId && activeTestId === mockTestData.id) return mockTestData;
    return null;
  }, [activeTestId]);

  function startTest(testId) {
    setActiveTestId(testId);
    setAnswersByQuestionId({});
    setStep("taking");
  }

  function finish() {
    setStep("results");
  }

  const score = useMemo(() => {
    const qs = activeQuestionBank?.questions || [];
    let correct = 0;

    for (const q of qs) {
      const selected = answersByQuestionId[q.id];
      if (selected && selected === q.correctAnswer) correct += 1;
    }

    return { correct, total: qs.length };
  }, [answersByQuestionId, activeQuestionBank]);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Mock Tests</h1>
        <p className="page-subtitle">
          Practice with guided assessments and review results. This view now uses the integrated mock dataset for test content.
          <span className="muted"> (TODO: load/persist tests from backend.)</span>
        </p>
      </div>

      {step === "list" ? (
        <Card title="Available tests" subtitle="Choose a test to begin">
          <table className="table" aria-label="Mock tests table">
            <thead>
              <tr>
                <th>Test</th>
                <th>Difficulty</th>
                <th>Length</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {mockTests.map((t) => (
                <tr key={t.id}>
                  <td style={{ fontWeight: 800 }}>{t.title}</td>
                  <td className="muted">{t.difficulty}</td>
                  <td className="muted">
                    {t.questions} questions • {t.minutes} min
                  </td>
                  <td style={{ width: 140 }}>
                    <Button variant="primary" onClick={() => startTest(t.id)}>
                      Take test
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : null}

      {step === "taking" ? (
        <Card
          title={active ? active.title : "Taking test"}
          subtitle="Answer the questions below"
          actions={
            <>
              <Badge variant="primary">Mock</Badge>
              <Button variant="ghost" onClick={() => setStep("list")}>
                Exit
              </Button>
            </>
          }
        >
          {activeQuestionBank ? (
            <div className="stack">
              {activeQuestionBank.questions.map((q, idx) => (
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
                            name={`q_${q.id}`}
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

              <div className="row" style={{ justifyContent: "flex-end" }}>
                <Button variant="primary" onClick={finish} disabled={activeQuestionBank.questions.length === 0}>
                  Submit
                </Button>
              </div>
            </div>
          ) : (
            <div className="alert" role="alert">
              <strong>Test content not available</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                This selected test does not have an integrated question bank yet. Please choose “{mockTestData.title}”.
              </div>
              <div style={{ marginTop: 12 }}>
                <Button variant="primary" onClick={() => startTest(mockTestData.id)}>
                  Take {mockTestData.title}
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
              <Button variant="ghost" onClick={() => setStep("list")}>
                Back to tests
              </Button>
            </>
          }
        >
          <div className="stack">
            <div style={{ lineHeight: 1.6 }}>
              You scored <strong>{score.correct}</strong> out of <strong>{score.total}</strong>.
            </div>
            <div className="muted">TODO: Show explanations, topic breakdown, and recommended learning resources.</div>
          </div>
        </Card>
      ) : null}
    </>
  );
}
