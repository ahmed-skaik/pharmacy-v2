import { useNavigate, useLocation } from "react-router-dom";
import Seo from "../meta/Seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <>
      <Seo
        title="404 - Not Found"
        description="Error 404 Page - Faculty of Pharmacy - Alazhar University of Gaza"
      />
      <div className="error d-flex justify-content-center align-items-center text-white">
        <main className="container d-flex flex-column align-items-center text-center">
          <div className="title">404</div>
          <h1 className="mb-3">Page not Found</h1>
          <p className="mb-0">
            No page found for: {location.pathname}
            <br />
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="home mt-4">
            <button
              onClick={handleBack}
              className="btn btn-light text-uppercase"
            >
              <FontAwesomeIcon
                icon={faCircleLeft}
                fixedWidth
                style={{ marginRight: "4px" }}
              />
              <span>Go Back</span>
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
