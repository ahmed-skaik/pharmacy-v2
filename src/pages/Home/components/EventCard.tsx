import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDownload,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface EventCardProps {
  id: number;
  pdfPath?: string;
  websiteUrl?: string;
  image: string;
  title: string;
  description: string;
  date: string;
  location: string;
}

export default function EventCard({
  id,
  pdfPath,
  websiteUrl,
  image,
  title,
  description,
  date,
  location,
}: EventCardProps) {
  return (
    <div className="card mb-3 mt-3" key={id}>
      <div className="row align-items-center justify-content-between">
        <div className="col-md-4 text-center">
          <a
            href={pdfPath || websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              loading="lazy"
              className="img-fluid rounded-start"
              alt="event"
            />
          </a>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <span className="card-title h5">{title}</span>
            <p className="card-text">{description}</p>
            <hr />
            <ul className="list-unstyled d-flex justify-content-evenl align-items-center flex-wrap">
              <li>
                <FontAwesomeIcon icon={faCalendar} fixedWidth />
                {date}
              </li>
              <li>
                {pdfPath ? (
                  <>
                    <FontAwesomeIcon icon={faDownload} fixedWidth />
                    <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                      Download the Table
                    </a>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLink} fixedWidth />
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Event Website
                    </a>
                  </>
                )}
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} fixedWidth />
                {location}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
