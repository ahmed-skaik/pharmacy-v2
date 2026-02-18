import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRightToBracket,
  faPrescription,
} from "@fortawesome/free-solid-svg-icons";

export default function LevelPage() {
  return (
    <div className="content">
      <div className="container">
        <div className="main-title-2">
          <h1 className="mb-3">
            Level <span>One</span>.
          </h1>
          <p className="mb-4">
            1<sup>st</sup> Level Courses - Faculty of Pharmacy
          </p>
        </div>
        <div className="year mt-5 pb-4">
          <div className="semester-1 semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-1"
                aria-expanded="false"
                aria-controls="collapseExample-1"
                aria-label="First Semester"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>First Semester</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-1">
              <a
                href="level-1/semester-1/cell-biology.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Cell Biology</h2>
                      <p>
                        <span className="id">PHPT1301</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="level-1/semester-1/computer-science-1.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Computer Science (I)</h2>
                      <p>
                        <span className="id">ITCS1301</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="level-1/semester-1/general-chemistry.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep ch-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>General Chemistry</h2>
                      <p>
                        <span className="id">PHCH1301</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="level-1/semester-1/mathematics.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Mathematics for Health Sciences</h2>
                      <p>
                        <span className="id">MATH1303</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="level-1/semester-1/terminology.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Medical &#38; Pharmaceutical Terminology</h2>
                      <p>
                        <span className="id">PHPT1105</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="semester-2 semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-2"
                aria-expanded="false"
                aria-controls="collapseExample-2"
                aria-label="Second Semester"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Second Semester</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-2">
              <a
                href="level-1/semester-2/analytical-chemistry-1.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep ch-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Analytical Chemistry (I)</h2>
                      <p>
                        <span className="id">PHCH1201</span> Major Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a href="level-1/semester-2/anatomy.html" className="a-parent">
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Human Anatomy &#38; Histology</h2>
                      <p>
                        <span className="id">PHPT1203</span> Major Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="level-1/semester-2/organic-chemistry-1.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep ch-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Organic Chemistry (I)</h2>
                      <p>
                        <span className="id">PHCH1303</span> Major Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="level-1/semester-2/physical-pharamcy-1.html"
                className="a-parent"
              >
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep tc-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Physical Pharmacy (I)</h2>
                      <p>
                        <span className="id">PHTC1201</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="labs semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-3"
                aria-expanded="false"
                aria-controls="collapseExample-3"
                aria-label="labs"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Labs</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-3">
              <span className="a-parent">
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep pt-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Cell Biology Lab</h2>
                      <p>
                        <span className="id">PHPT1102</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span style={{ visibility: "hidden" }}>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </span>
              <span className="a-parent">
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep ch-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>General Chemistry Lab</h2>
                      <p>
                        <span className="id">CHCH1103</span> College Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span style={{ visibility: "hidden" }}>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </span>
              <span className="a-parent">
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep ch-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Analytical Chemistry Lab</h2>
                      <p>
                        <span className="id">PHCH2106</span> Major Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span style={{ visibility: "hidden" }}>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </span>
              <span className="a-parent">
                <div className="card card-body mb-3 flex-column flex-md-row justify-content-between dep ch-dep">
                  <div className="box d-flex align-items-start flex-column flex-md-row text-center text-md-start ms-auto me-auto ms-md-0 me-md-0">
                    <div className="img ms-auto me-auto ms-md-0 me-md-3 mb-3 mb-md-0">
                      <FontAwesomeIcon icon={faPrescription} fixedWidth />
                    </div>
                    <div className="txt">
                      <h2>Organic Chemistry Lab</h2>
                      <p>
                        <span className="id">PHCH2107</span> Major Need
                      </p>
                    </div>
                  </div>
                  <div className="link align-self-center align-self-md-end">
                    <span style={{ visibility: "hidden" }}>
                      Visit
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        fixedWidth
                      />
                    </span>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
