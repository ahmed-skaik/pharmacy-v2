import { Link } from "react-router-dom";
import Seo from "../meta/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="404 - Not Found"
        description="Error 404 Page - Faculty of Pharmacy - Alazhar University of Gaza"
      />
      <div className="error d-flex justify-content-center align-items-center text-white">
        <div className="container text-center">
          <div className="title">404</div>
          <h2 className="mb-3">Page not Found</h2>
          <p className="mb-0">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <div className="home mt-4">
            <Link to="/" className="btn btn-light text-uppercase">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
