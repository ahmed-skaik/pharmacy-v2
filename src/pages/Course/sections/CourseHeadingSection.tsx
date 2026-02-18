import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChalkboardUser,
  faCirclePlay,
  faHouseLaptop,
  faInfo,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

export default function CourseHeadingSection() {
  return (
    <>
      <div className="container">
        <div className="main-title-2">
          <h1 className="mb-3">
            Pharmacology <span>One</span>.
          </h1>
          <p className="mb-4">
            Introduction to Pharmacology, Pharmacodynamics || Drugs affecting
            the ANS & Drugs affecting the CNS
          </p>
        </div>
      </div>
      <div className="sub-container">
        <div className="spikes-seperator" style={{ zIndex: "0" }}></div>
        <div className="container">
          <div className="about">
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-md-around">
              <li>
                <FontAwesomeIcon icon={faChalkboardUser} fixedWidth />
                Lecturer:
                <span>Rasha Bseiso</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                Videos:
                <span>23</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} fixedWidth />
                Chapters: <span>13</span>
              </li>
            </ul>
          </div>
          <ul
            className="nav nav-pills justify-content-center align-items-center flex-row pt-0 pt-md-4"
            id="pills-tab"
            role="tablist"
          >
            <li
              className="nav-item align-self-stretch d-grid align-self-md-auto active"
              role="presentation"
            >
              <button
                className="nav-link mt-3 mt-md-0 pt-3 pb-3 pt-md-1 pb-md-4 active"
                id="pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Lectures
                <FontAwesomeIcon
                  icon={faHouseLaptop}
                  fixedWidth
                  className="ms-2"
                />
              </button>
            </li>
            <li
              className="nav-item align-self-stretch d-grid align-self-md-auto"
              role="presentation"
            >
              <button
                className="nav-link mt-3 mt-md-0 pt-3 pb-3 pt-md-1 pb-md-4"
                id="pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Resources
                <FontAwesomeIcon
                  icon={faNoteSticky}
                  fixedWidth
                  className="ms-2"
                />
              </button>
            </li>
            <li
              className="nav-item align-self-stretch d-grid align-self-md-auto"
              role="presentation"
            >
              <button
                className="nav-link mt-3 mt-md-0 pt-3 pb-3 pt-md-1 pb-md-4"
                id="pills-contact-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                About
                <FontAwesomeIcon icon={faInfo} fixedWidth className="ms-2" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
