import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Renders the app footer with informational links. */
  return (
    <footer className="tv-footer" role="contentinfo">
      <div className="tv-container tv-footer-inner">
        <div className="tv-footer-col">
          <div className="tv-footer-title">Talenvia</div>
          <div className="tv-footer-text">
            A job-searching experience with profiles, mock tests, and gamified challenges—built with an elegant Royal
            Purple theme.
          </div>
        </div>

        <div className="tv-footer-col">
          <div className="tv-footer-title">Explore</div>
          <div className="tv-footer-links">
            <Link className="tv-footer-link" to="/">
              Jobs
            </Link>
            <Link className="tv-footer-link" to="/mock-tests">
              Mock Tests
            </Link>
            <Link className="tv-footer-link" to="/challenges">
              Challenges
            </Link>
          </div>
        </div>

        <div className="tv-footer-col">
          <div className="tv-footer-title">Company</div>
          <div className="tv-footer-links">
            <Link className="tv-footer-link" to="/about">
              About Us
            </Link>
            <Link className="tv-footer-link" to="/how-it-works">
              How Talenvia Works
            </Link>
          </div>
        </div>
      </div>

      <div className="tv-footer-bottom">
        <div className="tv-container tv-footer-bottom-inner">
          <span>© {new Date().getFullYear()} Talenvia</span>
          <span className="tv-footer-dot" aria-hidden="true">
            •
          </span>
          <span className="tv-footer-muted">API integration coming soon</span>
        </div>
      </div>
    </footer>
  );
}
