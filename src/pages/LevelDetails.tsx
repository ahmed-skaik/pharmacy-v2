import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRightToBracket,
  faPrescription,
} from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";
import { levels } from "../data/LevelsData";
import type { LevelStructure } from "../types";
import OopsMessage from "../components/OopsMessage";
import DotsDecoration from "../components/DotsDecoration";

export default function LevelPage() {
  const { levelId } = useParams();
  // Convert route param to number
  const myLevelId = Number(levelId);
  // Find matching level
  const level: LevelStructure | undefined = levels.find(
    (lvl) => lvl.id === myLevelId,
  );
  // If no level found
  if (!level) {
    return (
      <>
        <DotsDecoration />
        <OopsMessage />
      </>
    );
  }
  return (
    <div className="content">
      <DotsDecoration />
      <div className="container">
        <div className="main-title-2">
          <h1 className="mb-3">
            Level <span>{level.title}</span>.
          </h1>
          <p className="mb-4">{level.description}</p>
        </div>
        <div className="year mt-5 pb-4">
          {level.semesters.map((semesterSection) => (
            <div className="semester-1 semester" key={semesterSection.semester}>
              <p>
                <button
                  className="d-flex btn pt-3 pb-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${semesterSection.semester}`}
                  aria-expanded="false"
                  aria-controls={semesterSection.semester}
                  aria-label="First Semester"
                >
                  <div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div> {semesterSection.semester.replace("-", " ")}</div>
                </button>
              </p>

              {semesterSection.courses.length === 0 ? (
                <div id={semesterSection.semester} className="collapse">
                  <OopsMessage />
                </div>
              ) : (
                <div className="collapse" id={semesterSection.semester}>
                  {semesterSection.courses.map((course) => (
                    <a href={course.link} className="a-parent" key={course.id}>
                      <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                        <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                          <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                            <FontAwesomeIcon icon={faPrescription} fixedWidth />
                          </div>
                          <div className="txt">
                            <h2>{course.name}</h2>
                            <p>
                              <span className="id">
                                {course.code || "PHPX"}
                              </span>{" "}
                              {course.classification}
                            </p>
                          </div>
                        </div>
                        <div className="link align-self-center align-self-md-end">
                          <span>
                            Visit
                            <FontAwesomeIcon
                              icon={faArrowRightToBracket}
                              fixedWidth
                            />
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
