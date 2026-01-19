import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { mockTests } from "../mock/mockData";

const sampleQuestions = [
  {
    id: "q1",
    prompt: "In React, what hook is commonly used for state in function components?",
    choices: ["useState", "useMemo", "useRef", "useLayoutEffect"],
    answerIndex: 0,
  },
  {
    id: "q2",
    prompt: "Which attribute should be used for a label to associate it with an input?",
    choices: ["for", "htmlFor", "labelFor", "name"],
    answerIndex: 1,
  },
];

// PUBLIC_INTERFACE
export function MockTestsPage() {
  /** Mock tests: list tests, take a short sample test, view results. */
  const [activeTestId, setActiveTestId] = useState("");
  const [step, setStep] = useState("list"); // list | taking | results
  const [answers, setAnswers] = useState({});

  const active = useMemo(() => mockTests.find((t) => t.id === activeTestId) || null, [activeTestId]);

  function startTest(testId) {
    setActiveTestId(testId);
    setAnswers({});
    setStep("taking");
  }

  function finish() {
    setStep("results");
  }

  const score = useMemo(() => {
    let correct = 0;
    for (const q of sampleQuestions) {
      if (answers[q.id] === q.answerIndex) correct += 1;
    }
    return { correct, total: sampleQuestions.length };
  }, [answers]);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Mock Tests</h1>
        <p className="page-subtitle">
          Practice with guided assessments and review results. In this demo, the “Take test” flow uses a short built-in sample.
          <span className="muted"> (TODO: load real test content from backend.)</span>
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
              <Badge variant="primary">Demo</Badge>
              <Button variant="ghost" onClick={() => setStep("list")}>
                Exit
              </Button>
            </>
          }
        >
          <div className="stack">
            {sampleQuestions.map((q, idx) => (
              <div key={q.id} className="card" style={{ padding: 14 }}>
                <div style={{ fontWeight: 900 }}>
                  Q{idx + 1}. {q.prompt}
                </div>
                <div className="divider" />
                <div className="stack" role="radiogroup" aria-label={`Question ${idx + 1}`}>
                  {q.choices.map((c, cidx) => (
                    <label key={c} className="sidebar-link" style={{ cursor: "pointer" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <input
                          type="radio"
                          name={q.id}
                          checked={answers[q.id] === cidx}
                          onChange={() => setAnswers((a) => ({ ...a, [q.id]: cidx }))}
                        />
                        {c}
                      </span>
                      <small className="muted">Option</small>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <div className="row" style={{ justifyContent: "flex-end" }}>
              <Button variant="primary" onClick={finish}>
                Submit
              </Button>
            </div>
          </div>
        </Card>
      ) : null}

      {step === "results" ? (
        <Card
          title="Results"
          subtitle="Review your performance"
          actions={
            <>
              <Badge variant={score.correct === score.total ? "success" : "primary"}>
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
            <div className="muted">
              TODO: Show explanations, topic breakdown, and recommended learning resources.
            </div>
          </div>
        </Card>
      ) : null}
    </>
  );
}
