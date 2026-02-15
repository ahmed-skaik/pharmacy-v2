import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTopButton() {
  return (
    <div className="up" id="up">
      <button aria-label="scroll up">
        <FontAwesomeIcon icon={faCircleChevronUp} />
      </button>
    </div>
  );
}
