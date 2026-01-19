import React from "react";

// PUBLIC_INTERFACE
export function Card({ title, subtitle, children, actions }) {
  /** Container card with optional title/subtitle and right-side actions. */
  return (
    <section className="card">
      {(title || actions || subtitle) && (
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div style={{ minWidth: 220 }}>
            {title && <h3 style={{ margin: 0 }}>{title}</h3>}
            {subtitle && <div className="muted" style={{ marginTop: 4, fontSize: 13 }}>{subtitle}</div>}
          </div>
          {actions ? <div className="row">{actions}</div> : null}
        </div>
      )}
      {(title || actions || subtitle) && <div className="divider" />}
      {children}
    </section>
  );
}
