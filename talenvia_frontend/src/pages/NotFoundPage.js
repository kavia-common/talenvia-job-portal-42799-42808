import React from "react";
import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";

// PUBLIC_INTERFACE
export default function NotFoundPage() {
  /** Renders a 404 not found page for unknown routes. */
  return (
    <PageShell title="Page not found" subtitle="The page you’re looking for doesn’t exist or has moved.">
      <div className="tv-card">
        <div className="tv-empty">
          Return to <Link to="/" className="tv-inline-link">Home</Link>.
        </div>
      </div>
    </PageShell>
  );
}
