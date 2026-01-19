import React from "react";
import { NavLink } from "react-router-dom";
import { getFeatureFlag, getExperimentsEnabled } from "../../config/featureFlags";

function navLinkClass({ isActive }) {
  return isActive ? "navlink navlink-active" : "navlink";
}

// PUBLIC_INTERFACE
export function Navbar() {
  /** Top navigation bar with active link highlighting. */
  const showChallenges = getExperimentsEnabled() || getFeatureFlag("challenges");

  return (
    <header className="navbar" role="banner">
      <div className="container navbar-inner">
        <div className="brand" aria-label="Talenvia">
          <div className="brand-mark" aria-hidden="true" />
          <div className="brand-name">
            <strong>Talenvia</strong>
            <span>Jobs • Skills • Growth</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/jobs" className={navLinkClass}>
            Jobs
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>
          <NavLink to="/tests" className={navLinkClass}>
            Mock Tests
          </NavLink>
          {showChallenges ? (
            <NavLink to="/challenges" className={navLinkClass}>
              Challenges
            </NavLink>
          ) : null}
          <NavLink to="/settings" className={navLinkClass}>
            Settings
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/how-it-works" className={navLinkClass}>
            How it works
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
