import AboutImg from "../../../assets/images/about-1.jpg";

export default function AboutUsSection() {
  return (
    <div className="about pt-lg-5 pb-5">
      <div className="container pb-5">
        <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
          <div className="col-lg-6">
            <div className="txt text-center text-lg-start">
              <div className="main-title-3 mb-5 text-lg-start">
                <h2 className="mb-3">
                  About <span>Us</span>.
                </h2>
                <p className="mb-4">
                  About Faculty of Pharmacy - Alazhar University of Gaza
                </p>
              </div>
              <div className="text-start">
                <p className="reading-text">
                  Alazhar University had the Privilege of Establishing the First
                  Faculty of Pharmacy in Palestine in 1992. <br />
                  The Faculty of Pharmacy at Alazhar University of Gaza (AUG) is
                  Considered One of the Leading Pharmaceutical Education Centers
                  Dedicated to Prepare Pharmacy Professionals &#38; Scholars in
                  Palestine. <br />
                  The Faculty has the Most Qualified Staff in Pharmaceutical
                  Education, who Graduated from Prestigious Universities and
                  have their Scientific Activities Published in Reputable
                  Scientific Journals.
                  <br />
                  <br />
                  <span style={{ fontWeight: "600" }}>
                    The Faculty Awards a Bachelor's Degree in Pharmacy, <br />
                    In Addition to a Master's Degree in Pharmaceutical Sciences.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src={AboutImg} alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
