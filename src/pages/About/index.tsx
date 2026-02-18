import AboutUsSection from "./sections/AboutUsSection";
import AboutWebsiteSection from "./sections/AboutWebsiteSection";
import DepartmentsSection from "./sections/DepartmentsSection";
import FoundersSection from "./sections/FoundersSection";

export default function About() {
  return (
    <>
      <AboutUsSection />
      <div className="spikes-seperator"></div>
      <DepartmentsSection />
      <AboutWebsiteSection />
      <div className="spikes-seperator"></div>
      <FoundersSection />
    </>
  );
}
