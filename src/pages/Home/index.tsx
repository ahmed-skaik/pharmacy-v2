import LandingSection from "./sections/LandingSection";
import StatisticsSection from "./sections/StatisticsSection";
import PlansSection from "./sections/PlansSection";
import CoursesSection from "./sections/CoursesSection";
import EventsSection from "./sections/EventsSection";
import SpikesSeperator from "../../components/SpikesSeperator";

export default function Home() {
  return (
    <>
      <LandingSection />
      <SpikesSeperator />
      <StatisticsSection />
      <PlansSection />
      <SpikesSeperator />
      <CoursesSection />
      <EventsSection />
    </>
  );
}
