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
import LinkCard from "../components/CollapseCard";
import SectionHeading from "../components/SectionHeading";

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
          <SectionHeading
            titleStart="University"
            titleHighlight="Needs"
            description="University Needs for all Levels & Faculties at Alazhar University of Gaza"
          />
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
                          <LinkCard
                            key={bIndex}
                            href={book.url}
                            title={book.title}
                            subtitle="The Recommended Reference Book"
                            icon={faFile}
                            actionText="Download"
                            actionIcon={faDownload}
                            cardClassName="dep pt-dep"
                          />
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
                                    <LinkCard
                                      key={i}
                                      href={lecture.url}
                                      title={lecture.title}
                                      subtitle={
                                        <>
                                          <span className="id"></span>{" "}
                                          {lecture.description}
                                        </>
                                      }
                                      icon={faCirclePlay}
                                      actionText="Watch"
                                      actionIcon={faYoutube}
                                      cardClassName="dep pt-dep"
                                    />
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
