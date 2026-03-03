import AboutUsSection from "./sections/AboutUsSection";
import AboutWebsiteSection from "./sections/AboutWebsiteSection";
import DepartmentsSection from "./sections/DepartmentsSection";
import FoundersSection from "./sections/FoundersSection";
import SpikesSeperator from "../../components/SpikesSeperator";
import Seo from "../../meta/Seo";

export default function About() {
  return (
    <>
      <Seo title="About" description="About Us" />
      <AboutUsSection />
      <SpikesSeperator />
      <DepartmentsSection />
      <AboutWebsiteSection />
      <SpikesSeperator />
      <FoundersSection />
    </>
  );
}
