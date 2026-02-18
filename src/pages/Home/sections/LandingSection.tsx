import DrugLanding from "../../../assets/images/drug-landing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

export default function LandingSection() {
  return (
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
                  * This is an Unofficial Website of the Faculty - موقع غير رسمي
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
  );
}
