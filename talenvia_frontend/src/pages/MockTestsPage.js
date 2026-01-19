import React, { useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import { mockTests } from "../data/mockTests";

function clampIndex(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function computeScore(test, answersByQuestionId) {
  const questions = safeArray(test?.questions);
  let correct = 0;
  questions.forEach((q) => {
    const selected = answersByQuestionId?.[q.id];
    if (typeof selected === "number" && selected === q.correctAnswer) correct += 1;
  });
  return { correct, total: questions.length };
}

function formatMetaLine(test) {
  const parts = [];
  if (test?.skill) parts.push(test.skill);
  if (test?.duration) parts.push(test.duration);
  const count =
    typeof test?.totalQuestions === "number"
      ? test.totalQuestions
      : safeArray(test?.questions).length;
  if (typeof count === "number") parts.push(`${count} questions`);
  return parts.join(" • ");
}

function coerceTestId(value) {
  // Our dataset uses numeric ids today; keep coercion simple and safe.
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

// PUBLIC_INTERFACE
export default function MockTestsPage() {
  /** Renders the mock tests page with quiz selection, question rendering, and basic scoring. */
  const tests = useMemo(() => safeArray(mockTests), []);

  const [selectedTestId, setSelectedTestId] = useState(tests[0]?.id ?? null);
  const selectedTest = useMemo(
    () => tests.find((t) => t.id === selectedTestId) ?? null,
    [tests, selectedTestId]
  );

  const questions = useMemo(() => safeArray(selectedTest?.questions), [selectedTest]);

  const [mode, setMode] = useState("catalog"); // catalog | taking | results
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersByQuestionId, setAnswersByQuestionId] = useState({});
  const [lastScore, setLastScore] = useState(null);

  const currentQuestion = questions[currentIndex] ?? null;

  const answeredCount = useMemo(() => {
    const keys = Object.keys(answersByQuestionId || {});
    return keys.filter((k) => typeof answersByQuestionId[Number(k)] === "number").length;
  }, [answersByQuestionId]);

  const titleActions = (
    <>
      {mode === "catalog" ? (
        <button
          className="tv-btn tv-btn-primary"
          type="button"
          disabled={!selectedTest}
          onClick={() => {
            if (!selectedTest) return;
            setMode("taking");
            setCurrentIndex(0);
            setAnswersByQuestionId({});
            setLastScore(null);
          }}
        >
          Start selected test
        </button>
      ) : null}

      {mode === "taking" ? (
        <button
          className="tv-btn tv-btn-secondary"
          type="button"
          onClick={() => {
            setMode("catalog");
            setCurrentIndex(0);
            setAnswersByQuestionId({});
            setLastScore(null);
          }}
        >
          Exit
        </button>
      ) : null}

      {mode === "results" ? (
        <button
          className="tv-btn tv-btn-primary"
          type="button"
          onClick={() => {
            setMode("catalog");
            setCurrentIndex(0);
            setAnswersByQuestionId({});
          }}
        >
          Back to catalog
        </button>
      ) : null}
    </>
  );

  return (
    <PageShell
      title="Mock tests"
      subtitle="Practice with role-based assessments and track your performance. (Mock data for now)"
      actions={titleActions}
    >
      {tests.length === 0 ? (
        <div className="tv-card">
          <div className="tv-empty">No mock tests available.</div>
        </div>
      ) : null}

      {mode === "catalog" && tests.length > 0 ? (
        <div className="tv-grid tv-grid-2">
          <div className="tv-card">
            <div className="tv-card-title">Choose a test</div>

            <label className="tv-label" htmlFor="test-select">
              Test
            </label>
            <select
              id="test-select"
              className="tv-select"
              value={selectedTestId ?? ""}
              onChange={(e) => setSelectedTestId(coerceTestId(e.target.value))}
            >
              {tests.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </select>

            <div className="tv-muted tv-mt">
              Tip: pick a test from the list below (or dropdown) and click <strong>Start selected test</strong>.
            </div>

            <div className="tv-mt tv-list" style={{ maxHeight: 360, overflow: "auto", paddingRight: 6 }}>
              {tests.map((t) => {
                const isActive = t.id === selectedTestId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    className="tv-btn tv-btn-secondary"
                    onClick={() => setSelectedTestId(t.id)}
                    style={{
                      textAlign: "left",
                      width: "100%",
                      borderColor: isActive ? "rgba(139, 92, 246, 0.40)" : undefined,
                      background: isActive ? "rgba(139, 92, 246, 0.10)" : undefined
                    }}
                    aria-pressed={isActive}
                  >
                    <div style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>{t.title}</div>
                    <div className="tv-muted" style={{ marginTop: 4 }}>
                      {formatMetaLine(t)}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="tv-card">
            <div className="tv-card-title">Test details</div>

            {!selectedTest ? (
              <div className="tv-empty">Select a test to see details.</div>
            ) : (
              <>
                <div className="tv-kv">
                  <div className="tv-kv-row">
                    <div className="tv-kv-key">Title</div>
                    <div className="tv-kv-value">{selectedTest.title}</div>
                  </div>
                  <div className="tv-kv-row">
                    <div className="tv-kv-key">Skill</div>
                    <div className="tv-kv-value">{selectedTest.skill || "General"}</div>
                  </div>
                  <div className="tv-kv-row">
                    <div className="tv-kv-key">Duration</div>
                    <div className="tv-kv-value">{selectedTest.duration || "—"}</div>
                  </div>
                  <div className="tv-kv-row">
                    <div className="tv-kv-key">Questions</div>
                    <div className="tv-kv-value">{questions.length}</div>
                  </div>
                </div>

                <div className="tv-card-actions">
                  <button
                    className="tv-btn tv-btn-secondary"
                    type="button"
                    onClick={() => {
                      // lightweight "preview" just switches into taking mode without resetting selection state beyond answers
                      setMode("taking");
                      setCurrentIndex(0);
                      setAnswersByQuestionId({});
                      setLastScore(null);
                    }}
                  >
                    Preview / Start
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}

      {mode === "taking" && selectedTest ? (
        <div className="tv-grid tv-grid-2">
          <div className="tv-card">
            <div className="tv-card-title">{selectedTest.title}</div>
            <div className="tv-muted">
              {selectedTest.skill ? `${selectedTest.skill} • ` : null}
              {selectedTest.duration ? `${selectedTest.duration} • ` : null}
              {questions.length} questions
            </div>

            <div className="tv-mt tv-progress">
              <div className="tv-progress-row">
                <div className="tv-progress-label">Progress</div>
                <div className="tv-progress-bar" aria-hidden="true">
                  <div
                    className="tv-progress-fill"
                    style={{
                      width: `${questions.length ? (answeredCount / questions.length) * 100 : 0}%`
                    }}
                  />
                </div>
                <div className="tv-progress-value">
                  {answeredCount}/{questions.length}
                </div>
              </div>
            </div>

            <div className="tv-card-actions">
              <button
                className="tv-btn tv-btn-secondary"
                type="button"
                onClick={() => setCurrentIndex((i) => clampIndex(i - 1, 0, questions.length - 1))}
                disabled={currentIndex <= 0}
              >
                Previous
              </button>

              <button
                className="tv-btn tv-btn-secondary"
                type="button"
                onClick={() => setCurrentIndex((i) => clampIndex(i + 1, 0, questions.length - 1))}
                disabled={currentIndex >= questions.length - 1}
              >
                Next
              </button>

              <button
                className="tv-btn tv-btn-primary"
                type="button"
                disabled={questions.length === 0}
                onClick={() => {
                  const score = computeScore(selectedTest, answersByQuestionId);
                  setLastScore(score);
                  setMode("results");
                }}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="tv-card">
            {!currentQuestion ? (
              <div className="tv-empty">No questions found for this test.</div>
            ) : (
              <>
                <div className="tv-card-title">
                  Question {currentIndex + 1} of {questions.length}
                </div>

                <p className="tv-paragraph" style={{ fontWeight: 800, marginTop: 0 }}>
                  {currentQuestion.question}
                </p>

                <div className="tv-form" role="radiogroup" aria-label="Answer choices">
                  {safeArray(currentQuestion.options).map((opt, idx) => {
                    const inputId = `q-${currentQuestion.id}-opt-${idx}`;
                    const checked = answersByQuestionId?.[currentQuestion.id] === idx;

                    return (
                      <label key={inputId} className="tv-check" htmlFor={inputId}>
                        <input
                          id={inputId}
                          type="radio"
                          name={`q-${currentQuestion.id}`}
                          checked={checked}
                          onChange={() =>
                            setAnswersByQuestionId((prev) => ({
                              ...(prev || {}),
                              [currentQuestion.id]: idx
                            }))
                          }
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="tv-muted tv-mt">
                  Your selection is saved automatically. Submit when ready to see your score.
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}

      {mode === "results" && selectedTest ? (
        <div className="tv-grid tv-grid-2">
          <div className="tv-card">
            <div className="tv-card-title">Results</div>

            {!lastScore ? (
              <div className="tv-empty">No score available.</div>
            ) : (
              <>
                <div className="tv-stats">
                  <div className="tv-stat">
                    <div className="tv-stat-value">{lastScore.correct}</div>
                    <div className="tv-stat-label">correct</div>
                  </div>
                  <div className="tv-stat">
                    <div className="tv-stat-value">{lastScore.total}</div>
                    <div className="tv-stat-label">total</div>
                  </div>
                  <div className="tv-stat">
                    <div className="tv-stat-value">
                      {lastScore.total ? Math.round((lastScore.correct / lastScore.total) * 100) : 0}%
                    </div>
                    <div className="tv-stat-label">score</div>
                  </div>
                </div>

                <div className="tv-muted tv-mt">
                  Future: save attempts to your profile and show historical insights here.
                </div>

                <div className="tv-card-actions">
                  <button
                    className="tv-btn tv-btn-secondary"
                    type="button"
                    onClick={() => {
                      setMode("taking");
                      setCurrentIndex(0);
                      setLastScore(null);
                      setAnswersByQuestionId({});
                    }}
                  >
                    Retake
                  </button>
                  <button
                    className="tv-btn tv-btn-primary"
                    type="button"
                    onClick={() => {
                      setMode("catalog");
                      setCurrentIndex(0);
                      setLastScore(null);
                      setAnswersByQuestionId({});
                    }}
                  >
                    Choose another test
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="tv-card">
            <div className="tv-card-title">Answer review</div>

            {questions.length === 0 ? (
              <div className="tv-empty">No questions to review.</div>
            ) : (
              <div className="tv-list">
                {questions.map((q, idx) => {
                  const selectedIdx = answersByQuestionId?.[q.id];
                  const selectedText = typeof selectedIdx === "number" ? safeArray(q.options)[selectedIdx] : null;
                  const correctText =
                    typeof q.correctAnswer === "number" ? safeArray(q.options)[q.correctAnswer] : null;

                  const isCorrect = typeof selectedIdx === "number" && selectedIdx === q.correctAnswer;

                  return (
                    <div key={q.id} className="tv-card" style={{ boxShadow: "none" }}>
                      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                        <span className="tv-pill outline">Q{idx + 1}</span>
                        <span
                          className="tv-pill"
                          style={{ background: isCorrect ? "rgba(16,185,129,0.14)" : undefined }}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      </div>

                      <p className="tv-paragraph" style={{ marginTop: 10, marginBottom: 10, fontWeight: 800 }}>
                        {q.question}
                      </p>

                      <div className="tv-muted">
                        <div>
                          <strong>Your answer:</strong> {selectedText ?? "(not answered)"}
                        </div>
                        <div>
                          <strong>Correct answer:</strong> {correctText ?? "(unknown)"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </PageShell>
  );
}
