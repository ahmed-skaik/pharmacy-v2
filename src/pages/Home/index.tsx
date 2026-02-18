import LandingSection from "./sections/LandingSection";
import StatisticsSection from "./sections/StatisticsSection";
import PlansSection from "./sections/PlansSection";
import CoursesSection from "./sections/CoursesSection";
import EventsSection from "./sections/EventsSection";

export default function Home() {
  return (
    <>
      <LandingSection />
      <div className="spikes-seperator"></div>
      <StatisticsSection />
      <PlansSection />
      <div className="spikes-seperator"></div>
      <CoursesSection />
      <EventsSection />
    </>
  );
}
