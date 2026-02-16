import "./styles/main.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LevelPage from "./pages/LevelPage";
import CoursePage from "./pages/CoursePage";
import UniversityNeeds from "./pages/UniversityNeeds";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="level" element={<LevelPage />} />
          <Route path="course" element={<CoursePage />} />
          <Route path="uni-needs" element={<UniversityNeeds />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
