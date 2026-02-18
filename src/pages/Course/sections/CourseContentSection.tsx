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

export default function CourseContentSection() {
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
                          Slides (;<span>404 - Not Found</span>)
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
                        <h2>Lecture (;1)</h2>
                        <p>Course outline &#38; Introduction to Pharmacology</p>
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
                          Slides (;<span>404 - Not Found</span>)
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
                        <h2>Lecture (;1)</h2>
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
                        <h2>Lecture (;2)</h2>
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
                        <h2>Lecture (;3)</h2>
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
                      (;<span>404 - Not Found</span>)
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
                      (;<span>Ahmed J. Skaik</span>) ** CNS Unit **
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
                      Course Description (;<span>404 - Not Found</span>)
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
                        (;PHPT)
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
  );
}
