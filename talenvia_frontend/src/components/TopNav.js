import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Top navigation for Talenvia.
 * Uses NavLink for active-state styling via className callback.
 */

// PUBLIC_INTERFACE
export default function TopNav() {
  /** Renders the top navigation bar with links to core pages. */
  return (
    <header className="tv-topbar" role="banner">
      <div className="tv-container tv-topbar-inner">
        <div className="tv-brand">
          <div className="tv-brand-mark" aria-hidden="true">
            T
          </div>
          <div className="tv-brand-text">
            <div className="tv-brand-name">Talenvia</div>
            <div className="tv-brand-tag">Elevate your career journey</div>
          </div>
        </div>

        <nav className="tv-nav" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "tv-link active" : "tv-link")}>
            Home
          </NavLink>
          <NavLink to="/mock-tests" className={({ isActive }) => (isActive ? "tv-link active" : "tv-link")}>
            Mock Tests
          </NavLink>
          <NavLink to="/challenges" className={({ isActive }) => (isActive ? "tv-link active" : "tv-link")}>
            Challenges
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? "tv-link active" : "tv-link")}>
            Profile
          </NavLink>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? "tv-link active" : "tv-link")}>
            Settings
          </NavLink>

          <div className="tv-nav-sep" aria-hidden="true" />

          <NavLink to="/about" className={({ isActive }) => (isActive ? "tv-link subtle active" : "tv-link subtle")}>
            About Us
          </NavLink>
          <NavLink
            to="/how-it-works"
            className={({ isActive }) => (isActive ? "tv-link subtle active" : "tv-link subtle")}
          >
            How it Works
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
