import LevelImg from "../../../assets/images/level-img.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface LevelCardProps {
  id: number;
  path: string;
  title: string;
  description: string;
  sup: string;
  hiddenText: string;
}

export default function LevelCard({
  id,
  path,
  title,
  description,
  sup,
  hiddenText,
}: LevelCardProps) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-3 z-index" key={id}>
      <Link to={path}>
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
            <h3>{title}</h3>
            <p>
              {id <= 5 ? (
                <>
                  {id} <sup>{sup}</sup>
                </>
              ) : null}{" "}
              {description}
              <span style={{ visibility: "hidden" }}>{hiddenText}</span>
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
  );
}
