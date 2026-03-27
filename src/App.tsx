import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AnalyticsTracker from "./analytics/AnalyticsTracker";
import ScrollToHash from "./utils/ScrollToHash";
import LoadingPage from "./components/LoadingPage";
import * as bootstrap from "bootstrap";
import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";

const LazyHome = lazy(() => import("./pages/Home"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyNotFound = lazy(() => import("./pages/NotFound"));
const LazyLevelDetails = lazy(() => import("./pages/LevelDetails"));
const LazyCoursePage = lazy(() => import("./pages/Course"));
const LazyUniversityNeeds = lazy(() => import("./pages/UniversityNeeds"));

export default function App() {
  const welcomeMsg = `Hello from Console my fellow Pharmacy Students !`;
  console.log(
    `%c${welcomeMsg} %cit's Ahmed-Skaîk typing..`,
    `color: #3434ff; font-size: 25px; background-color: #fff; text-decoration: underline wavy #08082c;`,
    `color: red; font-size: 25px; padding-top: 25px`,
  );

  //Tooltip
  const location = useLocation();
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]',
    );

    tooltipTriggerList.forEach((el) => {
      bootstrap.Tooltip.getOrCreateInstance(el);
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
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LazyHome />} />
            <Route path="about" element={<LazyAbout />} />
            <Route path="contact" element={<LazyContact />} />
            <Route path="levels/:levelId" element={<LazyLevelDetails />} />
            <Route path="uni-needs" element={<LazyUniversityNeeds />} />
            <Route path="courses/:courseName" element={<LazyCoursePage />} />
          </Route>
          <Route path="*" element={<LazyNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
