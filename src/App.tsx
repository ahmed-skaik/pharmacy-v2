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
import Levels from "./pages/Level";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="levels" element={<Levels />} />
          <Route path="levels/:levelId" element={<LevelDetails />} />
          <Route path="uni-needs" element={<UniversityNeeds />} />
          <Route path="course" element={<CoursePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
