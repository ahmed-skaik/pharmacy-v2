import WebsiteLogo from "../assets/images/logo.png";
import MoodleLogo from "../assets/images/moodle-logo.png";
import GateLogo from "../assets/images/gate.png";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrescription,
  faBarsStaggered,
  faXmark,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <button
        className="full-screen d-none d-md-block"
        id="full-screen"
        aria-label="full Screen"
      >
        <FontAwesomeIcon icon={faExpand} fixedWidth />
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
            <FontAwesomeIcon icon={faPrescription} fixedWidth />
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
              <li className="nav-item">
                <a
                  className={`nav-link`}
                  href="/#plans"
                  onClick={() => setMenuOpen(false)}
                >
                  Plans
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="."
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
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to="uni-needs"
                      onClick={() => setMenuOpen(false)}
                    >
                      UNIV Needs
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-block d-md-none">
                <a
                  className="nav-link"
                  href="/#courses"
                  onClick={() => setMenuOpen(false)}
                >
                  Courses
                </a>
              </li>
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
              <li className="nav-item d-block d-lg-none">
                <a
                  className="nav-link"
                  href="https://moodle.alazhar.edu.ps/login/"
                  target="_blank"
                  rel="noopener"
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
                  rel="noopener"
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
              >
                <img src={MoodleLogo} alt="moodle" />
              </NavLink>
              <NavLink
                to="http://gate.alazhar.edu.ps/students/"
                target="_blank"
                onClick={() => setMenuOpen(false)}
              >
                <img src={GateLogo} alt="gate" />
              </NavLink>
              <FontAwesomeIcon icon={faPrescription} fixedWidth />
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
