import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRightToBracket,
  faPrescription,
} from "@fortawesome/free-solid-svg-icons";
import OopsMessage from "../../components/OopsMessage";
import DotsDecoration from "../../components/DotsDecoration";

import { useParams } from "react-router-dom";
import { levels } from "../../data/LevelsData";
import type { LevelStructure } from "../../types/LevelsTypes";
import ProgressSection from "./sections/ProgressSection";
import SpikesSeperator from "../../components/SpikesSeperator";
import Seo from "../../meta/Seo";
import LinkCard from "../../components/LinkCard";
import SectionHeading from "../../components/SectionHeading";
import { GetDepartmentClass } from "../../utils/GetDepartmentClass";

export default function LevelDetails() {
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
    <>
      <Seo
        title={`Level ${level.title} Courses`}
        description={`Level ${level.title} Courses`}
      />
      <div className="content">
        <DotsDecoration />
        <div className="container">
          <SectionHeading
            titleStart="Level"
            titleHighlight={level.title}
            description={level.description}
          />
          <div className="year mt-5 pb-4">
            {level.semesters.map((semesterSection) => (
              <div
                className={`semester ${semesterSection.isOptional ? "optional" : ""}`}
                key={semesterSection.semester}
              >
                <p
                  {...(semesterSection.isOptional
                    ? {
                        "data-bs-toggle": "tooltip",
                        "data-bs-placement": "top",
                        "data-bs-delay": "100",
                        title:
                          "These Courses are Optional; you only need to Pass Four of them.",
                      }
                    : {})}
                >
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
                    <div> {semesterSection.title}</div>
                  </button>
                </p>

                {semesterSection.courses.length === 0 ? (
                  <div id={semesterSection.semester} className="collapse">
                    <OopsMessage />
                  </div>
                ) : (
                  <div className="collapse" id={semesterSection.semester}>
                    {semesterSection.courses.map((course) => (
                      <LinkCard
                        key={course.id}
                        href={`/courses/${course.link}`}
                        title={course.name}
                        subtitle={
                          <>
                            <span className="id">{course.code || "PHPX"}</span>{" "}
                            {course.classification}
                          </>
                        }
                        icon={faPrescription}
                        actionText="Visit"
                        actionIcon={faArrowRightToBracket}
                        cardClassName={`dep ${GetDepartmentClass(course.code)}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {levelId === "5" ? (
        <>
          <SpikesSeperator />
          <ProgressSection />
        </>
      ) : null}
    </>
  );
}
