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
          title="This Project was made by me Ahmed-Skaik, a Pharmacist & a Web Developer using Reactjs, TS, SASS & Bootstrap | Credit to Mr. Ahmed-Younis for providing project's data."
        >
          Made with ❤️, by{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/ahmed-skaik01/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ahmed-Skaîk
            </a>
          </span>{" "}
          &copy; 2022 - {currentYear}
        </p>
      </div>
    </footer>
  );
}
