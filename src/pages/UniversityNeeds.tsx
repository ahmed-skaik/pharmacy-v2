import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faCirclePlay,
  faDownload,
  faFile,
  // faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { uniNeeds } from "../data/UniversityNeedsData";
import DotsDecoration from "../components/DotsDecoration";
import Seo from "../meta/Seo";

export default function UniversityNeeds() {
  return (
    <>
      <Seo
        title="University Needs"
        description="University Needs for all Levels &#38; Faculties at Alazhar University of Gaza"
      />
      <div className="content univ-needs position-relative">
        <DotsDecoration />
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
                          <a
                            href={`${book.url}`}
                            className="a-parent"
                            key={bIndex}
                          >
                            <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                              <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                                <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                                  <FontAwesomeIcon icon={faFile} fixedWidth />
                                </div>
                                <div className="txt">
                                  <h2>{book.title}</h2>
                                  <p>
                                    <span className="id"></span> The Recommended
                                    Reference Book
                                  </p>
                                </div>
                              </div>
                              <div className="link align-self-center align-self-md-end">
                                <span>
                                  Download
                                  <FontAwesomeIcon
                                    icon={faDownload}
                                    fixedWidth
                                  />
                                </span>
                              </div>
                            </div>
                          </a>
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
                                    <a
                                      href={`${lecture.url}`}
                                      className="a-parent"
                                      key={i}
                                    >
                                      <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                                        <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                                          <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                                            <FontAwesomeIcon
                                              icon={faCirclePlay}
                                              fixedWidth
                                            />
                                          </div>
                                          <div className="txt">
                                            <h2>{lecture.title}</h2>
                                            <p>
                                              <span className="id"></span>{" "}
                                              {lecture.description}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="link align-self-center align-self-md-end">
                                          <span>
                                            Watch
                                            <FontAwesomeIcon
                                              icon={faYoutube}
                                              fixedWidth
                                            />
                                          </span>
                                        </div>
                                      </div>
                                    </a>
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
    </>
  );
}
