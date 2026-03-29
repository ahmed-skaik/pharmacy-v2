import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [bottom, setBottom] = useState(25);

  useEffect(() => {
    const updateButtonPosition = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isNearFooter = rect.top <= window.innerHeight;
        // const isMobile = window.innerWidth <= 576;
        // setBottom(isMobile && isNearFooter ? 80 : 25);
        setBottom(isNearFooter ? 81 : 25);
      }

      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", updateButtonPosition);
    window.addEventListener("resize", updateButtonPosition);

    // Initial check
    updateButtonPosition();

    return () => {
      window.removeEventListener("scroll", updateButtonPosition);
      window.removeEventListener("resize", updateButtonPosition);
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
      style={{ right: isVisible ? "12px" : "-100px", bottom: `${bottom}px` }}
    >
      <button aria-label="scroll up" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faCircleChevronUp} fixedWidth />
      </button>
    </div>
  );
}
