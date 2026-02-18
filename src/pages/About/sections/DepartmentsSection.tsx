import AboutImg from "../../../assets/images/about-1.jpg";

export default function DepartmentsSection() {
  return (
    <div className="departments pt-lg-5 pb-5">
      <div className="container pt-5 pb-5">
        <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
          <div className="col-lg-6 img-flex">
            <div className="img">
              <img src={AboutImg} alt="about" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6 txt-flex">
            <div className="txt text-center text-lg-start">
              <div className="main-title-3 mt-5 mt-lg-4 mb-5 text-lg-start">
                <h2 className="mb-3">
                  Departments<span>.</span>
                </h2>
                <p className="mb-4">
                  Academic Departments at Faculty of Pharmacy - Alazhar
                  University of Gaza
                </p>
              </div>
              <div className="text-start">
                <div className="reading-text">
                  Faculty of Pharmacy - Alazhar University of Gaza Consists of 4
                  Different Academic Departments as Follows:
                  <ul>
                    <li>
                      Pharmacology &#38; Medical Sciences
                      <span>(PHPT)</span>
                    </li>
                    <li>
                      Pharmaceutics &#38; Industrial Pharmacy
                      <span>(PHTC)</span>
                    </li>
                    <li>
                      <del>Chemistry &#38; Pharmaceutical Chemistry</del>
                      <span>(PHCH)</span>
                    </li>
                    <li>
                      <del>Pharmacognosy &#38; Pharmaceutical Botany</del>
                      <span>(PHCG)</span>
                    </li>
                  </ul>
                  In recent years, the Department of Pharmacognosy &#38;
                  Pharmaceutical Botany was Merged with the Department of
                  Chemistry &#38; Pharmaceutical Chemistry to Form the
                  Department of (
                  <span style={{ color: "#3434ff", fontWeight: "600" }}>
                    Pharmaceutical Chemistry &#38; Pharmacognosy
                  </span>
                  ).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
