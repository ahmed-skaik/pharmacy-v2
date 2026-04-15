import { EVENTS_DATA } from "../../../data/HomeData";
import SectionHeading from "../../../components/SectionHeading";
import EventCard from "../components/EventCard";

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
        {EVENTS_DATA.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            pdfPath={event.pdfPath}
            websiteUrl={event.websiteUrl}
            image={event.image}
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
}
