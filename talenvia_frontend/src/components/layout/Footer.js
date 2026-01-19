import React from "react";
import { Link } from "react-router-dom";

// PUBLIC_INTERFACE
export function Footer() {
  /** Footer with informational links. */
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div>
          <strong>Talenvia</strong> <span className="muted">— Elegant career growth platform</span>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <Link to="/about">About</Link>
          <Link to="/how-it-works">How it works</Link>
          <a href="mailto:contact@talenvia.example">Contact</a>
        </div>
      </div>
    </footer>
  );
}
