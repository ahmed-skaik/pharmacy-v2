import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faChalkboardUser,
  faCirclePlay,
  faHouseLaptop,
  faInfo,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
// import SpikesSeperator from "../../../components/SpikesSeperator";
import type { CourseData } from "../../../types";
import SectionHeading from "../../../components/SectionHeading";

type Props = {
  course: CourseData;
};

export default function CourseHeadingSection({ course }: Props) {
  const cleanTitle = course.title.endsWith(".")
    ? course.title.slice(0, -1)
    : course.title;

  const words = cleanTitle.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");
  return (
    <>
      <div className="container">
        <SectionHeading
          titleStart={firstPart}
          titleHighlight={lastWord}
          description={course.description}
        />
      </div>
      <div className="sub-container">
        {/* <SpikesSeperator /> */}
        <div className="container">
          <div className="about">
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-md-around">
              <li>
                <FontAwesomeIcon icon={faChalkboardUser} fixedWidth />
                Lecturer:
                {course.lecturers.map((lecturer, i) => (
                  <span key={i}>
                    {lecturer.title} {lecturer.name}
                  </span>
                ))}
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                Videos:
                <span>{course.stats.videosCount}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} fixedWidth />
                Chapters: <span>{course.stats.chaptersCount}</span>
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
