import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { idColor } from "../constants";

export default function LoadingPage() {
  return (
    <div className="loading d-flex justify-content-center align-items-center flex-column position-fixed w-100 h-100">
      <p>Loading...</p>
      <FontAwesomeIcon
        icon={faCircleNotch}
        spin
        size="xl"
        style={{ color: idColor }}
      />
    </div>
  );
}
