import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import MockTestsPage from "./pages/MockTestsPage";
import ChallengesPage from "./pages/ChallengesPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import NotFoundPage from "./pages/NotFoundPage";

// PUBLIC_INTERFACE
function App() {
  /** Talenvia app entry component: provides routing, global layout, and core pages. */
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <main className="tv-main" role="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/mock-tests" element={<MockTestsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
