import LandingSection from "./sections/LandingSection";
import StatisticsSection from "./sections/StatisticsSection";
import PlansSection from "./sections/PlansSection";
import CoursesSection from "./sections/CoursesSection";
import EventsSection from "./sections/EventsSection";
import SpikesSeperator from "../../components/SpikesSeperator";
import Seo from "../../meta/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="This website was made to help Pharmacy students at Alazhar University of Gaza, it includes all the E-Learning lectures, summaries, previous exams & more !"
      />
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
