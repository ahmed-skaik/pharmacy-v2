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

export default function Header() {
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
            <NavLink
              className="btn main-btn mid d-none d-md-inline-block"
              style={{
                fontSize: "14px",
                padding: "10px 20px",
                marginRight: "2px",
              }}
              to="#courses"
            >
              Courses
            </NavLink>
            <FontAwesomeIcon icon={faPrescription} fixedWidth />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBarsStaggered} fixedWidth />
            <FontAwesomeIcon icon={faXmark} fixedWidth />
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className={`nav-link`} href="/#plans">
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
                    <NavLink className="dropdown-item" to="/level">
                      Level 1
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/level-2">
                      Level 2
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/level-3">
                      Level 3
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/level-4">
                      Level 4
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/level-5">
                      Level 5
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="uni-needs">
                      UNIV Needs
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item d-block d-md-none">
                <NavLink className="nav-link" to="#courses">
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/contact"
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
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item d-block d-lg-none">
                <NavLink
                  className="nav-link"
                  to="https://moodle.alazhar.edu.ps/login/"
                  target="_blank"
                >
                  Moodle
                </NavLink>
              </li>
              <li className="nav-item d-block d-lg-none">
                <NavLink
                  className="nav-link"
                  to="http://gate.alazhar.edu.ps/students/"
                  target="_blank"
                >
                  Student Gate
                </NavLink>
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
              >
                <img src={GateLogo} alt="gate" />
              </NavLink>
              <FontAwesomeIcon icon={faPrescription} fixedWidth />
              <NavLink to="#courses" className="btn main-btn">
                Courses
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
