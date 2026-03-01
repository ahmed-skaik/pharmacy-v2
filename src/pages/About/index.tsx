import AboutUsSection from "./sections/AboutUsSection";
import AboutWebsiteSection from "./sections/AboutWebsiteSection";
import DepartmentsSection from "./sections/DepartmentsSection";
import FoundersSection from "./sections/FoundersSection";
import SpikesSeperator from "../../components/SpikesSeperator";

export default function About() {
  return (
    <>
      <AboutUsSection />
      <SpikesSeperator />
      <DepartmentsSection />
      <AboutWebsiteSection />
      <SpikesSeperator />
      <FoundersSection />
    </>
  );
}
