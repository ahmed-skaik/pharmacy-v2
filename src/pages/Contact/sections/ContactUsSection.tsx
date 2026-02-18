import MailIcon from "../../../assets/images/mail.svg";

export default function ContactUsSection() {
  return (
    <div className="contact pb-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="cardd d-flex justify-content-between align-items-center gap-2 gap-md-5 mt-5 mb-5 flex-column flex-md-row">
          <div className="txt text-center text-md-start">
            <h3>
              Contact <span>Us</span>.
            </h3>
            <p>
              If you encounter any Problem While Browsing the Website or have
              any Suggestions, Previous Exams, or any useful Resource you want
              to be added to the Website, Please Reach out via Email Address by
              Clicking on the Mail icon.
            </p>
          </div>
          <div className="img">
            <div className="img-background d-flex justify-content-center align-items-center">
              <a href="mailto:alazharpharmacy.contact@gmail.com">
                <img src={MailIcon} alt="mail" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
