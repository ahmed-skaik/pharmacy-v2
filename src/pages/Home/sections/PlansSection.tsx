import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { plansData } from "../../../data/PlansData";

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
          {plansData.map((plan) => (
            <div className="col-md-6 col-lg-4 p-3 plan" key={plan.id}>
              <a href={plan.pdfPath} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <FontAwesomeIcon icon={plan.icon} size="4x" />
                  <h3>{plan.title}</h3>
                  <div className="info">Download</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
