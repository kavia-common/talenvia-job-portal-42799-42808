import React from "react";

// PUBLIC_INTERFACE
export default function PageShell({ title, subtitle, actions, children }) {
  /** Wraps a page with consistent header, title/subtitle, and optional action area. */
  return (
    <section className="tv-page">
      <div className="tv-container">
        <div className="tv-page-header">
          <div className="tv-page-titles">
            <h1 className="tv-h1">{title}</h1>
            {subtitle ? <p className="tv-subtitle">{subtitle}</p> : null}
          </div>
          {actions ? <div className="tv-page-actions">{actions}</div> : null}
        </div>
        <div className="tv-page-body">{children}</div>
      </div>
    </section>
  );
}
