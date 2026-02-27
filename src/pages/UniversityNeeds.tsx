import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faDownload,
  // faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { uniNeeds } from "../data/UniversityNeedsData";

export default function UniversityNeeds() {
  return (
    <div className="content univ-needs">
      <div className="container">
        <div className="main-title-2">
          <h1 className="mb-3">
            University <span>Needs</span>.
          </h1>
          <p className="mb-4">
            University Needs for all Levels &#38; Faculties at Alazhar
            University of Gaza
          </p>
        </div>
        <div className="year mt-5 mb-5">
          {uniNeeds.map((need, nIndex) => (
            <div className="semester" key={nIndex}>
              <p>
                <button
                  className="d-flex btn pt-3 pb-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${nIndex}`}
                  aria-expanded="false"
                  aria-controls={`collapse-${nIndex}`}
                  aria-label="Arabic Language (1)"
                >
                  <div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <div>{need.title}</div>
                </button>
              </p>
              <div className="collapse" id={`collapse-${nIndex}`}>
                <div className="ms-4 ms-md-5 card-body mb-3">
                  <div className="semester">
                    <p>
                      <button
                        className="btn pt-3 pb-3"
                        style={{ width: "fit-content" }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseExample-${nIndex}11`}
                        aria-expanded="false"
                        aria-controls={`collapseExample-${nIndex}11`}
                        aria-label="Download the Book"
                      >
                        <FontAwesomeIcon icon={faAngleRight} /> Download the
                        Book
                      </button>
                    </p>
                    <div
                      className="collapse"
                      id={`collapseExample-${nIndex}11`}
                    >
                      {need.books.map((book, bIndex) => (
                        <div
                          className="card card-body mb-3 slides"
                          key={bIndex}
                        >
                          <h2>
                            Book
                            <span className="note">({book.title})</span>
                          </h2>
                          <p>The Recommended Reference Book</p>
                          <a href={book.url} target="_blank">
                            <FontAwesomeIcon icon={faDownload} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  {need.lecturers.map((lecturer, lIndex) => (
                    <div className="semester" key={lIndex}>
                      <p>
                        <button
                          className="btn pt-3 pb-3"
                          style={{ width: "fit-content" }}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${nIndex}-${lIndex}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${nIndex}-${lIndex}`}
                          aria-label="Lecturer: Nahed Al-qayed"
                        >
                          <FontAwesomeIcon icon={faAngleRight} />
                          <span className="name">Lecturer:</span>
                          <span>{lecturer.name}</span>
                        </button>
                      </p>
                      <div
                        className="collapse"
                        id={`collapse-${nIndex}-${lIndex}`}
                      >
                        <div className="ms-4 ms-md-5 card-body mb-3">
                          {lecturer.parts.map((part, pIndex) => (
                            <div className="semester" key={pIndex}>
                              <p>
                                <button
                                  className="btn pt-3 pb-3"
                                  style={{ width: "fit-content" }}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapse-${nIndex}-${lIndex}-${pIndex}`}
                                  aria-expanded="false"
                                  aria-controls={`collapse-${nIndex}-${lIndex}-${pIndex}`}
                                  aria-label={part.title}
                                >
                                  <FontAwesomeIcon icon={faAngleRight} />
                                  {part.title}
                                </button>
                              </p>
                              <div
                                className="collapse"
                                id={`collapse-${nIndex}-${lIndex}-${pIndex}`}
                              >
                                {part.lectures.map((lecture, i) => (
                                  <div className="card card-body mb-3" key={i}>
                                    <h2>{lecture.title}</h2>
                                    <p>{lecture.description}</p>
                                    <a href={lecture.url} target="_blank">
                                      <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
