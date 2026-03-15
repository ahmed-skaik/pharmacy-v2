import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faDownload,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { eventsData } from "../../../data/HomeData";
import SectionHeading from "../../../components/SectionHeading";

export default function EventsSection() {
  return (
    <div className="events pt-5 pb-5">
      <div className="container">
        <SectionHeading
          titleStart="Upcoming"
          titleHighlight="Events"
          description="Upcoming Events Related to Faculty of Pharmacy - Alazhar University of Gaza"
          as="h2"
          className="main-title mt-5 mb-5"
        />
        {eventsData.map((event) => (
          <div className="card mb-3 mt-3" key={event.id}>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-4 text-center">
                <a href={event.pdfPath || event.websiteUrl} target="_blank">
                  <img
                    src={event.image}
                    className="img-fluid rounded-start"
                    alt="event"
                  />
                </a>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <span className="card-title h5">{event.title}</span>
                  <p className="card-text">{event.description}</p>
                  <hr />
                  <ul className="list-unstyled d-flex justify-content-evenl align-items-center flex-wrap">
                    <li>
                      <FontAwesomeIcon icon={faCalendar} fixedWidth />
                      {event.date}
                    </li>
                    <li>
                      {event.pdfPath ? (
                        <>
                          <FontAwesomeIcon icon={faDownload} fixedWidth />
                          <a
                            href={event.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download the Table
                          </a>
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faLink} fixedWidth />
                          <a
                            href={event.websiteUrl}
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
                      {event.location}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
