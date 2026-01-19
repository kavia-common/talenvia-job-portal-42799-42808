import React from "react";

// PUBLIC_INTERFACE
export function Input({ id, label, hint, ...props }) {
  /** Accessible labeled input with optional hint. */
  const hintId = hint ? `${id}-hint` : undefined;
  return (
    <div style={{ width: "100%" }}>
      {label ? (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input className="input" id={id} aria-describedby={hintId} {...props} />
      {hint ? (
        <div id={hintId} className="muted" style={{ marginTop: 6, fontSize: 12 }}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}
