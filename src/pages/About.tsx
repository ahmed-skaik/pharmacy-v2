import QrCodeImg from "../assets/images/qr-code.png";
import AboutImg from "../assets/images/about-1.jpg";
import AhmedSkaik from "../assets/images/ahmed-skaik.jpg";
import AhmedYounis from "../assets/images/ahmed-younis.jpeg";
import viteLogo from "../../public/vite.svg";
import NetlifyLogo from "../assets/images/netlify-logo.svg";
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

export default function About() {
  return (
    <>
      {/* <!-- about start  --> */}
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
                <div className="content text-start">
                  <p className="reading-text">
                    Alazhar University had the Privilege of Establishing the
                    First Faculty of Pharmacy in Palestine in 1992. <br />
                    The Faculty of Pharmacy at Alazhar University of Gaza
                    &lpar;AUG&rpar; is Considered One of the Leading
                    Pharmaceutical Education Centers Dedicated to Prepare
                    Pharmacy Professionals &#38; Scholars in Palestine. <br />
                    The Faculty has the Most Qualified Staff in Pharmaceutical
                    Education, who Graduated from Prestigious Universities and
                    have their Scientific Activities Published in Reputable
                    Scientific Journals.
                    <br />
                    <br />
                    <span style={{ fontWeight: "600" }}>
                      The Faculty Awards a Bachelor's Degree in Pharmacy, <br />
                      In Addition to a Master's Degree in Pharmaceutical
                      Sciences.
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
      <div className="spikes-seperator"></div>
      {/* <!-- about end  --> */}

      {/* <!-- departments start  --> */}
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
                <div className="content text-start">
                  <div className="reading-text">
                    Faculty of Pharmacy - Alazhar University of Gaza Consists of
                    4 Different Academic Departments as Follows:
                    <ul>
                      <li>
                        Pharmacology &#38; Medical Sciences
                        <span>&lpar;PHPT&rpar;</span>
                      </li>
                      <li>
                        Pharmaceutics &#38; Industrial Pharmacy
                        <span>&lpar;PHTC&rpar;</span>
                      </li>
                      <li>
                        <del>Chemistry &#38; Pharmaceutical Chemistry</del>
                        <span>&lpar;PHCH&rpar;</span>
                      </li>
                      <li>
                        <del>Pharmacognosy &#38; Pharmaceutical Botany</del>
                        <span>&lpar;PHCG&rpar;</span>
                      </li>
                    </ul>
                    In recent years, the Department of Pharmacognosy &#38;
                    Pharmaceutical Botany was Merged with the Department of
                    Chemistry &#38; Pharmaceutical Chemistry to Form the
                    Department of &lpar;
                    <span style={{ color: "#3434ff", fontWeight: "600" }}>
                      Pharmaceutical Chemistry &#38; Pharmacognosy
                    </span>
                    &rpar;.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- departments end  --> */}

      {/* <!-- about the website start  --> */}
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
                <div className="content text-start">
                  <div className="reading-text">
                    This website was made to help Pharmacy students at Alazhar
                    University of Gaza, it includes all the E-Learning lectures,
                    summaries, previous exams & more!
                    <br />
                    Languages, Skills &#38; Services used:
                    <ul className="p-0 m-0 list-unstyled d-flex flex-wrap">
                      <li>
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
                        </ul>
                      </li>
                      <li>
                        <ul className="list-revert">
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
                        </ul>
                      </li>
                      <li>
                        <ul className="list-revert">
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
                        </ul>
                      </li>
                      <li>
                        <ul className="list-revert">
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
                          {/* <!-- <li>- <i className="fa-brands fa-github fa-fw" style={{color: "#171515"}}></i> <a href="https://github.com/ahmed-skaik" target="_blank" className="id-color hover" rel="noopener noreferrer">Github</a></li> --> */}
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
                            <abbr
                              className="d-inline d-sm-none"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-delay="100"
                              title="Fontawesome"
                            >
                              Fontawe
                            </abbr>
                            <span className="d-none d-sm-inline">
                              Fontawesome
                            </span>
                          </li>
                        </ul>
                      </li>
                    </ul>
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
                      The website was made by &lpar;2019 - 2024&rpar; Pharmacy
                      Batch Students:
                      <br />- <span className="id-color">
                        Ahmed J. Skaik
                      </span>{" "}
                      &lpar;Idea &#38; Coding&rpar;
                      <br />- <span className="id-color">
                        Ahmed Y. Shaheen
                      </span>{" "}
                      &lpar;Data Provider&rpar;
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
      <div className="spikes-seperator"></div>
      {/* <!-- about the website end  --> */}

      {/* <!-- founders start  --> */}
      <div className="about creators pt-5 pb-5" id="founders">
        <div className="container pt-5 pb-5">
          <div className="row align-items-start justify-content-between gap-5 gap-lg-0">
            <div className="col-lg-6">
              <div className="box text-center mt-5">
                <div className="box-wrap code">
                  <img src={AhmedSkaik} alt="Ahmed" className="img-fluid" />
                  <h3 className="mt-3 mb-2 mb-0">Ahmed J. Skaik</h3>
                  <span className="mb-2 d-block">- Idea &#38; Coding -</span>
                  <blockquote className="cutoff-text mb-4 text-start english">
                    During the summer holiday of the year 2022, Ahmed Younis and
                    I worked on this project as a team, I was the Developer of
                    the project, and Ahmed was the one who provided me with all
                    the data needed.
                    <br />
                    Our goal from this project is to make it easier for our
                    mates at the faculty to reach the available courses-related
                    data, to know more about the faculty and hopefully
                    participate in making the five years Pharmacy journey
                    somehow more fun for you.
                    <br />
                    We hope you mates, find the website helpful &#38; we hope we
                    have achieved what we were trying to achieve from this
                    project.
                    <br />
                    <br />
                    <span className="important">
                      * I want to mention that this is a non-profit website; we
                      don't earn a single dollar from it.
                    </span>
                  </blockquote>
                  <input
                    className="expand-btn"
                    type="checkbox"
                    aria-label="read more"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box text-center mt-5">
                <div className="box-wrap data">
                  <img src={AhmedYounis} alt="Ahmed" className="img-fluid" />
                  <h3 className="mt-3 mb-2 mb-0">Ahmed Y. Shaheen</h3>
                  <span className="mb-2 d-block">- Data Provider -</span>
                  <blockquote
                    className="cutoff-text mb-4 text-end arabic"
                    dir="rtl"
                  >
                    الحمد لله على إحسانه، والشكر له على توفيقه وامتنانه، يا رب
                    لك الحمد حمدًا طيبًا كثيًرا مباركًا.
                    <br />
                    في هذا اليوم وبفضل الله نعلن لكم تدشين الموقع الصيدلاني
                    الأول من نوعه بما يخدم طلبة الكلية - جميع المستويات - بكل ما
                    يحتاجه طالب الكلية خلال فترة الدراسة من محاضرات، ملفات،
                    مراجع، ملخصات، خطط دراسية، نماذج، حول الكلية.
                    <br />
                    جهود حثيثة بُذلت من أجل إنجاح هذا المشروع تحت إشراف وتنفيذ
                    المبرمج الصيدلاني/ أحمد جمال سكيك وبمساعدة مُزود بيانات
                    الموقع/ أحمد يونس شاهين ( طلبة الكلية - المستوى الخامس ).
                    <br />
                    نسأل الله أن يكون هذا العمل خالصًا لوجهه الكريم وأن تعم
                    الفائدة بين جموع الطلبة.
                    <br />
                    نشكر طاقم الكلية لحسن تعاونهم من عميد وهيئة أكاديمية
                    وإدارية، ونشكر لكم جميعًا دعمكم الصادق.
                    <br />
                    احفظوها عنا عسى القلوب بها تبصر.
                    <br />
                    <a
                      href="https://www.youtube.com/watch?v=L46THylwkHk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      فيديو تعريفي بالموقع
                    </a>
                    .
                    <br />
                    <span
                      className="text-start d-block"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-delay="100"
                      title="Website Announcement Date"
                    >
                      Oct 27, 2022
                    </span>
                  </blockquote>
                  <input
                    className="expand-btn"
                    type="checkbox"
                    aria-label="read more"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- founders end  --> */}
    </>
  );
}
