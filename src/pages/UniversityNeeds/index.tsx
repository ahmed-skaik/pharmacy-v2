import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBook,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
import { UNI_NEEDS_DATA } from "../../data/UniversityNeedsData";
import Seo from "../../meta/Seo";
import SectionHeading from "../../components/SectionHeading";
import DotsDecoration from "../../components/DotsDecoration";

export default function UniversityNeeds() {
  const required = UNI_NEEDS_DATA.filter((s) => !s.isOptional);
  const optional = UNI_NEEDS_DATA.filter((s) => s.isOptional);

  return (
    <>
      <Seo
        title="University Needs"
        description="University Needs for all Levels & Faculties at Alazhar University of Gaza"
      />
      <div className="content position-relative">
        <DotsDecoration />
        <div className="container">
          <SectionHeading
            titleStart="University"
            titleHighlight="Needs"
            description="University Needs for all Levels & Faculties at Alazhar University of Gaza"
          />

          <SubjectGroup title="Required Courses:" subjects={required} />
          <SubjectGroup title="Optional Courses:" subjects={optional} />
        </div>
      </div>
    </>
  );
}

function SubjectGroup({
  title,
  subjects,
}: {
  title: string;
  subjects: typeof UNI_NEEDS_DATA;
}) {
  if (subjects.length === 0) return null;

  return (
    <div className="mb-5 mt-5">
      <h2 className="uni-needs-group-title mb-4">
        <span>{title}</span>
      </h2>
      <div className="row">
        {subjects.map((subject) => (
          <div className="col-lg-4 col-md-6 p-3" key={subject.id}>
            <Link
              to={`/uni-needs/${subject.id}`}
              className="text-decoration-none"
            >
              <div className="article-box uni-needs-card">
                <div className="text p-3">
                  <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                    <h3 className="mb-0 fs-6 fw-semibold">{subject.title}</h3>
                    <span
                      className={`badge flex-shrink-0 ${
                        subject.isOptional
                          ? "bg-warning text-dark"
                          : "bg-success"
                      }`}
                    >
                      {subject.isOptional ? "Optional" : "Required"}
                    </span>
                  </div>
                  <div className="d-flex gap-3 uni-needs-meta">
                    <span>
                      <FontAwesomeIcon
                        icon={faChalkboardUser}
                        className="me-1"
                      />
                      {subject.lecturers.length} Lecturer
                      {subject.lecturers.length !== 1 ? "s" : ""}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faBook} className="me-1" />
                      {subject.books.length} Book
                      {subject.books.length !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
                <div className="more p-3">
                  <span className="d-flex justify-content-between align-items-center">
                    <span>Explore</span>
                    <FontAwesomeIcon icon={faArrowRight} fixedWidth />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
