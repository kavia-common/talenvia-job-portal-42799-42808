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

// PUBLIC_INTERFACE
export function MockTestsPage() {
  /** Mock tests: browse available tests, filter, select one, take it, and view results. */
  const [step, setStep] = useState("list"); // list | taking | results
  const [activeTestId, setActiveTestId] = useState("");
  const [answersByQuestionId, setAnswersByQuestionId] = useState({});

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
          Practice with guided assessments and review results. This view uses local mock datasets.
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
                <Badge variant="primary">{filteredTests.length}/{tests.length} tests</Badge>
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
                  <div className="label" style={{ marginBottom: 0 }}>
                    Tags (multi-select)
                  </div>

                  {allTags.length === 0 ? (
                    <div className="muted" style={{ fontSize: 13 }}>
                      No tags available.
                    </div>
                  ) : (
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                        gap: 10,
                      }}
                    >
                      {allTags.map((tag) => {
                        const checked = selectedTags.has(tag);
                        return (
                          <label
                            key={tag}
                            className="sidebar-link"
                            style={{
                              cursor: "pointer",
                              userSelect: "none",
                              background: checked ? "rgba(139, 92, 246, 0.10)" : undefined,
                              borderColor: checked ? "rgba(139, 92, 246, 0.28)" : undefined,
                            }}
                          >
                            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <input type="checkbox" checked={checked} onChange={() => toggleTag(tag)} />
                              <span style={{ fontWeight: 700 }}>{tag}</span>
                            </span>
                            <small className="muted">{checked ? "Selected" : "Any"}</small>
                          </label>
                        );
                      })}
                    </div>
                  )}

                  <div className="muted" style={{ fontSize: 12 }}>
                    Tip: selecting multiple tags uses <strong>AND</strong> logic (tests must match all selected tags).
                  </div>
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

                      {(meta.categories.length || meta.tags.length) ? (
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
            activeTest
              ? `${activeTest.questions.length} questions • ${formatDuration(activeTest.duration)}`
              : "Answer the questions below"
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
