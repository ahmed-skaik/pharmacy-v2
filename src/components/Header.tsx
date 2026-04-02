import WebsiteLogo from "/logo.webp";
import MoodleLogo from "../assets/images/moodle-logo.png";
import GateLogo from "../assets/images/gate.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faXmark,
  faExpand,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import { GetPageIcon } from "../utils/GetPageIcon";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const doc = document.documentElement;

    if (!document.fullscreenElement) {
      if (doc.requestFullscreen) {
        doc.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const location = useLocation();

  return (
    <header>
      <button
        className="full-screen d-none d-md-block"
        id="full-screen"
        aria-label="full Screen"
        onClick={toggleFullscreen}
      >
        <FontAwesomeIcon
          icon={isFullscreen ? faCompress : faExpand}
          fixedWidth
        />
      </button>
      <nav className="navbar navbar-expand-lg pt-lg-2 pb-lg-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={WebsiteLogo} alt="Logo" />
          </Link>
          <div className="d-block d-lg-none ms-auto">
            <a
              className="btn main-btn mid d-none d-md-inline-block"
              style={{
                fontSize: "14px",
                padding: "10px 20px",
                marginRight: "2px",
              }}
              href="#courses"
              onClick={() => setMenuOpen(false)}
            >
              Courses
            </a>
            <FontAwesomeIcon icon={GetPageIcon(location.pathname)} fixedWidth />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} fixedWidth />
            <FontAwesomeIcon icon={faXmark} fixedWidth />
          </button>

          <div
            className={`navbar-collapse collapse ${menuOpen ? "show" : ""}`}
            id="main"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  to="/"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Levels
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/levels/1"
                      onClick={() => setMenuOpen(false)}
                    >
                      Level 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/levels/2"
                      onClick={() => setMenuOpen(false)}
                    >
                      Level 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/levels/3"
                      onClick={() => setMenuOpen(false)}
                    >
                      Level 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/levels/4"
                      onClick={() => setMenuOpen(false)}
                    >
                      Level 4
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="/levels/5"
                      onClick={() => setMenuOpen(false)}
                    >
                      Level 5
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className={`nav-link`}
                  to="uni-needs"
                  onClick={() => setMenuOpen(false)}
                >
                  UNIV Needs
                </NavLink>
              </li>
              {/* <li className="nav-item d-block d-md-none">
                <a
                  className="nav-link"
                  href="/#courses"
                  onClick={() => setMenuOpen(false)}
                >
                  Courses
                </a>
              </li> */}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <hr className="d-block d-lg-none" />
              <li className="nav-item d-block d-lg-none">
                <a
                  className="nav-link"
                  href="https://moodle.alazhar.edu.ps/login/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  Moodle
                </a>
              </li>
              <li className="nav-item d-block d-lg-none">
                <a
                  className="nav-link"
                  href="http://gate.alazhar.edu.ps/students/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  Student Gate
                </a>
              </li>
            </ul>
            <div className="d-none d-lg-block">
              <NavLink
                to="https://moodle.alazhar.edu.ps/login/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MoodleLogo} alt="moodle" />
              </NavLink>
              <NavLink
                to="http://gate.alazhar.edu.ps/students/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                <img src={GateLogo} alt="gate" />
              </NavLink>
              <FontAwesomeIcon
                icon={GetPageIcon(location.pathname)}
                fixedWidth
              />
              <a
                href="/#courses"
                className="btn main-btn"
                onClick={() => setMenuOpen(false)}
              >
                Courses
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
