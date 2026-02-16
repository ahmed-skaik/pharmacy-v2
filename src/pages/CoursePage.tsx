import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faBook,
  faBuildingColumns,
  faChalkboardUser,
  faCirclePlay,
  faDownload,
  faFile,
  faFileLines,
  faHouseLaptop,
  faInfo,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";

export default function CoursePage() {
  return (
    <div className="content">
      <div className="container">
        <div className="main-title-2">
          <h1 className="mb-3">
            Pharmacology <span>One</span>.
          </h1>
          <p className="mb-4">
            Introduction to Pharmacology, Pharmacodynamics || Drugs affecting
            the ANS & Drugs affecting the CNS
          </p>
        </div>
      </div>
      <div className="sub-container">
        <div className="spikes-seperator" style={{ zIndex: "0" }}></div>
        <div className="container">
          <div className="about">
            <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-md-around">
              <li>
                <FontAwesomeIcon icon={faChalkboardUser} fixedWidth />
                Lecturer:
                <span>Rasha Bseiso</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                Videos:
                <span>23</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBook} fixedWidth />
                Chapters: <span>13</span>
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
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-1"
                    aria-expanded="false"
                    aria-controls="collapseExample-1"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter I :<span>Introduction to Pharmacology</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-1">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/mAWHM7FxWFw"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>
                            Course outline &#38; Introduction to Pharmacology
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-2"
                    aria-expanded="false"
                    aria-controls="collapseExample-2"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter II :
                      <span>
                        Drug-Receptor Interactions &#38; Pharmacodynamics
                      </span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-2">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/TEoMIwq5TVs"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Pharmacodynamics pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/dO5Mv9e2wkE"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Pharmacodynamics pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/xdvU9i-lVO4"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;3&rpar;</h2>
                          <p>Pharmacodynamics pt.C</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-3"
                    aria-expanded="false"
                    aria-controls="collapseExample-3"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter III :
                      <span>
                        ANS
                        <span className="note">&lpar;as Physiology&rpar;</span>
                      </span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-3">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/RnfTVXaWWIQ"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>ANS pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/sWEpndjM3uc"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>ANS pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-4"
                    aria-expanded="false"
                    aria-controls="collapseExample-4"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter IV : <span>Cholinergic Agonist</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-4">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/wyRyWcomzkQ"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Cholinergic Agonist pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/zGlWQurStOg"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Cholinergic Agonist pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-5"
                    aria-expanded="false"
                    aria-controls="collapseExample-5"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter V : <span>Cholinergic Antagonist</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-5">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/qlpGAQt13eE"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Cholinergic Antagonist pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/viZnCHt3LYg"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Cholinergic Antagonist pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-6"
                    aria-expanded="false"
                    aria-controls="collapseExample-6"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter VI : <span>Adrenergic Agonist</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-6">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/dfJa6KvLo_c"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Adrenergic Agonist pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/mY4v7m3EsNE"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Adrenergic Agonist pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-7"
                    aria-expanded="false"
                    aria-controls="collapseExample-7"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter VII : <span>Adrenergic Antagonist</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-7">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/nvIrHkze9v0"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Adrenergic Antagonist pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/ubyib6NBpLk"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Adrenergic Antagonist pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-8"
                    aria-expanded="false"
                    aria-controls="collapseExample-8"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter VIII :
                      <span>Drugs for Neurodegenerative Diseases</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-8">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/OSDsB5c4mkg"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Drugs for Neurodegenerative Diseases pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/5O2Mc-EeC2M"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Drugs for Neurodegenerative Diseases pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-9"
                    aria-expanded="false"
                    aria-controls="collapseExample-9"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter IX : <span>Anxiolytic &#38; Hypnotic Drugs</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-9">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/PLXIzZbxr_8"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Anxiolytic &#38; Hypnotic Drugs pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/2M2RwYUeaZo"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Anxiolytic &#38; Hypnotic Drugs pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-10"
                    aria-expanded="false"
                    aria-controls="collapseExample-10"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter X : <span>Antidepressants</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-10">
                  <a
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>
                            Slides &lpar;<span>404 - Not Found</span>&rpar;
                          </p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span style={{ visibility: "hidden" }}>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/1LzXNtp5v_0"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Antidepressants pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/XmfpFOkzOMo"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Antidepressants pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-11"
                    aria-expanded="false"
                    aria-controls="collapseExample-11"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter XI : <span>Antipsychotic Drugs</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-11">
                  <p className="oops text-center mt-5 mb-5">
                    <span>Oops !</span> <br />
                    Seems like there is no data available :&lpar;
                  </p>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-12"
                    aria-expanded="false"
                    aria-controls="collapseExample-12"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter XII : <span>Drug for Epilepsy</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-12">
                  <a
                    href="../../../documents/level-3/semester-2/pharmacology-1/chapter-12-drugs-for-epilepsy.pdf"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>Slides</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/ioTTU7eWYpw"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Drug for Epilepsy pt.A</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/w3j-BN65G9w"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;2&rpar;</h2>
                          <p>Drug for Epilepsy pt.B</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="semester">
                <p>
                  <button
                    className="d-flex btn pt-3 pb-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample-13"
                    aria-expanded="false"
                    aria-controls="collapseExample-13"
                  >
                    <div>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div>
                      Chapter XIV : <span>Opioids</span>
                    </div>
                  </button>
                </p>
                <div className="collapse" id="collapseExample-13">
                  <a
                    href="../../../documents/level-3/semester-2/pharmacology-1/chapter-13-opioids.pdf"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 slides flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faFile} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Chapter Slides</h2>
                          <p>Slides</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://youtu.be/z-c-diJdghk"
                    className="a-parent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-body mb-3 flex-column flex-md-row justify-content-between">
                      <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                        <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                          <FontAwesomeIcon icon={faCirclePlay} fixedWidth />
                        </div>
                        <div className="txt">
                          <h2>Lecture &lpar;1&rpar;</h2>
                          <p>Opioids</p>
                        </div>
                      </div>
                      <div className="link align-self-center align-self-md-end">
                        <span>
                          Watch
                          <FontAwesomeIcon icon={faYoutube} fixedWidth />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
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
                  href="../../../404.html"
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
                        &lpar;<span>404 - Not Found</span>&rpar;
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
                  href="../../../documents/level-3/semester-2/pharmacology-1/summary/cns-pharmacology-summary-ahmed-skaik.pdf"
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
                        &lpar;<span>Ahmed J. Skaik</span>&rpar; ** CNS Unit **
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
                        You can check these out before approaching the actual
                        exam
                      </p>
                    </div>
                  </div>
                  <div className="table ps-md-3">
                    <ul className="list-unstyled m-0 ms-md-5">
                      <li className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">
                          Dr. Mahmoud Taleb, Final Exam of 2016
                        </p>
                        <a
                          href="../../../documents/level-3/semester-2/pharmacology-1/exams/dr-mohammed-taleb-final-2016.pdf"
                          className="d-flex align-items-center justify-content-between"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </a>
                      </li>
                      <li className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">
                          Dr. Mahmoud Taleb, Final Exam of 2017
                        </p>
                        <a
                          href="../../../documents/level-3/semester-2/pharmacology-1/exams/dr-mohammed-taleb-final-2017.pdf"
                          className="d-flex align-items-center justify-content-between"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                        </a>
                      </li>
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
                      <p className="mb-3 mb-md-0">
                        Course Description &lpar;<span>404 - Not Found</span>
                        &rpar;
                      </p>
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
                        <td colSpan={3}>Pharmacology I</td>
                      </tr>
                      <tr>
                        <th scope="row">Course Code:</th>
                        <td colSpan={3}>PHPT4310</td>
                      </tr>
                      <tr>
                        <th scope="row">Faculty:</th>
                        <td colSpan={3}>Faculty of Pharmacy</td>
                      </tr>
                      <tr>
                        <th scope="row">Department:</th>
                        <td colSpan={3}>
                          Department of Pharmacology &#38; Medical Sciences
                          &lpar;PHPT&rpar;
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Course Classification:</th>
                        <td colSpan={3}>Major Need</td>
                      </tr>
                      <tr>
                        <th scope="row">Course Level:</th>
                        <td colSpan={3}>
                          3<sup>rd</sup> Level
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">Total Credits:</th>
                        <td colSpan={3}>3 Credit Hours</td>
                      </tr>
                      <tr>
                        <th scope="row">Pre-requirements:</th>
                        <td className="must">
                          <abbr
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-delay="100"
                            title="Human Physiology I"
                          >
                            PHPT2306
                          </abbr>
                        </td>
                        <td>
                          <abbr
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-delay="100"
                            title="Human Physiology II"
                          >
                            PHPT3307
                          </abbr>
                        </td>
                        <td>
                          <abbr
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-delay="100"
                            title="Pathophysiology I"
                          >
                            PHPT3204
                          </abbr>
                        </td>
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
    </div>
  );
}
