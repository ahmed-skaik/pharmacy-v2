import { faFile, faFilePen, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PlansSection() {
  return (
    <div className="plans pt-5 pb-5 text-center" id="plans">
      <div className="container">
        <div className="main-title mt-5 mb-5">
          <h2 className="mb-3">
            Studying <span>Plan</span>.
          </h2>
          <p className="mb-4">
            Studying Plans for the Bachelor's Degree Program in Pharmacy at the
            Faculty of Pharmacy - Alazhar University of Gaza
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
  );
}
