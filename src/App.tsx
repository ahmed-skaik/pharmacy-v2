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

export default function App() {
  const welcomeMsg = `Hello from Console my fellow Pharmacy Students !`;
  console.log(
    `%c${welcomeMsg} %cit's Ahmed-Skaîk typing..`,
    `color: #3434ff; font-size: 25px; background-color: #fff; text-decoration: underline wavy #08082c;`,
    `color: red; font-size: 25px; padding-top: 25px`,
  );
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="levels" element={<h3>Test for Levels page </h3>} />
          <Route path="levels/:levelId" element={<LevelDetails />} />
          <Route path="uni-needs" element={<UniversityNeeds />} />
          <Route path="course" element={<CoursePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
