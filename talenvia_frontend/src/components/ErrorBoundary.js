import React from "react";

// PUBLIC_INTERFACE
export class ErrorBoundary extends React.Component {
  /** Catches UI errors and shows a friendly fallback message. */
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: String(error?.message || error) };
  }

  componentDidCatch(error, info) {
    // Intentionally minimal. Hook into logging backend in the future.
    // eslint-disable-next-line no-console
    console.error("Talenvia UI Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container main">
          <div className="alert" role="alert">
            <strong>Something went wrong.</strong>
            <div className="muted" style={{ marginTop: 6 }}>
              {this.state.errorMessage || "Unexpected UI error."}
            </div>
            <div style={{ marginTop: 12 }}>
              <button className="btn btn-ghost" onClick={() => window.location.reload()}>
                Reload
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
