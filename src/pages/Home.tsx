import DrugLanding from "../assets/images/drug-landing.jpg";
import LevelImg from "../assets/images/level-img.jpg";
import EventOne from "../assets/images/event-01.jpg";
import EventTwo from "../assets/images/event-02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faCalendar,
  faDownload,
  faFile,
  faFilePen,
  faFolder,
  faLink,
  faLocationDot,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      {/* <!-- landing start  --> */}
      <div className="landing pt-5 pb-5 d-flex d-md-bloc align-items-center mt-md-5 mt-lg-0">
        <div className="container pt-5 pb-5">
          <div className="row align-items-center justify-content-between gap-5 gap-lg-0">
            <div className="col-lg-8">
              <div className="txt">
                <h1>
                  <span className="univ">Alazhar University</span>,
                  <br />
                  <span className="faculty">Faculty of Pharmacy</span>.
                </h1>
                <p>
                  This website was made to help Pharmacy students at Alazhar
                  University of Gaza.
                  <br />
                  It includes all the E-Learning lectures, summaries, previous
                  exams & more !
                  <br />
                  Let me take you on tour in this
                  <a
                    href="https://youtu.be/L46THylwkHk"
                    target="_blank"
                    className="id-color hover"
                  >
                    Youtube Video
                  </a>
                  .
                  <br />
                  <span>
                    * This is an Unofficial Website of the Faculty - موقع غير
                    رسمي
                  </span>
                </p>
                <div className="links d-flex gap-3 flex-column flex-sm-row justify-content-center justify-content-lg-start">
                  <a href="#courses" className="btn main-btn">
                    Our Courses
                  </a>
                  <a
                    href="http://www.alazhar.edu.ps/arabic/fa/Pha.asp"
                    target="_blank"
                    className="btn main-btn revers"
                  >
                    Official Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img d-none d-md-block text-center">
                <img src={DrugLanding} alt="drug" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <a href="#courses" aria-label="arrow down">
          <FontAwesomeIcon icon={faAnglesDown} size="2x" />
        </a>
      </div>
      <div className="spikes-seperator"></div>
      {/* <!-- landing end  --> */}

      {/* <!-- stats start  --> */}
      <div className="stats pt-5 pb-5 text-center" id="stats">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="box pb-3 pt-3">
                <span className="h4">
                  <span className="number" data-goal="350">
                    0
                  </span>
                  <span className="plus">+</span>
                </span>
                <p>Active Students / W</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="box pb-3 pt-3">
                <span className="h4">
                  <span className="number" data-goal="950">
                    0
                  </span>
                  <span className="plus">+</span>
                </span>
                <p>visits / W</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="box pb-3 pt-3">
                <span className="h4">
                  <span className="number" data-goal="2">
                    0
                  </span>
                  <span>,</span>
                  <span className="number" data-goal="8">
                    0
                  </span>
                  <span>K</span>
                  <span className="plus">+</span>
                </span>
                <p>Views / W</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="box pb-3 pt-3">
                <span className="h4">
                  <span className="number" data-goal="200">
                    0
                  </span>
                  <span className="plus">+</span>
                </span>
                <p>File Downloads / W</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- stats end  --> */}

      {/* <!-- plans start  --> */}
      <div className="plans pt-5 pb-5 text-center" id="plans">
        <div className="container">
          <div className="main-title mt-5 mb-5">
            <h2 className="mb-3">
              Studying <span>Plan</span>.
            </h2>
            <p className="mb-4">
              Studying Plans for the Bachelor's Degree Program in Pharmacy at
              the Faculty of Pharmacy - Alazhar University of Gaza
            </p>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-md-6 col-lg-4 p-3 plan">
              <a
                href="documents/other/plans/plan-detailed.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box">
                  <FontAwesomeIcon icon={faFolder} size="4x" />
                  <h3>Detailed Plan</h3>
                  <div className="info">Download</div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 p-3 plan">
              <a
                href="documents/other/plans/plan-2012.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box">
                  <FontAwesomeIcon icon={faFile} size="4x" />
                  <h3>&le; 2019 Plan</h3>
                  <div className="info">Download</div>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 p-3 plan">
              <a
                href="documents/other/plans/plan-2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="box">
                  <FontAwesomeIcon icon={faFilePen} size="4x" />
                  <h3>2020 Plan</h3>
                  <div className="info">Download</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="spikes-seperator"></div>
      {/* <!-- plans end  --> */}

      {/* <!-- courses start  --> */}
      <div className="courses pt-5 pb-5" id="courses">
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
        <div className="container">
          <div className="main-title mt-5 mb-5">
            <h2 className="mb-3">
              E-learning <span>Courses</span>.
            </h2>
            <p className="mb-4">
              You can Reach all the E-learning Lectures for all Levels - Faculty
              of Pharmacy
            </p>
          </div>
          <div className="row mt-5 mb-5">
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index">
              <a href="pages/level-1.html">
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3>Level 1</h3>
                    <p>
                      1<sup>st</sup> Level Courses - Faculty of Pharmacy.
                      <span style={{ visibility: "hidden" }}>
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index">
              <a href="pages/level-2.html">
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3>Level 2</h3>
                    <p>
                      2<sup>nd</sup> Level Courses - Faculty of Pharmacy.
                      <span style={{ visibility: "hidden" }}>
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index">
              <a href="pages/level-3.html">
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3>Level 3</h3>
                    <p>
                      3<sup>rd</sup> Level Courses - Faculty of Pharmacy.
                      <span style={{ visibility: "hidden" }}>
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index">
              <a href="pages/level-4.html">
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3>Level 4</h3>
                    <p>
                      4<sup>th</sup> Level Courses - Faculty of Pharmacy.
                      <span style={{ visibility: "hidden" }}>
                        Lorem ipsum dolor sit amet consectetur.
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index">
              <a href="pages/level-5.html">
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3 className="graduation">Level 5</h3>
                    <p>
                      5<sup>th</sup> &#38; Final Level Courses - Faculty of
                      Pharmacy.
                      <span style={{ visibility: "hidden" }}>
                        Lorem ipsum dolor sit amet.
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index">
              <a href="pages/univ-needs.html">
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3>UNIV Needs</h3>
                    <p>
                      University Needs for all Levels &#38; Faculties at Alazhar
                      University of Gaza.
                      <span style={{ visibility: "hidden" }}>Lorem</span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- courses end  --> */}

      {/* <!-- events start --> */}
      <div className="events pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5">
            <h2 className="mb-3">
              Upcoming <span>Events</span> !
            </h2>
            <p className="mb-4">
              Upcoming Events Related to Faculty of Pharmacy - Alazhar
              University of Gaza
            </p>
          </div>
          <div className="card mb-3 mt-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4 text-center">
                <a
                  href="documents/other/exam-table/midterm-exams.pdf"
                  target="_blank"
                >
                  <img
                    src={EventTwo}
                    className="img-fluid rounded-start"
                    alt="event"
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-title h5">
                    Midterm Exams of the First Semester 2023/2024
                  </span>
                  <p className="card-text">
                    Midterm Exams of the First Semester 2023/2024
                  </p>
                  <hr />
                  <ul className="list-unstyled d-flex justify-content-evenl align-items-center flex-wrap">
                    <li>
                      <FontAwesomeIcon icon={faCalendar} fixedWidth />
                      November, 2023
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faDownload} fixedWidth />
                      <a
                        href="documents/other/exam-table/midterm-exams.pdf"
                        target="_blank"
                      >
                        Downlaod the Table
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                      Alazhar University of Gaza
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-5 mt-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4 text-center">
                <a
                  href="documents/other/exam-table/final-exams.pdf"
                  target="_blank"
                >
                  <img
                    src={EventTwo}
                    className="img-fluid rounded-start"
                    alt="event"
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-title h5">
                    Final Exams of the First Semester 2023/2024
                  </span>
                  <p className="card-text">
                    Final Exams of the First Semester 2023/2024
                  </p>
                  <hr />
                  <ul className="list-unstyled d-flex justify-content-evenl align-items-center flex-wrap">
                    <li>
                      <FontAwesomeIcon icon={faCalendar} fixedWidth />
                      January, 2024
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faDownload} fixedWidth />
                      <a
                        href="documents/other/exam-table/final-exams.pdf"
                        target="_blank"
                      >
                        Downlaod the Table
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                      Alazhar University of Gaza
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr className="d-none d-md-block" />
          <div className="sub-heading">
            <p>
              Older Events in the <span>Faculty</span>..
            </p>
          </div>
          <div className="card mb-3 mt-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4 text-center">
                <a
                  href="http://www.alazhar.edu.ps/icps2/index.asp"
                  target="_blank"
                >
                  <img
                    src={EventOne}
                    className="img-fluid rounded-start"
                    alt="event"
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-title h5">
                    The Second International Conference on Pharmaceutical
                    Sciences &lpar;ICPS II&rpar;
                  </span>
                  <p className="card-text">
                    Pharmaceutical Research Innovation for Optimized Therapy.
                  </p>
                  <hr />
                  <ul className="list-unstyled d-flex justify-content-evenl align-items-center flex-wrap">
                    <li>
                      <FontAwesomeIcon icon={faCalendar} fixedWidth />
                      September 4-5, 2022
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLink} fixedWidth />
                      <a
                        href="http://www.alazhar.edu.ps/icps2/index.asp"
                        target="_blank"
                      >
                        Official Website
                      </a>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                      Alazhar University of Gaza
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- events end --> */}
    </>
  );
}
