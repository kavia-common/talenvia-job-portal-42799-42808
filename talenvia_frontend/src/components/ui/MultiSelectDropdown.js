import React, { useEffect, useId, useMemo, useRef, useState } from "react";

/**
 * A lightweight, dependency-free multi-select dropdown that uses a
 * listbox pattern with checkboxes.
 *
 * Accessibility notes:
 * - Trigger is a <button> with aria-haspopup="listbox" and aria-expanded.
 * - Popup uses role="listbox" with aria-multiselectable.
 * - Options use role="option" + aria-selected.
 * - Keyboard:
 *   - Enter/Space opens/closes
 *   - ArrowUp/ArrowDown moves active option
 *   - Home/End jumps
 *   - Enter/Space toggles option
 *   - Escape closes and restores focus to trigger
 */

// PUBLIC_INTERFACE
export function MultiSelectDropdown({
  id,
  label,
  options,
  selectedValues,
  onToggleValue,
  onClear,
  placeholder = "Select…",
  disabled = false,
  hint,
}) {
  /** Accessible multi-select dropdown component. */
  const autoId = useId();
  const controlId = id || `msd-${autoId}`;

  const buttonRef = useRef(null);
  const listRef = useRef(null);

  const hintId = hint ? `${controlId}-hint` : undefined;
  const listboxId = `${controlId}-listbox`;

  const safeOptions = useMemo(() => (Array.isArray(options) ? options : []), [options]);

  const selectedSet = useMemo(() => {
    // Accept Set or array for robustness; MockTestsPage uses Set.
    if (selectedValues instanceof Set) return selectedValues;
    return new Set(Array.isArray(selectedValues) ? selectedValues : []);
  }, [selectedValues]);

  const selectedCount = selectedSet.size;

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() => {
    // Default active option: first selected, else first option.
    const firstSelected = safeOptions.findIndex((o) => selectedSet.has(o));
    return firstSelected >= 0 ? firstSelected : 0;
  });

  useEffect(() => {
    // When options or selection changes, ensure activeIndex is in bounds.
    setActiveIndex((idx) => {
      const max = Math.max(0, safeOptions.length - 1);
      if (idx > max) return max;
      if (idx < 0) return 0;
      return idx;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safeOptions.length]);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(e) {
      const target = e.target;
      if (!target) return;

      const withinButton = buttonRef.current && buttonRef.current.contains(target);
      const withinList = listRef.current && listRef.current.contains(target);

      if (!withinButton && !withinList) setOpen(false);
    }

    function onKeyDown(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        // Restore focus after close.
        setTimeout(() => buttonRef.current?.focus(), 0);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function openAndFocusList() {
    if (disabled) return;
    setOpen(true);
    // Focus the listbox so arrow keys work immediately.
    setTimeout(() => {
      listRef.current?.focus();
    }, 0);
  }

  function toggleOpen() {
    if (disabled) return;
    setOpen((o) => {
      const next = !o;
      if (next) {
        // Set active index to first selected for a good UX.
        const firstSelected = safeOptions.findIndex((o2) => selectedSet.has(o2));
        setActiveIndex(firstSelected >= 0 ? firstSelected : 0);
        setTimeout(() => listRef.current?.focus(), 0);
      }
      return next;
    });
  }

  function toggleAtIndex(idx) {
    const opt = safeOptions[idx];
    if (!opt) return;
    onToggleValue?.(opt);
  }

  function onButtonKeyDown(e) {
    if (disabled) return;

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openAndFocusList();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
  }

  function onListKeyDown(e) {
    if (disabled) return;
    const max = safeOptions.length - 1;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(max, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(max);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAtIndex(activeIndex);
    } else if (e.key === "Tab") {
      // Close on tab so focus can continue naturally.
      setOpen(false);
    }
  }

  const buttonText = selectedCount
    ? `${selectedCount} selected`
    : placeholder;

  return (
    <div style={{ width: "100%" }}>
      {label ? (
        <label className="label" htmlFor={controlId}>
          {label}
        </label>
      ) : null}

      <div style={{ position: "relative" }}>
        <button
          id={controlId}
          ref={buttonRef}
          type="button"
          className="input"
          onClick={toggleOpen}
          onKeyDown={onButtonKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open ? "true" : "false"}
          aria-controls={listboxId}
          aria-describedby={hintId}
          disabled={disabled}
          style={{
            textAlign: "left",
            cursor: disabled ? "not-allowed" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <span style={{ fontWeight: 800, color: selectedCount ? "rgba(55, 65, 81, 0.95)" : "rgba(55, 65, 81, 0.72)" }}>
              {buttonText}
            </span>
            {selectedCount ? (
              <span
                className="badge badge-primary"
                aria-hidden="true"
                style={{ padding: "4px 8px", fontSize: 11 }}
              >
                AND
              </span>
            ) : null}
          </span>

          <span aria-hidden="true" style={{ color: "rgba(55, 65, 81, 0.75)", fontWeight: 900 }}>
            ▾
          </span>
        </button>

        {open ? (
          <div
            role="presentation"
            style={{
              position: "absolute",
              zIndex: 30,
              left: 0,
              right: 0,
              marginTop: 8,
              borderRadius: 14,
              border: "1px solid rgba(139, 92, 246, 0.22)",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 14px 30px rgba(17, 24, 39, 0.18)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: 10, borderBottom: "1px solid rgba(107, 114, 128, 0.16)" }}>
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div className="muted" style={{ fontSize: 12 }}>
                  Select one or more tags (AND)
                </div>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => onClear?.()}
                  disabled={!selectedCount}
                  style={{
                    padding: "6px 10px",
                    fontSize: 12,
                    fontWeight: 800,
                    boxShadow: "none",
                  }}
                >
                  Clear
                </button>
              </div>
            </div>

            <div
              id={listboxId}
              ref={listRef}
              role="listbox"
              aria-multiselectable="true"
              tabIndex={0}
              onKeyDown={onListKeyDown}
              style={{
                maxHeight: 260,
                overflow: "auto",
                padding: 8,
                outline: "none",
              }}
            >
              {safeOptions.length === 0 ? (
                <div className="muted" style={{ padding: 10, fontSize: 13 }}>
                  No options.
                </div>
              ) : (
                safeOptions.map((opt, idx) => {
                  const checked = selectedSet.has(opt);
                  const active = idx === activeIndex;

                  return (
                    <div
                      key={opt}
                      role="option"
                      aria-selected={checked ? "true" : "false"}
                      onMouseEnter={() => setActiveIndex(idx)}
                      onMouseDown={(e) => {
                        // Prevent losing focus from listbox while clicking options.
                        e.preventDefault();
                      }}
                      onClick={() => toggleAtIndex(idx)}
                      className="sidebar-link"
                      style={{
                        cursor: "pointer",
                        userSelect: "none",
                        padding: "10px 12px",
                        marginBottom: 8,
                        background: active
                          ? "rgba(139, 92, 246, 0.10)"
                          : checked
                            ? "rgba(139, 92, 246, 0.06)"
                            : "rgba(255, 255, 255, 0.75)",
                        borderColor: active
                          ? "rgba(139, 92, 246, 0.35)"
                          : checked
                            ? "rgba(139, 92, 246, 0.22)"
                            : "rgba(107, 114, 128, 0.15)",
                      }}
                    >
                      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <input
                          type="checkbox"
                          checked={checked}
                          readOnly
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                        <span style={{ fontWeight: 800 }}>{opt}</span>
                      </span>
                      <small className="muted">{checked ? "Selected" : "Any"}</small>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        ) : null}
      </div>

      {hint ? (
        <div id={hintId} className="muted" style={{ marginTop: 6, fontSize: 12 }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}
