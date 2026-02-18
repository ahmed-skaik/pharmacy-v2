import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faDownload,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

export default function UniversityNeeds() {
  return (
    <div className="content univ-needs">
      <div className="container">
        <div className="main-title-2">
          <h1 className="mb-3">
            University <span>Needs</span>.
          </h1>
          <p className="mb-4">
            University Needs for all Levels &#38; Faculties at Alazhar
            University of Gaza
          </p>
        </div>
        <div className="year mt-5 mb-5">
          <div className="semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-1"
                aria-expanded="false"
                aria-controls="collapseExample-1"
                aria-label="Arabic Language (1)"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Arabic Language (1)</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-1">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0100"
                      aria-expanded="false"
                      aria-controls="collapseExample-0100"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0100">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book
                        <span className="note">(الأدب والبلاغة)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/arabic-language-1/ادب-بلاغة.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(النحو)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/arabic-language-1/نحو.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0101"
                      aria-expanded="false"
                      aria-controls="collapseExample-0101"
                      aria-label="Lecturer: Nahed Al-qayed"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Nahed Al-qayed</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0101">
                    <div className="ms-4 ms-md-5 card-body mb-3">
                      <div className="semester">
                        <p>
                          <button
                            className="btn pt-3 pb-3"
                            style={{ width: "fit-content" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample-1010101"
                            aria-expanded="false"
                            aria-controls="collapseExample-1010101"
                            aria-label="Part I : (الأدب والبلاغة)"
                          >
                            <FontAwesomeIcon icon={faAngleRight} /> Part I :
                            (الأدب والبلاغة)
                          </button>
                        </p>
                        <div className="collapse" id="collapseExample-1010101">
                          <div className="card card-body mb-3">
                            <h2>Lecture (01)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/HxVKkk6bf1M"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (02)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/bWDo8EbLS3E"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (03)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/bfN3rDAK3b8"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (04)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/7TwJXkvYAtE"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (05)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/-C66b8jEEhE"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (06)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/nww3YWDZU1U"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (07)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/VRd4oJ9G5L4"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (08)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/OHl1fMxBNp4"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (09)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/JU_FrZVk9mQ"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (10)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/qld9nWc0p-0"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (11)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/VMMMIDgDRLk"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (12)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/xqQaKuUhC-M"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="semester">
                        <p>
                          <button
                            className="btn pt-3 pb-3"
                            style={{ width: "fit-content" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseExample-101002"
                            aria-expanded="false"
                            aria-controls="collapseExample-101002"
                            aria-label="Part II : (النحو)"
                          >
                            <FontAwesomeIcon icon={faAngleRight} /> Part II :
                            (النحو)
                          </button>
                        </p>
                        <div className="collapse" id="collapseExample-101002">
                          <div className="card card-body mb-3">
                            <h2>Lecture (01)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/xmZ5MUABBjA"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (02)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/Wx45WwVxmEA"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (03)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/9qO_qpMBnyg"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (04)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/7-cOHJRNqCw"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (05)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/q5uZxQmkn7k"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (06)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/eI9fmZMEmq8"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                          <div className="card card-body mb-3">
                            <h2>Lecture (07)</h2>
                            <p>Lecture Title</p>
                            <a
                              href="https://youtu.be/eVjxyQL4n5I"
                              target="_blank"
                            >
                              <FontAwesomeIcon icon={faYoutube} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-2"
                aria-expanded="false"
                aria-controls="collapseExample-2"
                aria-label="English Language (1)"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>English Language (1)</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-2">
              <div className="ms-4 ms-md-5 card-body mb-3 slides">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0200"
                      aria-expanded="false"
                      aria-controls="collapseExample-0200"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0200">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(All Lecturers)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/english-language-1/headway-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0201"
                      aria-expanded="false"
                      aria-controls="collapseExample-0201"
                      aria-label="Lecturer: Not Available"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Not Available</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0201">
                    <p className="oops text-center mt-5 mb-5">
                      <span>Oops !</span> <br />
                      Seems like there is no data available :(
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-3"
                aria-expanded="false"
                aria-controls="collapseExample-3"
                aria-label="Holy Quran (1)"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Holy Quran (1)</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-3">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0300"
                      aria-expanded="false"
                      aria-controls="collapseExample-0300"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0300">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(All Lecturers)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/holy-quran-1/holy-quran-1-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0301"
                      aria-expanded="false"
                      aria-controls="collapseExample-0301"
                      aria-label="Lecturer: Ibrahim Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Ibrahim Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0301">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=LN_WLR5Io9U&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=1"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=BlKLyx4_R00&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=QcLx2A6xub8&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=3"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=yRRF20wfuVk&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=6JzVvBNLB0U&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=5"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=0wPFvfX4Ag8&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=qRqJ7wOhaPs&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=7"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=vS3Cy2QBIzE&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=8"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=PgmcXb3qLiI&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=9"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=TcS3QmF_YvY&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=10"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ueooOJRKJPk&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=11"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=GS-tb1u27mo&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=12"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ArfPX9RIBc0&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=13"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=KztuqBv-G2o&list=PLTEKWSPgUGCBlvFsoVAhqoi58UPH0TcV0&index=14"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0302"
                      aria-expanded="false"
                      aria-controls="collapseExample-0302"
                      aria-label="Lecturer: Belal Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Belal Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0302">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/buUigfAsUeY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/bZbjnm-q-n4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/G8sk3vvHdpM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/gL_TIN6W5QU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/jzfkVYppTyo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/B9B9qsfpp3Q" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/2RRSLdZtzq8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/9hOVQrpOSk0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/gyFED6pC_Pw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/RUo8sLvi9rI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Kv_QADrB0KM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ILo0HvTHf-8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ihmEUu7SXA4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-4"
                aria-expanded="false"
                aria-controls="collapseExample-4"
                aria-label="Holy Quran (2)"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Holy Quran (2)</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-4">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0400"
                      aria-expanded="false"
                      aria-controls="collapseExample-0400"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0400">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(All Lecturers)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/holy-quran-2/holy-quran-2-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0401"
                      aria-expanded="false"
                      aria-controls="collapseExample-0401"
                      aria-label="Lecturer: Ibrahim Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Ibrahim Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0401">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=4QvYVEiwCgc&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=4RmxU182QB0&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=6AGmiRmUMNk&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=3"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=OUdTJE1hx3Q&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=_y0VQUaoNn4&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=5"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=tj78WE9WsXY&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=4cpL3gaKmmY&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=7"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=vVJEyW8ckMc&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=8"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=X0CqFQgbthw&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=9"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=lSnlmIXWchI&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=10"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=TXHw-LbpmfA&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=11"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=W7xcTHOxvGc&list=PLTEKWSPgUGCBFdYGboNRKiVLbGtcjGa_4&index=12"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0402"
                      aria-expanded="false"
                      aria-controls="collapseExample-0402"
                      aria-label="Lecturer: Belal Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Belal Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0402">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=r_Dqy_WTxNk"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=DlmBMCyJ2Uw"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=kbjVK3F4SLc"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=QBWxtv_VVjw"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/rC01RlB424A" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/2rYA5xzJ500" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iQilWgEb_H4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/60zmTtegv10" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/tXWdyHPmkR0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/pt32wSa8Y3E" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/cpfkKytz20E" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/z5eeJYt2Pbk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/1H2GNFZn7cU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-5"
                aria-expanded="false"
                aria-controls="collapseExample-5"
                aria-label="Holy Quran (3)"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Holy Quran (3)</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-5">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0500"
                      aria-expanded="false"
                      aria-controls="collapseExample-0500"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0500">
                    <div className="card card-body mb-3 slides">
                      <h2>Book</h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/holy-quran-3/holy-quran-3-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0501"
                      aria-expanded="false"
                      aria-controls="collapseExample-0501"
                      aria-label="Lecturer: Ibrahim Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Ibrahim Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0501">
                    <div className="card card-body mb-3 slides">
                      <h2>Course Summary</h2>
                      <p>Selected Summary of the Course by Other Students</p>
                      <a
                        href="../documents/univ-needs/holy-quran-3/holy-quran-3-course-summary.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=1k4XskpVvVo&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=fcb9ydIKlSQ&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=QSVuo29GUuY&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=3"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=oPzqiwAIrPM&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=pNmO_cB8cyY&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=5"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=tIcq2OUrS30&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ppMyQu0ErLU&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=7"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ufr8lDfTkag&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=8"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=iv47jYBPW-w&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=9"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=l2yZUSqvJAk&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=10"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=c6y5A0drRYU&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=11"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=hY9HnJ1WLsA&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=12"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=-zIXxmNFtBA&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=13"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=pMIozYAEips&list=PLTEKWSPgUGCBTIs6xKjIC-7FdL3grSGof&index=14"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-6"
                aria-expanded="false"
                aria-controls="collapseExample-6"
                aria-label="Holy Quran (4)"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Holy Quran (4)</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-6">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0600"
                      aria-expanded="false"
                      aria-controls="collapseExample-0600"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0600">
                    <div className="card card-body mb-3 slides">
                      <h2>Book</h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/holy-quran-4/holy-quran-4-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0601"
                      aria-expanded="false"
                      aria-controls="collapseExample-0601"
                      aria-label="Lecturer: Ibrahim Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Ibrahim Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0601">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ZVYqY9CQozs&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=aHlW0LMDtaI&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=S1Hi5WCRb70&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=3"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=un27zQHN9So&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=VVoypdu7DxE&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=5"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=PRLo9y-_GnU&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=RlgyrCRmUC4&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=7"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=1o9auf_9u2k&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=8"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=DYbUyNfm9nk&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=9"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=q3JzDESOUgc&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=10"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=PfkR4cUXhaE&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=11"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=pUZyvbstTX4&list=PLTEKWSPgUGCDUw26lh1lZaEpmn-_ABtu6&index=12"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="btn pt-3 pb-3 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-10"
                aria-expanded="false"
                aria-controls="collapseExample-10"
                aria-label="Interpretation of Quran"
              >
                <span>
                  <FontAwesomeIcon icon={faAngleRight} /> Interpretation of
                  Quran
                  <span className="d-inline d-md-none">(تفسير)</span>
                </span>
                <span className="d-none d-md-inline">
                  دراسات في التفسير وعلوم القرآن
                </span>
              </button>
            </p>
            <div className="collapse" id="collapseExample-10">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1001"
                      aria-expanded="false"
                      aria-controls="collapseExample-1001"
                      aria-label="Lecturer: Prof. Mohammad Nijim"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Prof. Mohammad Nijim</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1001">
                    <div className="card card-body mb-3 slides">
                      <h2>Course Summary</h2>
                      <p>Selected Summary of the Course by Other Students</p>
                      <a
                        href="../documents/univ-needs/interpretation-of-quran/interpretation-of-quran-course-summary.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/K2xHhjDCHzI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/xdfEgx7uJnk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/A_unt-U9f6Q" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/USMNuaFPAOk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/5w_7HmgaqIE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/voUYyEVJOzQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ZXolLmAgAL4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ZxDDXy3cFp4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/DCxcgXY9x_8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/q7TE9daVjxg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/J_xCX767pnU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/VkNxGH_yofk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/231p9Srr3e0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/I53XWAmwias" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/72rn4F358E4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/cuU7O00axI0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/7CY9fKXkDQE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/cjU4MwDTfl8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Hh1J2W3nUbI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/g0WIy8ySsKY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/4aaAcI5BxyU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/kI-ktYEDlTA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (23)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/0M0wTopgUnI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (24)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/qlfMkgfpoZg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (25)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/3_8auqSuVkY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1002"
                      aria-expanded="false"
                      aria-controls="collapseExample-1002"
                      aria-label="Lecturer: Dr. Ahmed Abed"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Dr. Ahmed Abed</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1002">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/uwdx7Ewml5E" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/eWPxbCuLOOI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/_NsFUpqarQA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/uYUO-MFJBcM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/BRDdRrBigMc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/c4y0_a0iyw4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/5nmE5AgGBpU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/xxX97JDVTUA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/2jNy-ErPv40" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/wZB8IjNSTqk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/t5V36jkuWW4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/glk-O-4uH6k" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/c5NPXutvfsY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/QLC4KaPqMjk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/9cknr0YacTE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/S5rxs-jEP5s" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/is_1fFWr5RM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/YocpkYYOs14" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/dmzoqhvgeTU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ecyQC9MGobU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/vNFGxPnSFf8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/4CiNwwyKYw4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="btn pt-3 pb-3 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-7"
                aria-expanded="false"
                aria-controls="collapseExample-7"
                aria-label="Jurisprudence"
              >
                <span>
                  <FontAwesomeIcon icon={faAngleRight} /> Jurisprudence
                  <span className="d-inline d-md-none">(فقه)</span>
                </span>
                <span className="d-none d-md-inline">
                  دراسات في الفقه الإسلامي
                </span>
              </button>
            </p>
            <div className="collapse" id="collapseExample-7">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0700"
                      aria-expanded="false"
                      aria-controls="collapseExample-0700"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0700">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(All Lecturers)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/jurisprudence/jurisprudence-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0701"
                      aria-expanded="false"
                      aria-controls="collapseExample-0701"
                      aria-label="Lecturer: Prof. Sami Abu-arja"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Prof. Sami Abu-arja</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0701">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/AY4CpCFB2Tk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/qE0toy-PyKc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/vFzPEJwh2kg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/FBtTS7rGepQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/tYnv5fsLqUo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/bMZBlSrN3cA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/UZKCrktFdeM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/rcijg8ITckE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/P-mdNY8ncNY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/rlrGaGHtj_c" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/l6WL0HCc1cs" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/MAU73Gdv_TA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/lhL8LD8lGBk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/L1c89yuWpw4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/_se2nss4RWg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/kqi0JaVQpr8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/jqaYbpfAyx4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/sBh9PXEFsrc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/QE9YMmnPgFU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Gx7sWyOTPPA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/r1Dl-IVZFYc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ywal5UGix5U" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (23)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/y0hd85-kxM4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (24)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/LBsCKFCIXqk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (25)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/XJCgiH8Wwsk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (26)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/3o8yxhO6kI8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (27)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/_nGkkJ8-F88" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (28)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/kivCrdbqqjo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (29)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/d4zk-z_fjT0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (30)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/CSXDxCHnqqk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0702"
                      aria-expanded="false"
                      aria-controls="collapseExample-0702"
                      aria-label="Lecturer: Prof. Mazen Sabbah"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Prof. Mazen Sabbah</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0702">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/OcCMRuxSFX0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/6iDVfmAg8V0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/9H3uZJVrOrU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/wYkOIEowkg0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iL-nPhOeqgM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/jK7NqbX8-Rk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iezIKJJUbSg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/FKz73SPvHA4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/g6_2zglXCyU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/fqzJiahIi0A" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/aGsyrdCLoWA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/RtuWN-F7eT4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/pKVtgMLy8MA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/H7s1HrCttN0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/71gkKBsz_aE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/yNUuKISO9ZQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ActvVqdquWw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ZEp4JIzll5w" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/tQKwNH4_v0Y" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/aWdktwhvNg8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/8fBXuZkmgMU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/LdifHhw0rtA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (23)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/qr6RH2tmwZI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (24)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/oVOkh6ow2i4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0703"
                      aria-expanded="false"
                      aria-controls="collapseExample-0703"
                      aria-label="Lecturer: Dr. Ahmed Abed"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Dr. Ahmed Abed</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0703">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=Z6r_yL6CqLc&t=2s"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=-5xmAaiOg78&t=2s"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=4eI8d_a2J7Q&t=4s"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=voTVa679nSk&t=2s"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=qkBm68CElyQ&t=2s"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=rJ2zF_pW-o0"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ZGqzz2XDfNk&t=1s"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0704"
                      aria-expanded="false"
                      aria-controls="collapseExample-0704"
                      aria-label="Lecturer: Belal Abo-jlambo"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Belal Abo-jlambo</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0704">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=jkT_qcjzx7U"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <div className="anchors d-flex justify-content-center align-items-center ms-auto">
                        <a href="https://youtu.be/wnWB5xxA6qU" target="_blank">
                          <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        <a href="https://youtu.be/HMERx-0_Koo" target="_blank">
                          <FontAwesomeIcon icon={faPaperclip} />
                        </a>
                      </div>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ucvN1dUQAok" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/WmdCQkS_FjQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/z7TSJSeBjx0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/TeoWKZy_1R8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/3xzlK9Pl6v8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/vQIOnUYBWdM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=IymS2OlV_GQ"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iRd7uQc-Pyw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/dcbV17B7-LQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/OsrRehcpsVA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/7horovyKxVE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/QhmEdCqXNtw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>
                        <span>Hidden</span>
                      </p>
                      <a href="https://youtu.be/_C19-RaWYp" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/BVpj3acIVRw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/UButFIglzo0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/6VtTbXYDX6E" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="btn pt-3 pb-3 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-8"
                aria-expanded="false"
                aria-controls="collapseExample-8"
                aria-label="Studies in Islamic Faith"
              >
                <span>
                  <FontAwesomeIcon icon={faAngleRight} /> Studies in Islamic
                  Faith
                  <span className="d-inline d-md-none">(عقيدة)</span>
                </span>
                <span className="d-none d-md-inline">
                  دراسات في العقيدة الإسلامية
                </span>
              </button>
            </p>
            <div className="collapse" id="collapseExample-8">
              <div className="ms-4 ms-md-5 card-body mb-3 slides">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0800"
                      aria-expanded="false"
                      aria-controls="collapseExample-0800"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0800">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(All Lecturers)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/studies-in-islamic-faith/studies-in-islamic-faith-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0801"
                      aria-expanded="false"
                      aria-controls="collapseExample-0801"
                      aria-label="Lecturer: Dr. Ahmed Abed"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Dr. Ahmed Abed</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0801">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/mgOE3M5APrs" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/jbcSIiZUGfQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/6vUms5eLgEI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/AS4QgZc88tM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/KBHRUCs39Fg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/oYLnnkw0nn8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/WKOea7VcPbY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/E4QIOs6z_ts" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/7peuCqruyHc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/_sPi__d13GA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/HSmEOX2lJBc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Qnc74Am-sq0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/nFzpvXeuukI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/JMJFVGUo9SU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/RYDfS2qKfyQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ePYKwws8k_c&list=PLalJOjh8Xj9RjeSyJwis4djowBolsf_kA&index=6"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ji8a1_bCNvA&list=PLalJOjh8Xj9RjeSyJwis4djowBolsf_kA&index=5"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=raXmrKY7d4Q&list=PLalJOjh8Xj9RjeSyJwis4djowBolsf_kA&index=4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=6yrGD61OeWU&list=PLalJOjh8Xj9RjeSyJwis4djowBolsf_kA&index=3"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=Le2AQsQ1Kp4&list=PLalJOjh8Xj9RjeSyJwis4djowBolsf_kA&index=2"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=myFA7jpyO1s&list=PLalJOjh8Xj9RjeSyJwis4djowBolsf_kA&index=1"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester">
            <p>
              <button
                className="btn pt-3 pb-3 d-flex justify-content-between"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-9"
                aria-expanded="false"
                aria-controls="collapseExample-9"
                aria-label="Studies in Prophetic Tradition"
              >
                <span>
                  <FontAwesomeIcon icon={faAngleRight} /> Studies in Prophetic
                  Tradition
                  <span className="d-inline d-md-none">(حديث)</span>
                </span>
                <span className="d-none d-md-inline">
                  دراسات في الحديث وعلومه
                </span>
              </button>
            </p>
            <div className="collapse" id="collapseExample-9">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0901"
                      aria-expanded="false"
                      aria-controls="collapseExample-0901"
                      aria-label="Lecturer: Prof. Abdullah Mortaja"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Prof. Abdullah Mortaja</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0901">
                    <div className="card card-body mb-3 slides">
                      <h2>Course Summary</h2>
                      <p>Selected Summary of the Course by Other Students</p>
                      <a
                        href="../documents/univ-needs/studies-in-prophetic-tradition/studies-in-prophetic-tradition-course-summary.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=fLZY_dFzpFs"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=bXfqGNBEZyg"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=R6PQTSsjKlA"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=zPuReSaCH3I"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=m2irRBHNkM4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=m3DQ0PEk3EI"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=4Ngylp0xfOA"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=Nt3wjH61BkY"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=Opnl_Jm_G20"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=3FXa_ePKUBE"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=JPw6WJTqx4I"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=dN0UTLhE9Mc"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=s0BSxYMBibU"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=P1LMSi_saS4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=klbQnRxUAnM"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=daKW9RwfMxY"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=cFSXZ7TEKgY"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=h-f841qwU3g"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=2afX7q3m_pQ"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=FxZBbdJqnfI"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=hxga2OPf8do"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=-P--g7LT4tM"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (23)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=QEK1ttp2MHc"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (24)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=s7-rG5bpuFk"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-0902"
                      aria-expanded="false"
                      aria-controls="collapseExample-0902"
                      aria-label="Lecturer: Dr. Ahmed Abed"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Dr. Ahmed Abed</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-0902">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/6v36B-A_320" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/xfVrDt2qfPw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02B)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=mIHuahHtXxA&list=PLalJOjh8Xj9TWMFwwPOZVEFVNGTjueNza&index=4"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/YzroyXmYRrY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/MHQVYU4aET8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/cmvp_wMG3jA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/K_4r94Qc6eI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/i4hPomGpK_U" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Ga3nidcQEnY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/RIT3RJ4uETY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/j3jxq7ATRPs" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/hZlZ2elaR5k" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>
                        <span>Unknown,</span> couldn't find the lecture
                      </p>
                      <a href="../404.html" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/CoLJqkXL_hE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>
                        <span>Unknown,</span> couldn't find the lecture
                      </p>
                      <a href="../404.html" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/EFiDAT05Lsg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/FDoDlofZlf4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/hRQqQrhNfmw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/NQpQomZo0hM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/jBvyPBUzbWs" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iJdBHL7UbXo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/-ZNnhiADoKU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/XBytbImlLMs" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (23)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/98LfTHVEJcw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (24)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/jIWGSwqrej0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (25)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/KPD0sW_cf_o" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (26)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/P96nAisPUB0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (27)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/47UzlZUTIY0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester optional">
            <p
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-delay="100"
              title="This course and all the marked courses are optional; as a Pharmacy student, you only need to pass one of the three courses."
            >
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-11"
                aria-expanded="false"
                aria-controls="collapseExample-11"
                aria-label="Environmental Sciences"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Environmental Sciences</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-11">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1100"
                      aria-expanded="false"
                      aria-controls="collapseExample-1100"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1100">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book
                        <span className="note">(Prof. Khalid's)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/environmental-sciences/environmental-sciences-book-dr-khaled.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book
                        <span className="note">(Dr. Khaldoun's)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/environmental-sciences/environmental-sciences-book-dr-khaldoun.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1101"
                      aria-expanded="false"
                      aria-controls="collapseExample-1101"
                      aria-label="Lecturer: Prof. Khalid Ubeid"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Prof. Khalid Ubeid</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1101">
                    <div className="card card-body mb-3 slides">
                      <h2>Course Summary</h2>
                      <p>Selected Summary of the Course by Other Students</p>
                      <a
                        href="../documents/univ-needs/environmental-sciences/environmental-sciences-course-summary.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Ts-ZikgfpTk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/bqq_xW1JSPE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/4O_yhPdsmPg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/LwRO5MjmXMI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/JakiDbLd16c" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/DjHmp_ZEU3c" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/BGJTCxzgUxw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/rnT_JDhlmI0" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=xVuBH-OD1qw"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a
                        href="https://www.youtube.com/watch?v=ddA3dISXYrg"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/0Bgzg8LGYZc" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/J3gDKpy4Tew" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/YlH87TfmItU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/UeVWYlD9BMo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iNrxczaCESs" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/kQUfAbMtIX8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/fOYCZSip4Ls" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (18)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/psWzOGYzoKQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (19)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/FvQ201KyJBA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (20)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/D5HF_e5DvNE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (21)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Sfu7rLHrZIU" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (22)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/SIRcf7l0iKw" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (23)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iOS7NQ9HR_M" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (24)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ZdpTW5L0svI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (25)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/EEDhQ6xfcBI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1102"
                      aria-expanded="false"
                      aria-controls="collapseExample-1102"
                      aria-label="Lecturer: Dr. Khaldoun Abualhin"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Dr. Khaldoun Abualhin</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1102">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/4aJ03cXDJso" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/366nUAbzJJo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/CKHrjLoL_QQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/7pWwWZKBPDk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/ukxaIhYJivo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/0Z141O5uwOg" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Ub9jwYllD34" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/YBeRO8pO6WM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/7b3cTmcjFdk" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/1ZzTmOFuzh4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (11)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/hzh79_bQtjI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (12)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/7ePnw8I7dlo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (13)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/vOpP4Zx7AL4" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (14)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/L2ruI4e-BzY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (15)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/cTYwWjU8mJQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (16)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Bu555N2bBMY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (17)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/57JlHcFxmGo" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="semester optional">
            <p
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-delay="100"
              title="This course and all the marked courses are optional; as a Pharmacy student, you only need to pass one of the three courses."
            >
              <button
                className="d-flex btn pt-3 pb-3"
                style={{ color: "#69697b", cursor: "not-allowed" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-13"
                aria-expanded="false"
                aria-controls="collapseExample-13"
                aria-label="Human Rights"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Human Rights</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-0000">
              <p className="oops text-center mt-5 mb-5">
                <span>Oops !</span> <br />
                Seems like there is no data available :(
              </p>
            </div>
          </div>
          <div className="semester optional">
            <p
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-delay="100"
              title="This course and all the marked courses are optional; as a Pharmacy student, you only need to pass one of the three courses."
            >
              <button
                className="d-flex btn pt-3 pb-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample-12"
                aria-expanded="false"
                aria-controls="collapseExample-12"
                aria-label="Palestinian Studies"
              >
                <div>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>Palestinian Studies</div>
              </button>
            </p>
            <div className="collapse" id="collapseExample-12">
              <div className="ms-4 ms-md-5 card-body mb-3">
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1200"
                      aria-expanded="false"
                      aria-controls="collapseExample-1200"
                      aria-label="Download the Book"
                    >
                      <FontAwesomeIcon icon={faAngleRight} /> Download the Book
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1200">
                    <div className="card card-body mb-3 slides">
                      <h2>
                        Book <span className="note">(All Lecturers)</span>
                      </h2>
                      <p>The Recommended Reference Book</p>
                      <a
                        href="../documents/univ-needs/palestinian-studies/palestinian-studies-book.pdf"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDownload} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="semester">
                  <p>
                    <button
                      className="btn pt-3 pb-3"
                      style={{ width: "fit-content" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample-1201"
                      aria-expanded="false"
                      aria-controls="collapseExample-1201"
                      aria-label="Lecturer: Dr. Esam Mokhamar"
                    >
                      <FontAwesomeIcon icon={faAngleRight} />
                      <span className="name">Lecturer:</span>
                      <span>Dr. Esam Mokhamar</span>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample-1201">
                    <div className="card card-body mb-3">
                      <h2>Lecture (01)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/uW3N7S0RfXY" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (02)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/0juFzCmiCYE" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (03)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/iQ_jFzfhLig" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (04)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/vMKs4c6r2J8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (05)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/SoJEz82FjzQ" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (06)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/SUUpJJzcQYA" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (07)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/fnlkleafkx8" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (08)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/UzkI_IQbINI" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (09)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/Vn5GViMWPPM" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                    <div className="card card-body mb-3">
                      <h2>Lecture (10)</h2>
                      <p>Lecture Title</p>
                      <a href="https://youtu.be/8O6yThmzY7M" target="_blank">
                        <FontAwesomeIcon icon={faYoutube} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
