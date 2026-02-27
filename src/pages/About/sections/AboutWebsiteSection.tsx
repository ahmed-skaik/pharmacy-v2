import QrCodeImg from "../../../assets/images/qr-code.png";
import viteLogo from "../../../assets/images/vite.svg";
import NetlifyLogo from "../../../assets/images/netlify-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faReact,
  faSass,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";

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
                      <li>
                        <FontAwesomeIcon
                          icon={faHtml5}
                          style={{ color: "#e34c26" }}
                          fixedWidth
                        />
                        HTML 5
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faCss3}
                          style={{ color: "#264de4" }}
                          fixedWidth
                        />
                        CSS 3
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faSass}
                          style={{ color: "#cc6699" }}
                          fixedWidth
                        />
                        SASS
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faBootstrap}
                          style={{ color: "#7c69ef" }}
                          fixedWidth
                        />
                        Bootstrap 5
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faJs}
                          style={{
                            color: "#f0db4f",
                            backgroundColor: "#323330",
                          }}
                          fixedWidth
                        />
                        Javascript
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faReact}
                          style={{
                            color: "#61DBFB",
                          }}
                          fixedWidth
                        />
                        Reactjs
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faTypescript}
                          style={{ color: "#3178c6" }}
                          fixedWidth
                        />
                        Typescript
                      </li>
                      <li>
                        <img
                          src={viteLogo}
                          alt="vite-logo"
                          style={{
                            width: "1.0em",
                            height: "1.0em",
                            verticalAlign: "-0.125em",
                            marginRight: "8px",
                          }}
                        />
                        Vite
                      </li>
                      <li>
                        <img
                          src={NetlifyLogo}
                          alt="vite-logo"
                          style={{
                            width: "1.0em",
                            height: "1.0em",
                            verticalAlign: "-0.125em",
                            marginRight: "8px",
                          }}
                        />
                        Netlify
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faGitAlt}
                          style={{
                            color: "#f1502f",
                          }}
                          fixedWidth
                        />
                        Git
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{
                            color: "#171515",
                          }}
                          fixedWidth
                        />
                        Github
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faFontAwesome}
                          style={{ color: "#228ae6" }}
                          fixedWidth
                        />
                        Fontawesome
                      </li>
                    </ul>
                  </div>
                  If you want to know more about the website, you can checkout
                  this
                  <a
                    href="https://youtu.be/L46THylwkHk"
                    target="_blank"
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
              <img src={QrCodeImg} alt="about" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
