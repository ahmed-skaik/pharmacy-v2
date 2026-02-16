import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollToggle = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", scrollToggle);

    return () => {
      window.removeEventListener("scroll", scrollToggle);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div
      className="up"
      id="up"
      onClick={scrollToTop}
      style={{ right: isVisible ? "12px" : "-100px" }}
    >
      <button aria-label="scroll up">
        <FontAwesomeIcon icon={faCircleChevronUp} fixedWidth />
      </button>
    </div>
  );
}
