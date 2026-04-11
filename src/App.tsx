import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LevelDetails from "./pages/LevelDetails";
import UniversityNeeds from "./pages/UniversityNeeds";
import AnalyticsTracker from "./analytics/AnalyticsTracker";
import ScrollToHash from "./utils/ScrollToHash";
import LoadingPage from "./components/LoadingPage";
import { Tooltip } from "bootstrap";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ChunkErrorBoundary from "./components/ChunkErrorBoundary";
import { idColor } from "./constants";

const LazyCoursePage = lazy(() => import("./pages/Course"));

const welcomeMsg = `Hello from Console my fellow Pharmacy Students !`;
console.log(
  `%c${welcomeMsg} %cit's Ahmed-Skaîk typing..`,
  `color: ${idColor}; font-size: 25px; background-color: #fff; text-decoration: underline wavy #08082c;`,
  `color: red; font-size: 25px; padding-top: 25px`,
);

export default function App() {
  //Tooltip
  const location = useLocation();
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );

    tooltipTriggerList.forEach((el) => {
      Tooltip.getOrCreateInstance(el);
    });
  }, [location]);

  useEffect(() => {
    const handler = () =>
      console.log("fullscreen:", !!document.fullscreenElement);

    document.addEventListener("fullscreenchange", handler);

    return () => {
      document.removeEventListener("fullscreenchange", handler);
    };
  }, []);

  return (
    <>
      <AnalyticsTracker />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="levels/:levelId" element={<LevelDetails />} />
          <Route path="uni-needs" element={<UniversityNeeds />} />
          <Route
            path="courses/:courseName"
            element={
              <ChunkErrorBoundary>
                <Suspense fallback={<LoadingPage />}>
                  <LazyCoursePage />
                </Suspense>
              </ChunkErrorBoundary>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
