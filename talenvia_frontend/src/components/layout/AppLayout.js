import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

// PUBLIC_INTERFACE
export function AppLayout({ children, showSidebar = true }) {
  /** Wraps pages with Talenvia layout: Navbar + (optional) Sidebar + Footer. */
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main" role="main">
        <div className="container">
          <div className={showSidebar ? "shell-grid" : ""}>
            {showSidebar ? <Sidebar /> : null}
            <div>{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
