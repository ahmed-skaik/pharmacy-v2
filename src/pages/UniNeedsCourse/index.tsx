import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faCirclePlay,
  faDownload,
  faFile,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { UNI_NEEDS_DATA } from "../../data/UniversityNeedsData";
import Seo from "../../meta/Seo";
import OopsMessage from "../../components/OopsMessage";
import LinkCard from "../../components/LinkCard";
import SectionHeading from "../../components/SectionHeading";

export default function UniNeedsCourse() {
  const { subjectId } = useParams();
  const subject = UNI_NEEDS_DATA.find((s) => s.id === subjectId);

  if (!subject) {
    return <OopsMessage />;
  }

  return (
    <>
      <Seo
        title={subject.title}
        description={`${subject.title} — University Needs, Faculty of Pharmacy, Alazhar University of Gaza`}
      />
      <div className="content univ-needs position-relative">
        <div className="container">
          {/* Back link */}
          <Link
            to="/uni-needs"
            className="d-inline-flex align-items-center gap-2 mb-4 mt-2 uni-needs-back"
          >
            <FontAwesomeIcon icon={faAngleLeft} />
            All University Needs
          </Link>

          {/* Heading */}
          <div className="d-flex align-items-center gap-3 flex-wrap mb-2">
            <SectionHeading
              titleStart={subject.title.split(" ").slice(0, -1).join(" ")}
              titleHighlight={subject.title.split(" ").at(-1)}
              description={
                subject.isOptional
                  ? "This is an optional course. As a Pharmacy student, you only need to pass one of the optional courses."
                  : "This is a required course for Pharmacy students."
              }
            />
            <span
              className={`badge align-self-start mt-1 ${
                subject.isOptional ? "bg-warning text-dark" : "bg-success"
              }`}
            >
              {subject.isOptional ? "Optional" : "Required"}
            </span>
          </div>

          <div className="year mt-4 mb-5">
            {/* Books section */}
            {subject.books.length > 0 && (
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#books-section"
                    aria-expanded="false"
                    aria-controls="books-section"
                    aria-label="Download Books"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon={faBook}
                        className="me-2"
                        style={{ color: "#3434ff" }}
                      />
                      Books & References
                    </div>
                  </button>
                </p>
                <div className="collapse" id="books-section">
                  {subject.books.map((book, i) => (
                    <LinkCard
                      key={i}
                      href={book.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={book.title}
                      subtitle="Reference Book"
                      icon={faFile}
                      actionText="Download"
                      actionIcon={faDownload}
                      cardClassName="dep"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Lecturers */}
            {subject.lecturers.length === 0 ? (
              <OopsMessage />
            ) : (
              subject.lecturers.map((lecturer, lIndex) => (
                <div className="semester" key={lIndex}>
                  <p>
                    <button
                      className="d-flex btn pt-3 pb-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#lecturer-${lIndex}`}
                      aria-expanded="false"
                      aria-controls={`lecturer-${lIndex}`}
                      aria-label={`Lecturer: ${lecturer.name}`}
                    >
                      <div>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </div>
                      <div>
                        <span className="name">Lecturer: </span>
                        <span>{lecturer.name}</span>
                      </div>
                    </button>
                  </p>
                  <div className="collapse" id={`lecturer-${lIndex}`}>
                    <div className="ms-4 ms-md-5 card-body mb-3">
                      {lecturer.parts.map((part, pIndex) => (
                        <div className="semester" key={pIndex}>
                          <p>
                            <button
                              className="btn pt-3 pb-3"
                              style={{ width: "fit-content" }}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#part-${lIndex}-${pIndex}`}
                              aria-expanded="false"
                              aria-controls={`part-${lIndex}-${pIndex}`}
                              aria-label={part.title}
                            >
                              <FontAwesomeIcon icon={faAngleRight} />
                              {part.title}
                            </button>
                          </p>
                          <div
                            className="collapse"
                            id={`part-${lIndex}-${pIndex}`}
                          >
                            {part.lectures.length > 0 ? (
                              part.lectures.map((lecture, i) => {
                                const isSummary =
                                  lecture.title === "Course Summary";
                                const is404 = lecture.url === "404";

                                if (is404) {
                                  return (
                                    <div
                                      key={i}
                                      className="card card-body mb-3 dep"
                                      style={{ opacity: 0.45 }}
                                    >
                                      <span className="text-muted small">
                                        {lecture.title} — Not available yet
                                      </span>
                                    </div>
                                  );
                                }

                                return (
                                  <LinkCard
                                    key={i}
                                    href={lecture.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={lecture.title}
                                    subtitle={lecture.description}
                                    icon={isSummary ? faFile : faCirclePlay}
                                    actionText={
                                      isSummary ? "Download" : "Watch"
                                    }
                                    actionIcon={
                                      isSummary ? faDownload : faYoutube
                                    }
                                    cardClassName="dep"
                                  />
                                );
                              })
                            ) : (
                              <OopsMessage />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
