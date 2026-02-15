import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <div className="loading d-flex justify-content-center align-items-center flex-column position-fixed w-100 h-100">
      <p>Loading...</p>
      <FontAwesomeIcon
        icon={faCircleNotch}
        spin
        size="xl"
        style={{ color: "#3434ff" }}
      />
    </div>
  );
}
