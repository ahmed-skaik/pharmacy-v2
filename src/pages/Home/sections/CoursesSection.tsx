import LevelImg from "../../../assets/images/level-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function CoursesSection() {
  return (
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
  );
}
