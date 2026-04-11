import QrCodeImg from "../../../assets/images/qr-code.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TECH_STACK_DATA } from "../../../data/AboutData";

export default function AboutWebsiteSection() {
  return (
    <div className="about pharmacy pt-lg-5 pb-5 qr-code" id="website">
      <div className="container pt-5 pb-5">
        <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
          <div className="col-lg-6">
            <div className="txt text-center text-lg-start">
              <div className="main-title-3 mb-5 text-lg-start">
                <h2 className="mb-3">
                  This <span>Website</span>.
                </h2>
                <p className="mb-4">https://alazharpharmacy.com/</p>
              </div>
              <div className="text-start">
                <div className="reading-text">
                  This website was made to help Pharmacy students at Alazhar
                  University of Gaza, it includes all the E-Learning lectures,
                  summaries, previous exams & more!
                  <br />
                  Languages, Skills &#38; Services used:
                  <div className="p-0 m-0">
                    <ul className="list-revert">
                      {TECH_STACK_DATA.map((item) => (
                        <li key={item.label}>
                          {item.type === "fa" ? (
                            <FontAwesomeIcon
                              icon={item.icon}
                              style={{
                                color: item.color,
                                backgroundColor: item.bgColor,
                              }}
                              fixedWidth
                            />
                          ) : (
                            <img
                              src={item.src}
                              alt={item.alt}
                              loading="lazy"
                              style={{
                                width: "1.0em",
                                height: "1.0em",
                                verticalAlign: "-0.125em",
                                marginRight: "8px",
                              }}
                            />
                          )}{" "}
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                  If you want to know more about the website, you can checkout
                  this{" "}
                  <a
                    href="https://youtu.be/L46THylwkHk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="id-color hover wiggle"
                  >
                    Youtube Video
                  </a>
                  .
                  <br />
                  <br />
                  <span className="id-bold">
                    The website was made by (2019 - 2024) Pharmacy Batch
                    Students:
                    <br />- <span className="id-color">
                      Ahmed J. Skaik
                    </span>{" "}
                    (Idea &#38; Coding)
                    <br />- <span className="id-color">
                      Ahmed Y. Shaheen
                    </span>{" "}
                    (Data Provider)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img website">
              <img
                src={QrCodeImg}
                alt="qr-code"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
