import ContactUsSection from "./sections/ContactUsSection";
import FaqsSection from "./sections/FaqsSection";
import SpikesSeperator from "../../components/SpikesSeperator";
import Seo from "../../meta/Seo";

export default function Contact() {
  return (
    <>
      <Seo title="Contact Us" description="Contact Us" />
      <ContactUsSection />
      <SpikesSeperator />
      <FaqsSection />
    </>
  );
}
