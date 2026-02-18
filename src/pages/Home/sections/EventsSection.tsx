import EventOne from "../../../assets/images/event-01.jpg";
import EventTwo from "../../../assets/images/event-02.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDownload,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function EventsSection() {
  return (
    <div className="events pt-5 pb-5">
      <div className="container">
        <div className="main-title mt-5 mb-5">
          <h2 className="mb-3">
            Upcoming <span>Events</span> !
          </h2>
          <p className="mb-4">
            Upcoming Events Related to Faculty of Pharmacy - Alazhar University
            of Gaza
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
                  The Second International Conference on Pharmaceutical Sciences
                  (ICPS II)
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
  );
}
