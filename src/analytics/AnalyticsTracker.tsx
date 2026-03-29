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

const GA_ID = import.meta.env.VITE_GA_ID;
if (!GA_ID) {
  console.warn("GA Measurement ID is missing");
}

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID || !window.gtag) return;

    window.gtag("config", GA_ID, {
      page_path: location.pathname,
    });
  }, [location.pathname]);

  return null;
}
