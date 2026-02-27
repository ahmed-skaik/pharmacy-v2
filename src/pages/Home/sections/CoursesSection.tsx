import LevelImg from "../../../assets/images/level-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { cardsData } from "../../../data/CardsData";
import DotsDecoration from "../../../components/DotsDecoration";

export default function CoursesSection() {
  return (
    <div className="courses pt-5 pb-5" id="courses">
      <DotsDecoration />
      <div className="container">
        <div className="main-title mt-5 mb-5">
          <h2 className="mb-3">
            E-learning <span>Courses</span>.
          </h2>
          <p className="mb-4">
            You can Reach all the E-learning Lectures for all Levels - Faculty
            of Pharmacy
          </p>
        </div>
        <div className="row mt-5 mb-5">
          {cardsData.map((card) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 p-3 z-index"
              key={card.id}
            >
              <Link to={card.path}>
                <div className="article-box">
                  <div className="img">
                    <img src={LevelImg} alt="level-img" className="img-fluid" />
                  </div>
                  <div className="text">
                    <h3>{card.title}</h3>
                    <p>
                      {card.id}
                      <sup>{card.sup}</sup> {card.description}
                      <span style={{ visibility: "hidden" }}>
                        {card.hiddenText}
                      </span>
                    </p>
                  </div>
                  <div className="more">
                    <span className="d-flex justify-content-between align-items-center">
                      <span>Visit</span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} fixedWidth />
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
