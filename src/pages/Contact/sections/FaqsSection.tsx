import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function FaqsSection() {
  return (
    <div className="faq pt-5 pb-5">
      <div className="container">
        <div className="main-title mt-5 mb-5">
          <h2 className="mb-3" style={{ fontSize: "60px" }}>
            FA<span>Qs</span>
          </h2>
          <p className="mb-4">
            Frequently Asked Questions about Faculty of Pharmacy - Alazhar
            University of Gaza
          </p>
        </div>
        <div className="questions mt-5 mb-5">
          <div className="question">
            <p>
              <button
                className="btn w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-1"
                aria-expanded="false"
                aria-controls="collapseExample-1"
              >
                <h3>
                  What Does it take to Graduate from the Bachelor's Program in
                  Pharmacy from the Faculty of Pharmacy - Alazhar University of
                  Gaza ?
                </h3>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </button>
            </p>
            <div className="collapse" id="collapseExample-1">
              <div className="card card-body">
                <p>
                  To Graduate From the Faculty of Pharmacy - Alazhar University
                  of Gaza, You need to Pass 162 Credit Hours in 5 Years (10
                  Semesters) that include :
                </p>
                <ul>
                  <li className="mb-2">
                    123 Credit Hours of Theoretical Major &#38; College Needs
                    (Including 8 Optional Credit Hours)
                  </li>
                  {/* <!-- <li className="mb-2">8 Credit Hours of Theoretical Optional Major Needs (Graduation Year)</li> --> */}
                  <li className="mb-2">
                    19 Credit Hours of Practical Laboratory Courses
                  </li>
                  <li className="mb-2">
                    2 Credit Hours of
                    <span>
                      <a href="level-4/summer/pharmacy-training.html">
                        Pharmacy Training
                      </a>
                    </span>
                    (4<sup>th</sup> Level Summer Semester)
                  </li>
                  <li className="mb-2">
                    18 Credit Hours of University Needs (Including 2 Optional
                    Credit Hours)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="question">
            <p>
              <button
                className="btn w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-3"
                aria-expanded="false"
                aria-controls="collapseExample-3"
              >
                <h3>
                  How much Does it Cost to Study at the Faculty of Pharmacy -
                  Alazhar University of Gaza ?
                </h3>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </button>
            </p>
            <div className="collapse" id="collapseExample-3">
              <div className="card card-body">
                <p>
                  As a Pharmacy Student Studying at Alazhar University of Gaza,
                  you need to pay 36 JD Per Credit Hour, and you also need to
                  pay 37 JD each semester (not including Summers) as University
                  Services.
                </p>
              </div>
            </div>
          </div>
          <div className="question">
            <p>
              <button
                className="btn w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-2"
                aria-expanded="false"
                aria-controls="collapseExample-2"
              >
                <h3>What Does a Course Code (ex: PHPT3207) Mean ?</h3>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </button>
            </p>
            <div className="collapse" id="collapseExample-2">
              <div className="card card-body">
                <p>
                  A Course Code ex: the Code of
                  <span>
                    <a href="level-3/semester-2/pathophysiology-2.html">
                      Pathophysiology II
                    </a>
                  </span>
                  Course (<span style={{ color: "#08082c" }}>PHPT</span>
                  <span style={{ color: "#3434ff" }}>3207</span>) Gives
                  Information About the Course.
                </p>
                <ul>
                  <li className="mb-2">
                    The First Part (<span style={{ color: "#08082c" }}>PH</span>
                    ) Refers to the faculty (Faculty of Pharmacy).
                  </li>
                  <li className="mb-2">
                    The Second Part (
                    <span style={{ color: "#08082c" }}>PT</span>) Refers to the
                    Department (Department of Pharmacology &#38; Medical
                    Sciences).
                  </li>
                  <li className="mb-2">
                    The First Number (
                    <span style={{ color: "#3434ff" }}>3</span>) Refers to the
                    Level, which is the 3<sup>rd</sup>
                    Level.
                  </li>
                  <li className="mb-2">
                    The Second Number (
                    <span style={{ color: "#3434ff" }}>2</span>) Refers to the
                    Course Credit Hours.
                  </li>
                  <li className="mb-2">
                    The Last two Numbers (
                    <span style={{ color: "#3434ff" }}>07</span>) Refer to the
                    Course Arrangement in The Department.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="question">
            <p>
              <button
                className="btn w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-5"
                aria-expanded="false"
                aria-controls="collapseExample-5"
              >
                <h3>
                  How can I Graduate with the 1<sup>st</sup> or 2<sup>nd</sup>
                  Degree of Honer ?
                </h3>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </button>
            </p>
            <div className="collapse" id="collapseExample-5">
              <div className="card card-body">
                <ul>
                  <li className="mb-3">
                    To Graduate from the Faculty of Pharmacy - Alazhar
                    University of Gaza with the
                    <span>First Degree of Honer</span>, Your
                    <abbr
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="100"
                      title="Cumulative Grade Point Average"
                    >
                      CGPA
                    </abbr>
                    Should be at least 90%, and neither of your
                    <abbr
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="100"
                      title="Grade Point Average"
                    >
                      GPA
                    </abbr>
                    s in any Semester (including Summers) is less than 90%.
                  </li>
                  <li className="mb-3">
                    To Graduate from the Faculty of Pharmacy - Alazhar
                    University of Gaza with the
                    <span>Second Degree of Honer</span>, Your
                    <abbr
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="100"
                      title="Cumulative Grade Point Average"
                    >
                      CGPA
                    </abbr>
                    Should be at least 80%, and neither of your
                    <abbr
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="100"
                      title="Grade Point Average"
                    >
                      GPA
                    </abbr>
                    s in any Semester (including Summers) is less than 80%.
                  </li>
                  <li className="mb-3">
                    If you do any of the Following During your Studying Years,
                    You will Lose the Right to Get either of the Degrees :
                    <ul>
                      <li className="mt-1 mb-1">
                        If you Failed any Course (For any Reaseon)
                      </li>
                      <li className="mt-1 mb-1">
                        If you Improved (Repeated) any Course
                      </li>
                      <li className="mt-1 mb-1">
                        If you Withdrew from any Course
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="question">
            <p>
              <button
                className="btn w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-4"
                aria-expanded="false"
                aria-controls="collapseExample-4"
              >
                <h3>What about the Optional Courses ?</h3>
                <FontAwesomeIcon icon={faAngleRight} size="xl" />
              </button>
            </p>
            <div className="collapse" id="collapseExample-4">
              <div className="card card-body">
                <p>
                  There are 3 Optional Courses of the University Needs
                  (Environmental Sciences, Palestinian Studies &#38; Human
                  Rights), as a Pharmacy student, you only need to pass one of
                  the three courses (2 Credit Hours).
                </p>
                <p>
                  During the 5<sup>th</sup> &#38; Final Year at the Faculty,
                  Students need to pass 4 Optional Courses (8 Credit Hours){" "}
                  <br />
                  (Usually, the Deanship Determine What Courses a Batch Will
                  Study).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
