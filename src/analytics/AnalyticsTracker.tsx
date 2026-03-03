import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-VXKB3761KN", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}
