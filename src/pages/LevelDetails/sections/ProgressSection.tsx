import {
  faBuildingColumns,
  faCertificate,
  faUserGraduate,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";
import GraducationImg from "../../../assets/images/graduation-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProgressSection() {
  return (
    <div className="my-progress pt-5 pb-5" id="progress">
      <div className="container">
        <div className="main-title left mt-5 mb-5 text-center text-lg-start">
          <h2 className="mb-3">
            2024 <span>Pharmacists</span> !
          </h2>
          <p className="mb-4">
            Progress of the (2019 - 2024) Pharmacy Batch - Alazhar University of
            Gaza
          </p>
        </div>
        <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="img text-center ms-lg-2 me-lg-5">
              <img src={GraducationImg} alt="gradution" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress-stat">
              <div className="prog-holder">
                <h4>
                  <FontAwesomeIcon icon={faVialVirus} fixedWidth />
                  Labs (21/21)
                </h4>
                <div className="prog">
                  <span
                    style={{ width: 0 }}
                    data-prog="100%"
                    data-width="100%"
                  ></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>
                  <FontAwesomeIcon icon={faBuildingColumns} fixedWidth /> UNIV
                  Needs (12/12)
                </h4>
                <div className="prog">
                  <span
                    style={{ width: 0 }}
                    data-prog="100%"
                    data-width="100%"
                  ></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4>
                  <FontAwesomeIcon icon={faUserGraduate} fixedWidth />
                  Graduation (10/10) Semesters
                </h4>
                <div className="prog">
                  <span
                    style={{ width: 0 }}
                    data-prog="100%"
                    data-width="100%"
                  ></span>
                </div>
              </div>
              <div className="prog-holder">
                <h4 className="eng">
                  <i className="fa-solid  fa-fw"></i>
                  <FontAwesomeIcon icon={faCertificate} fixedWidth />
                  Certificate
                </h4>
                <div className="prog">
                  <span
                    style={{ width: 0 }}
                    data-prog="100%"
                    data-width="100%"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
