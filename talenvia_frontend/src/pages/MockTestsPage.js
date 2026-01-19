import React, { useMemo, useState } from "react";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { MultiSelectDropdown } from "../components/ui/MultiSelectDropdown";
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

function normalizeListValue(s) {
  return String(s || "").trim().toLowerCase();
}

function uniqSorted(values) {
  const seen = new Set();
  const out = [];
  for (const v of values) {
    const val = String(v || "").trim();
    if (!val) continue;
    const key = val.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(val);
  }
  return out.sort((a, b) => a.localeCompare(b));
}

/**
 * Tests can optionally include:
 * - categories: string[]
 * - tags: string[]
 *
 * This page remains backward compatible with older test objects that have only:
 * { id, title, duration, questions }
 */
function getTestMeta(test) {
  const categories = Array.isArray(test?.categories) ? test.categories : [];
  const tags = Array.isArray(test?.tags) ? test.tags : [];
  return {
    categories: categories.filter(Boolean),
    tags: tags.filter(Boolean),
  };
}

function safeText(value, fallback = "—") {
  const s = String(value ?? "").trim();
  return s ? s : fallback;
}

function isAnswered(v) {
  return v !== undefined && v !== null && String(v).trim() !== "";
}

// PUBLIC_INTERFACE
export function MockTestsPage() {
  /** Mock tests: browse available tests, filter, select one, take it, and view results (summary + per-question review). */
  const [step, setStep] = useState("list"); // list | taking | resultsSummary | resultsReview
  const [activeTestId, setActiveTestId] = useState("");
  const [answersByQuestionId, setAnswersByQuestionId] = useState({});

  // In review mode, allow jumping to a specific question.
  const [reviewQuestionId, setReviewQuestionId] = useState(null);

  // Filters (only apply on "list" step)
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedTags, setSelectedTags] = useState(() => new Set());

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

  const allCategories = useMemo(() => {
    const cats = [];
    for (const t of tests) {
      const meta = getTestMeta(t);
      cats.push(...meta.categories);
    }
    return ["All", ...uniqSorted(cats)];
  }, [tests]);

  const allTags = useMemo(() => {
    const tags = [];
    for (const t of tests) {
      const meta = getTestMeta(t);
      tags.push(...meta.tags);
    }
    return uniqSorted(tags);
  }, [tests]);

  const filteredTests = useMemo(() => {
    const selectedTagValues = Array.from(selectedTags || []);
    const category = categoryFilter;

    return tests.filter((t) => {
      const meta = getTestMeta(t);

      // Category: single-select (All = no filter)
      const categoryOk =
        category === "All" ||
        meta.categories.some((c) => normalizeListValue(c) === normalizeListValue(category));

      // Tags: multi-select AND semantics (must include all selected tags)
      const tagsOk =
        selectedTagValues.length === 0 ||
        selectedTagValues.every((tag) =>
          meta.tags.some((tTag) => normalizeListValue(tTag) === normalizeListValue(tag))
        );

      return categoryOk && tagsOk;
    });
  }, [tests, categoryFilter, selectedTags]);

  const activeTest = useMemo(() => tests.find((t) => t.id === activeTestId) || null, [tests, activeTestId]);

  const score = useMemo(() => {
    const qs = activeTest?.questions || [];
    let correct = 0;

    for (const q of qs) {
      const selected = answersByQuestionId[q.id];
      if (isAnswered(selected) && selected === q.correctAnswer) correct += 1;
    }

    return { correct, total: qs.length, percent: safePercent(correct, qs.length) };
  }, [activeTest, answersByQuestionId]);

  const resultsByQuestion = useMemo(() => {
    const qs = activeTest?.questions || [];
    return qs.map((q, idx) => {
      const userAnswer = answersByQuestionId[q.id];
      const correctAnswer = q.correctAnswer;
      const isCorrect = isAnswered(userAnswer) && userAnswer === correctAnswer;

      return {
        index: idx,
        id: q.id,
        question: q.question,
        options: Array.isArray(q.options) ? q.options : [],
        userAnswer: isAnswered(userAnswer) ? userAnswer : null,
        correctAnswer,
        isCorrect,
        explanation: safeText(q.explanation, "No explanation provided yet."),
      };
    });
  }, [activeTest, answersByQuestionId]);

  const summaryBreakdown = useMemo(() => {
    const attempted = resultsByQuestion.filter((r) => isAnswered(r.userAnswer)).length;
    const correct = resultsByQuestion.filter((r) => r.isCorrect).length;
    const wrong = attempted - correct;
    const skipped = resultsByQuestion.length - attempted;
    return { attempted, correct, wrong, skipped };
  }, [resultsByQuestion]);

  const defaultReviewQuestionId = useMemo(() => {
    if (!resultsByQuestion.length) return null;
    // Prefer the first wrong question; otherwise first question.
    const firstWrong = resultsByQuestion.find((r) => isAnswered(r.userAnswer) && !r.isCorrect);
    return (firstWrong || resultsByQuestion[0]).id;
  }, [resultsByQuestion]);

  const activeReviewQuestionId = reviewQuestionId ?? defaultReviewQuestionId;

  const activeReviewItem = useMemo(() => {
    if (!activeReviewQuestionId) return null;
    return resultsByQuestion.find((r) => r.id === activeReviewQuestionId) || null;
  }, [resultsByQuestion, activeReviewQuestionId]);

  function startTest(testId) {
    setActiveTestId(testId);
    setAnswersByQuestionId({});
    setReviewQuestionId(null);
    setStep("taking");
  }

  function exitToList() {
    setStep("list");
    setActiveTestId("");
    setAnswersByQuestionId({});
    setReviewQuestionId(null);
  }

  function submit() {
    // Freeze answers by moving to results steps; user can still "Retake" to reset.
    setReviewQuestionId(null);
    setStep("resultsSummary");
  }

  function goToReview(questionId) {
    setReviewQuestionId(questionId ?? null);
    setStep("resultsReview");
  }

  function toggleTag(tag) {
    setSelectedTags((prev) => {
      const next = new Set(prev || []);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  function clearFilters() {
    setCategoryFilter("All");
    setSelectedTags(new Set());
  }

  const activeFiltersCount = (categoryFilter && categoryFilter !== "All" ? 1 : 0) + (selectedTags?.size || 0);

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">Mock Tests</h1>
        <p className="page-subtitle">
          Practice with guided assessments and review results with per-question feedback.
          <span className="muted"> (TODO: load/persist tests from backend.)</span>
        </p>
      </div>

      {step === "list" ? (
        <div className="stack">
          <Card
            title="Available tests"
            subtitle="Filter by category/tags, then select a test to begin"
            actions={
              <>
                <Badge variant="primary">
                  {filteredTests.length}/{tests.length} tests
                </Badge>
                {activeFiltersCount ? <Badge>{activeFiltersCount} filter(s)</Badge> : null}
              </>
            }
          >
            <div className="stack" style={{ marginBottom: 12 }}>
              <div
                className="card"
                style={{
                  padding: 14,
                  background: "rgba(255, 255, 255, 0.72)",
                }}
                aria-label="Mock tests filters"
              >
                <div
                  className="row"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    gap: 14,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 220 }}>
                    <label className="label" htmlFor="tests-category">
                      Category
                    </label>
                    <select
                      id="tests-category"
                      className="input"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      {allCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ alignSelf: "end" }}>
                    <Button variant="ghost" onClick={clearFilters} disabled={activeFiltersCount === 0}>
                      Clear filters
                    </Button>
                  </div>
                </div>

                <div className="divider" />

                <div className="stack" aria-label="Tag filters">
                  <MultiSelectDropdown
                    id="tests-tags"
                    label="Tags (multi-select)"
                    options={allTags}
                    selectedValues={selectedTags}
                    onToggleValue={toggleTag}
                    onClear={() => setSelectedTags(new Set())}
                    placeholder="Select tags…"
                    hint={
                      <>
                        Tip: selecting multiple tags uses <strong>AND</strong> logic (tests must match all selected tags).
                      </>
                    }
                    disabled={allTags.length === 0}
                  />
                </div>
              </div>
            </div>

            {filteredTests.length === 0 ? (
              <div className="alert" role="status" aria-live="polite">
                <strong>No tests match your filters.</strong>
                <div className="muted" style={{ marginTop: 6 }}>
                  Try a different category or remove some tags.
                </div>
                <div style={{ marginTop: 12 }}>
                  <Button variant="ghost" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>
              </div>
            ) : (
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
                {filteredTests.map((t) => {
                  const meta = getTestMeta(t);
                  const topCats = meta.categories.slice(0, 2);
                  const moreCats = Math.max(0, meta.categories.length - topCats.length);

                  return (
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

                      {meta.categories.length || meta.tags.length ? (
                        <>
                          <div className="divider" />
                          <div className="row" style={{ gap: 8 }}>
                            {topCats.map((c) => (
                              <Badge key={c}>{c}</Badge>
                            ))}
                            {moreCats ? <Badge>+{moreCats} more</Badge> : null}
                            {meta.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="primary">
                                {tag}
                              </Badge>
                            ))}
                            {meta.tags.length > 2 ? <Badge>+{meta.tags.length - 2} tags</Badge> : null}
                          </div>
                        </>
                      ) : null}

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
                  );
                })}
              </div>
            )}

            <div className="muted" style={{ marginTop: 12, fontSize: 13 }}>
              Tip: Start with fundamentals (CSS/JS), then move to intermediate React to build confidence.
            </div>
          </Card>
        </div>
      ) : null}

      {step === "taking" ? (
        <Card
          title={activeTest ? activeTest.title : "Taking test"}
          subtitle={
            activeTest ? `${activeTest.questions.length} questions • ${formatDuration(activeTest.duration)}` : "Answer the questions below"
          }
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

      {step === "resultsSummary" ? (
        <Card
          title="Results summary"
          subtitle="Overview of your performance + quick access to per-question feedback"
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
              You scored <strong>{score.correct}</strong> out of <strong>{score.total}</strong> (<strong>{score.percent}%</strong>).
            </div>

            {activeTest ? (
              <div className="muted" style={{ fontSize: 13 }}>
                Completed: <strong>{activeTest.title}</strong>
              </div>
            ) : null}

            <div className="divider" />

            <div
              className="card"
              style={{
                padding: 14,
                background: "rgba(255, 255, 255, 0.72)",
              }}
              aria-label="Score breakdown"
            >
              <div className="row" style={{ justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <Badge variant="primary">Attempted: {summaryBreakdown.attempted}</Badge>
                <Badge variant="success">Correct: {summaryBreakdown.correct}</Badge>
                <Badge variant="error">Wrong: {summaryBreakdown.wrong}</Badge>
                <Badge>Skipped: {summaryBreakdown.skipped}</Badge>
              </div>
              <div className="muted" style={{ marginTop: 10, fontSize: 13, lineHeight: 1.5 }}>
                Review each question to see your selected answer, the correct answer, and a short explanation.
              </div>
            </div>

            <div className="divider" />

            <div className="stack" aria-label="Question results list">
              {resultsByQuestion.map((r) => {
                const isSkipped = !isAnswered(r.userAnswer);
                const statusVariant = r.isCorrect ? "success" : isSkipped ? "neutral" : "error";
                const statusLabel = r.isCorrect ? "Correct" : isSkipped ? "Skipped" : "Incorrect";

                const answerBlockClass = r.isCorrect
                  ? "answer-block answer-block-correct"
                  : isSkipped
                    ? "answer-block answer-block-skipped"
                    : "answer-block answer-block-incorrect";

                return (
                  <details key={r.id} className="details">
                    <summary aria-label={`Toggle details for question ${r.index + 1}`}>
                      <span style={{ minWidth: 0 }}>
                        <span style={{ display: "block", lineHeight: 1.25 }}>
                          Q{r.index + 1}. {r.question}
                        </span>
                        <span className="muted" style={{ display: "block", marginTop: 6, fontSize: 13, fontWeight: 700 }}>
                          Click to expand details
                        </span>
                      </span>

                      <span className="row" style={{ gap: 10, alignItems: "center", justifyContent: "flex-end" }}>
                        <Badge variant={statusVariant}>{statusLabel}</Badge>
                        <span className="details-chevron" aria-hidden="true">
                          ▾
                        </span>
                      </span>
                    </summary>

                    <div className="details-body">
                      <div className={answerBlockClass} aria-label="Answer summary">
                        <div className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>
                          <div>
                            Your answer: <strong>{safeText(r.userAnswer, "Skipped")}</strong>
                          </div>
                          <div>
                            Correct answer: <strong>{safeText(r.correctAnswer)}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="answer-block" aria-label="Explanation">
                        <div style={{ fontWeight: 900, marginBottom: 6 }}>Explanation</div>
                        <div className="muted" style={{ fontSize: 13, lineHeight: 1.6 }}>
                          {safeText(r.explanation)}
                        </div>
                      </div>

                      <div className="row" style={{ justifyContent: "flex-end" }}>
                        <Button variant="ghost" onClick={() => goToReview(r.id)}>
                          Review full
                        </Button>
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>

            <div className="divider" />

            <div className="row" style={{ justifyContent: "space-between" }}>
              <Button variant="ghost" onClick={() => startTest(activeTestId)}>
                Retake
              </Button>
              <Button variant="primary" onClick={() => goToReview(defaultReviewQuestionId)}>
                Review all
              </Button>
            </div>
          </div>
        </Card>
      ) : null}

      {step === "resultsReview" ? (
        <Card
          title="Results review"
          subtitle="Per-question feedback: your answer, correct answer, and explanation"
          actions={
            <>
              <Badge variant="primary">
                {score.correct}/{score.total}
              </Badge>
              <Button variant="ghost" onClick={() => setStep("resultsSummary")}>
                Back to summary
              </Button>
            </>
          }
        >
          {!activeTest ? (
            <div className="alert" role="alert">
              <strong>Test not found</strong>
              <div className="muted" style={{ marginTop: 6 }}>Please return to the test list and try again.</div>
              <div style={{ marginTop: 12 }}>
                <Button variant="primary" onClick={exitToList}>
                  Back to tests
                </Button>
              </div>
            </div>
          ) : (
            <div className="stack">
              <div
                className="card"
                style={{
                  padding: 14,
                  background: "rgba(255, 255, 255, 0.72)",
                }}
                aria-label="Jump to question"
              >
                <label className="label" htmlFor="review-question-select">
                  Jump to question
                </label>
                <select
                  id="review-question-select"
                  className="input"
                  value={activeReviewQuestionId ?? ""}
                  onChange={(e) => setReviewQuestionId(Number(e.target.value))}
                >
                  {resultsByQuestion.map((r) => {
                    const prefix = r.isCorrect ? "✓" : isAnswered(r.userAnswer) ? "✕" : "–";
                    return (
                      <option key={r.id} value={r.id}>
                        {prefix} Q{r.index + 1}
                      </option>
                    );
                  })}
                </select>

                <div className="muted" style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5 }}>
                  ✓ Correct • ✕ Wrong • – Skipped
                </div>
              </div>

              {activeReviewItem ? (
                <div className="card" style={{ padding: 14 }}>
                  <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontWeight: 900, lineHeight: 1.25 }}>
                        Q{activeReviewItem.index + 1}. {activeReviewItem.question}
                      </div>
                      <div className="muted" style={{ marginTop: 8, fontSize: 13 }}>
                        Your answer: <strong>{safeText(activeReviewItem.userAnswer, "Skipped")}</strong>
                      </div>
                      <div className="muted" style={{ marginTop: 6, fontSize: 13 }}>
                        Correct answer: <strong>{safeText(activeReviewItem.correctAnswer)}</strong>
                      </div>
                    </div>

                    <div>
                      <Badge
                        variant={
                          activeReviewItem.isCorrect
                            ? "success"
                            : isAnswered(activeReviewItem.userAnswer)
                              ? "error"
                              : "neutral"
                        }
                      >
                        {activeReviewItem.isCorrect ? "Correct" : isAnswered(activeReviewItem.userAnswer) ? "Incorrect" : "Skipped"}
                      </Badge>
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="stack" aria-label="Options with correct highlight">
                    {activeReviewItem.options.map((opt) => {
                      const isCorrectOpt = opt === activeReviewItem.correctAnswer;
                      const isUserOpt = isAnswered(activeReviewItem.userAnswer) && opt === activeReviewItem.userAnswer;

                      const border = isCorrectOpt
                        ? "1px solid rgba(16,185,129,0.35)"
                        : isUserOpt
                          ? "1px solid rgba(239,68,68,0.35)"
                          : "1px solid rgba(0,0,0,0.08)";

                      const bg = isCorrectOpt
                        ? "rgba(16,185,129,0.10)"
                        : isUserOpt
                          ? "rgba(239,68,68,0.08)"
                          : "rgba(255,255,255,0.6)";

                      return (
                        <div
                          key={opt}
                          className="card"
                          style={{
                            padding: 12,
                            border,
                            background: bg,
                          }}
                        >
                          <div className="row" style={{ justifyContent: "space-between", gap: 10 }}>
                            <div style={{ fontWeight: 700 }}>{opt}</div>
                            <div className="row" style={{ gap: 8 }}>
                              {isCorrectOpt ? <Badge variant="success">Correct</Badge> : null}
                              {isUserOpt && !isCorrectOpt ? <Badge variant="error">Your pick</Badge> : null}
                              {isUserOpt && isCorrectOpt ? <Badge variant="success">Your pick</Badge> : null}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="divider" />

                  <div aria-label="Explanation">
                    <div style={{ fontWeight: 900, marginBottom: 6 }}>Explanation</div>
                    <div className="muted" style={{ lineHeight: 1.6 }}>
                      {activeReviewItem.explanation}
                    </div>
                  </div>

                  <div className="divider" />

                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        const curIdx = resultsByQuestion.findIndex((r) => r.id === activeReviewItem.id);
                        const prev = curIdx > 0 ? resultsByQuestion[curIdx - 1] : null;
                        if (prev) setReviewQuestionId(prev.id);
                      }}
                      disabled={resultsByQuestion.findIndex((r) => r.id === activeReviewItem.id) <= 0}
                    >
                      Previous
                    </Button>

                    <Button
                      variant="primary"
                      onClick={() => {
                        const curIdx = resultsByQuestion.findIndex((r) => r.id === activeReviewItem.id);
                        const next = curIdx >= 0 && curIdx < resultsByQuestion.length - 1 ? resultsByQuestion[curIdx + 1] : null;
                        if (next) setReviewQuestionId(next.id);
                      }}
                      disabled={resultsByQuestion.findIndex((r) => r.id === activeReviewItem.id) >= resultsByQuestion.length - 1}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="alert" role="status" aria-live="polite">
                  <strong>No question selected</strong>
                  <div className="muted" style={{ marginTop: 6 }}>
                    Pick a question from the dropdown to view feedback.
                  </div>
                </div>
              )}

              <div className="row" style={{ justifyContent: "space-between" }}>
                <Button variant="ghost" onClick={() => startTest(activeTestId)}>
                  Retake
                </Button>
                <Button variant="primary" onClick={exitToList}>
                  Choose another test
                </Button>
              </div>
            </div>
          )}
        </Card>
      ) : null}
    </>
  );
}
