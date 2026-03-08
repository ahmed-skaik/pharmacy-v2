import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faBuildingColumns,
  faCirclePlay,
  faDownload,
  faFile,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import type { CourseData } from "../../../types";
import LinkCard from "../../../components/CollapseCard";

type Props = {
  course: CourseData;
};

export default function CourseContentSection({ course }: Props) {
  return (
    <div className="container">
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active videos"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="heading text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
            <h2>
              E-learning <span>Lectures</span>.
            </h2>
            <p>Recorded E-Learning Lectures</p>
          </div>
          <div className="year mt-4 mb-5">
            {course.lectures.map((lecture, i) => (
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
                      <span>{lecture.chapterTitle}</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id={`collapseExample-${i}`}>
                  {lecture.documents.map((document, i) => (
                    <LinkCard
                      key={i}
                      href={document.url}
                      title={document.title}
                      subtitle={
                        <>
                          {document.type} (;<span>404 - Not Found</span>)
                        </>
                      }
                      icon={faFile}
                      actionText="Download"
                      actionIcon={faDownload}
                      cardClassName="slides"
                      target="_blank"
                      rel="noopener noreferrer"
                      hideAction={true}
                    />
                  ))}
                  {lecture.videos.map((video, i) => (
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
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="tab-pane fade resourses"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="heading text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
            <h2>
              Files &amp; <span>Resources</span>.
            </h2>
            <p>Reference Book, Summaries, Previous Exams &amp; More !</p>
          </div>
          <ul className="list-unstyled mt-4 mb-5 content">
            <li className="mb-3">
              <a
                href={course.resources.referenceBook?.url}
                className="a-parent d-flex justify-content-between align-items-center flex-column flex-md-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">
                  <div className="img d-flex justify-content-center align-items-center ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faFile} fixedWidth />
                  </div>
                  <div className="txt">
                    <h2 className="mb-2 mb-md-1">Reference Book</h2>
                    <p className="mb-3 mb-md-0">
                      The Recommended Reference Book
                      <br className="d-block d-lg-none" />
                      {course.resources.referenceBook?.title}
                    </p>
                  </div>
                </div>
                <span className="anchor-btn d-flex align-items-center justify-content-between ms-auto me-auto me-md-0">
                  Download
                  <FontAwesomeIcon icon={faDownload} fixedWidth />
                </span>
              </a>
            </li>
            <li className="mb-3">
              <a
                href={course.resources.summaries?.url}
                className="a-parent d-flex justify-content-between align-items-center flex-column flex-md-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">
                  <div className="img d-flex justify-content-center align-items-center ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faFile} fixedWidth />
                  </div>
                  <div className="txt">
                    <h2 className="mb-2 mb-md-1">Summaries</h2>
                    <p className="mb-3 mb-md-0">
                      Selected summary of the course by other students
                      <br className="d-block d-lg-none" />
                      {course.resources.summaries?.title}
                    </p>
                  </div>
                </div>
                <span className="anchor-btn d-flex align-items-center justify-content-between ms-auto me-auto me-md-0">
                  Download
                  <FontAwesomeIcon icon={faDownload} fixedWidth />
                </span>
              </a>
            </li>
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
                    {course.resources.exams.map((exam, i) => (
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
        </div>
        <div
          className="tab-pane fade about-course"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div className="heading text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
            <h2>
              About This <span>Course</span>.
            </h2>
            <p>Information About The Course</p>
          </div>
          <ul className="list-unstyled mt-4 mb-5 content">
            <li className="mb-3">
              <a
                className="a-parent d-flex justify-content-between align-items-center flex-column flex-md-row"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="info d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-start">
                  <div className="img d-flex justify-content-center align-items-center ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                    <FontAwesomeIcon icon={faFileLines} fixedWidth />
                  </div>
                  <div className="txt">
                    <h2 className="mb-2 mb-md-1">Description</h2>
                    <p className="mb-3 mb-md-0">{course.description}</p>
                  </div>
                </div>
                <span
                  className="anchor-btn d-flex align-items-center justify-content-between ms-auto me-auto me-md-0"
                  style={{ visibility: "hidden" }}
                >
                  Download
                  <FontAwesomeIcon icon={faDownload} fixedWidth />
                </span>
              </a>
            </li>
            <li className="mb-3">
              <div className="table-responsive a-parent mb-5">
                <table className="table table-hover table-borderless">
                  <thead>
                    <tr>
                      <th scope="col" colSpan={4} className="pb-3">
                        <span className="d-flex justify-content-start align-items-center">
                          <FontAwesomeIcon
                            icon={faBuildingColumns}
                            fixedWidth
                            size="2x"
                            className="me-1"
                          />
                          <span className="fs-5">Course Info :-</span>
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Course Title:</th>
                      <td colSpan={3}>
                        {course.about.infoTable["Course Title:"]}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Course Code:</th>
                      <td colSpan={3}>
                        {course.about.infoTable["Course Code:"]}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Faculty:</th>
                      <td colSpan={3}>{course.about.infoTable["Faculty:"]}</td>
                    </tr>
                    <tr>
                      <th scope="row">Department:</th>
                      <td colSpan={3}>
                        {course.about.infoTable["Department:"]}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Course Classification:</th>
                      <td colSpan={3}>
                        {" "}
                        {course.about.infoTable["Course Classification:"]}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Course Level:</th>
                      <td colSpan={3}>
                        {course.about.infoTable["Course Level:"]}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total Credits:</th>
                      <td colSpan={3}>
                        {course.about.infoTable["Total Credits:"]}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Pre-requirements:</th>
                      {course.about.preRequirements.map((pre, i) => (
                        <td className="mustt" key={i}>
                          <abbr
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-delay="100"
                            title="Human Physiology I"
                          >
                            {pre}
                          </abbr>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <th scope="row">Notes:</th>
                      <td colSpan={3} className="note">
                        You Should at least Study this Course.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
