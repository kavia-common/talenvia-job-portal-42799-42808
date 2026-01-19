import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { JobsPage } from "../pages/JobsPage";
import { ProfilePage } from "../pages/ProfilePage";
import { MockTestsPage } from "../pages/MockTestsPage";
import { ChallengesPage } from "../pages/ChallengesPage";
import { SettingsPage } from "../pages/SettingsPage";
import { AboutPage } from "../pages/AboutPage";
import { HowItWorksPage } from "../pages/HowItWorksPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { getExperimentsEnabled, getFeatureFlag } from "../config/featureFlags";

function LoadingFallback() {
  return (
    <div className="card" role="status" aria-live="polite">
      <div style={{ fontWeight: 900 }}>Loading…</div>
      <div className="muted" style={{ marginTop: 6 }}>
        Preparing Talenvia experience.
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
export function AppRouter() {
  /** Defines Talenvia routes and feature-flagged sections. */
  const challengesEnabled = getExperimentsEnabled() || getFeatureFlag("challenges");

  return (
    <BrowserRouter>
      <AppLayout showSidebar={true}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Navigate to="/jobs" replace />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/tests" element={<MockTestsPage />} />
            {challengesEnabled ? <Route path="/challenges" element={<ChallengesPage />} /> : null}
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}
