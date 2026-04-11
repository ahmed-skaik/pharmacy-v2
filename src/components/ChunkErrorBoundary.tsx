// src/components/ChunkErrorBoundary.tsx
import { Component, type ReactNode } from "react";

interface State {
  hasError: boolean;
}

export default class ChunkErrorBoundary extends Component<
  { children: ReactNode },
  State
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex flex-column align-items-center justify-content-center p-5">
          <p>Failed to load this page. Please check your connection and</p>
          <button
            className="btn main-btn btn-dark text-uppercase"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
