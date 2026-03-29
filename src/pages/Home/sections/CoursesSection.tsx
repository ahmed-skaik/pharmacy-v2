import LevelImg from "../../../assets/images/level-img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { cardsData } from "../../../data/HomeData";
import DotsDecoration from "../../../components/DotsDecoration";
import SectionHeading from "../../../components/SectionHeading";

export default function CoursesSection() {
  return (
    <div className="courses pt-5 pb-5" id="courses">
      <DotsDecoration />
      <div className="container">
        <SectionHeading
          titleStart="E-learning"
          titleHighlight="Courses"
          description="You can Reach all the E-learning Lectures for all Levels - Faculty
            of Pharmacy"
          as="h2"
          className="main-title mt-5 mb-5"
        />
        <div className="row mt-5 mb-5">
          {cardsData.map((card) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 p-3 z-index"
              key={card.id}
            >
              <Link to={card.path}>
                <div className="article-box">
                  <div className="img">
                    <img
                      src={LevelImg}
                      alt="level-img"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="text">
                    <h3>{card.title}</h3>
                    <p>
                      {card.id <= 5 ? (
                        <>
                          {card.id} <sup>{card.sup}</sup>
                        </>
                      ) : null}{" "}
                      {card.description}
                      <span style={{ visibility: "hidden" }}>
                        {card.hiddenText}
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faArrowRight} fixedWidth />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
