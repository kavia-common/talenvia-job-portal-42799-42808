import React from "react";
import "./App.css";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AppRouter } from "./routes/AppRouter";

// PUBLIC_INTERFACE
function App() {
  /** Talenvia application entry component: error boundary + router + layout shell. */
  return (
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
