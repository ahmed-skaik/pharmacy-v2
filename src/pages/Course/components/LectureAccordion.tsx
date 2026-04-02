import {
  faAngleRight,
  faCirclePlay,
  faDownload,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import OopsMessage from "../../../components/OopsMessage";
import type { CourseData } from "../../../types/CoursesTypes";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import LinkCard from "../../../components/LinkCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

type Props = {
  lectures: CourseData["lectures"];
};

function LectureAccordion({ lectures }: Props) {
  if (!lectures || lectures.length === 0) {
    return <OopsMessage />;
  }

  return (
    <>
      {lectures.map((lecture, i) => (
        <div className="semester" key={i}>
          <p>
            <button
              className="d-flex btn pt-3 pb-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseExample-${i}`}
              aria-expanded="false"
              aria-controls={`collapseExample-${i}`}
            >
              <div>
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
              <div>
                <span>
                  {lecture.chapterTitle}{" "}
                  <span className="note">{lecture.chapterTitleNote}</span>
                </span>
              </div>
            </button>
          </p>
          <div className="collapse" id={`collapseExample-${i}`}>
            {lecture.documents.map((document, i) => (
              <LinkCard
                key={i}
                href={document.url}
                title={document.title}
                subtitle={document.type}
                icon={faFile}
                actionText="Download"
                actionIcon={faDownload}
                cardClassName="slides"
                target="_blank"
                rel="noopener noreferrer"
                hideAction={true}
              />
            ))}
            {lecture.videos.length > 0 ? (
              lecture.videos.map((video, i) => (
                <LinkCard
                  key={i}
                  href={video.url}
                  title={video.title}
                  subtitle={video.description}
                  icon={faCirclePlay}
                  actionText="Watch"
                  actionIcon={faYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))
            ) : (
              <OopsMessage />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default memo(LectureAccordion);
