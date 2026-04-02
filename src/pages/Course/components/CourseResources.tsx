import {
  faDownload,
  faFile,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import type { CourseData } from "../../../types/CoursesTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import ResourceCard from "./ResourceCard";
import { memo } from "react";

type Props = {
  resources: CourseData["resources"];
};

function CourseResources({ resources }: Props) {
  return (
    <ul className="list-unstyled mt-4 mb-5 content">
      {resources.referenceBooks?.map((referenceBook, bookI) => (
        <li className="mb-3" key={bookI}>
          <ResourceCard
            title={`Reference Book (${bookI + 1})`}
            description={`The Recommended Reference Book`}
            descriptionNote={referenceBook.title || "404 - Not Found !"}
            href={referenceBook.url}
            icon={faFile}
            actionText="Download"
            actionIcon={faDownload}
            buttonVisibility={true}
          />
        </li>
      ))}
      {resources.extraResources &&
        resources.extraResources.map((extraResource, extraResourceI) => (
          <li className="mb-3" key={extraResourceI}>
            <ResourceCard
              title={extraResource.title}
              description={extraResource.title}
              descriptionNote={extraResource.note || "404 - Not Found !"}
              href={extraResource.url}
              icon={faFile}
              actionText="Download"
              actionIcon={faDownload}
              buttonVisibility={true}
            />
          </li>
        ))}
      {resources.summaries?.map((summarie, summaireI) => (
        <li className="mb-3" key={summaireI}>
          <ResourceCard
            title={`Summary (${summaireI + 1})`}
            description={`Selected summary of the course by other students`}
            descriptionNote={summarie.title || "404 - Not Found !"}
            href={summarie.url}
            icon={faFile}
            actionText="Download"
            actionIcon={faDownload}
            buttonVisibility={true}
          />
        </li>
      ))}
      {resources.personalRecommendations && (
        <li className="mb-3">
          <ResourceCard
            title={"Personal Recommendation"}
            description={
              "I recommend watching this video if you have a problem with the course"
            }
            descriptionNote={
              resources.personalRecommendations?.title || "404 - Not Found !"
            }
            href={resources.personalRecommendations?.url}
            icon={faPlayCircle}
            actionText="Watch"
            actionIcon={faYoutube}
            buttonVisibility={true}
          />
        </li>
      )}
      <li className="mb-3">
        <span className="a-parent d-flex justify-content-between align-items-start flex-column">
          <div className="info d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">
            <div className="img d-flex justify-content-center align-items-center ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
              <FontAwesomeIcon icon={faFile} fixedWidth />
            </div>
            <div className="txt">
              <h2 className="mb-2 mb-md-1">Previous Exams</h2>
              <p className="mb-3 mb-md-0">
                You can check these out before approaching the actual exam
              </p>
            </div>
          </div>
          <div className="table ps-md-3">
            <ul className="list-unstyled m-0 ms-md-5">
              {resources.exams.map((exam, i) => (
                <li
                  className="d-flex justify-content-between align-items-center"
                  key={i}
                >
                  <p className="mb-0">{exam.title}</p>
                  <a
                    href={exam.url}
                    className="d-flex align-items-center justify-content-between"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                    <FontAwesomeIcon icon={faDownload} fixedWidth />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </span>
      </li>
    </ul>
  );
}

export default memo(CourseResources);
