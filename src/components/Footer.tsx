import { Link } from "react-router-dom";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="p-3" id="footer">
      <div className="container d-flex justify-content-center align-items-center">
        <p
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-delay="100"
          title="This Project was made by me Ahmed-Skaik, a 5th-year Pharmacy student using HTML, CSS, SASS, BOOTSTRAP & JS. ///////// Credit to Mr. Ahmed-Younis for providing all the data needed for the Project."
        >
          Made with ❤️, by
          <span>
            <Link to="/about">Ahmed-Skaîk</Link>
          </span>
          &copy; {currentYear}
        </p>
      </div>
    </footer>
  );
}
