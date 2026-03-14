import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LevelDetails from "./pages/LevelDetails";
import CoursePage from "./pages/Course";
import UniversityNeeds from "./pages/UniversityNeeds";
import AnalyticsTracker from "./analytics/AnalyticsTracker";
import ScrollToHash from "./utils/ScrollToHash";
import * as bootstrap from "bootstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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

  document.addEventListener("fullscreenchange", () =>
    console.log("fullscreen:", !!document.fullscreenElement),
  );

  return (
    <>
      <AnalyticsTracker />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="levels" element={<h3>Test for Levels page </h3>} />
          <Route path="levels/:levelId" element={<LevelDetails />} />
          <Route path="uni-needs" element={<UniversityNeeds />} />
          <Route path="courses" element={<h3>Test For Courses Page</h3>} />
          <Route path="courses/:courseName" element={<CoursePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
