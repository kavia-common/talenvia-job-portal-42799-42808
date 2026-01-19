import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

// PUBLIC_INTERFACE
export function NotFoundPage() {
  /** 404 page for unknown routes. */
  return (
    <div className="stack">
      <div className="page-header">
        <h1 className="page-title">Page not found</h1>
        <p className="page-subtitle">The page you requested doesn’t exist.</p>
      </div>

      <Card title="Go back" subtitle="Try one of the main sections">
        <div className="row">
          <Link to="/jobs">
            <Button variant="primary">Job Listings</Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost">Profile</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
