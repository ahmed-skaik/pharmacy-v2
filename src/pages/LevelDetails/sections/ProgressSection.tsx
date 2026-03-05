import {
  faBuildingColumns,
  faCertificate,
  faUserGraduate,
  faVialVirus,
} from "@fortawesome/free-solid-svg-icons";
import GraducationImg from "../../../assets/images/graduation-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function ProgressSection() {
  const progressData = [
    { title: "Labs (21/21)", value: 100, icon: faVialVirus },
    { title: "UNIV Needs (12/12)", value: 100, icon: faBuildingColumns },
    { title: "Graduation (10/10) Semesters", value: 100, icon: faUserGraduate },
    { title: "Certificate", value: 100, icon: faCertificate },
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;

      if (window.scrollY >= sectionTop - 250) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="my-progress pt-5 pb-5" id="progress" ref={sectionRef}>
      <div className="container">
        <div className="main-title left mt-5 mb-5 text-center text-lg-start">
          <h2 className="mb-3">
            2024 <span>Pharmacists</span> !
          </h2>
          <p className="mb-4">
            Progress of the (2019 - 2024) Pharmacy Batch - Alazhar University of
            Gaza
          </p>
        </div>
        <div className="row align-items-center justify-content-between gap-4 gap-lg-0">
          <div className="col-lg-6 order-1 order-lg-0">
            <div className="img text-center ms-lg-2 me-lg-5">
              <img src={GraducationImg} alt="gradution" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="progress-stat">
              {progressData.map((item, i) => (
                <div className="prog-holder" key={i}>
                  <h4>
                    <FontAwesomeIcon icon={item.icon} fixedWidth />
                    {item.title}
                  </h4>
                  <div className="prog">
                    <span
                      style={{ width: animate ? `${item.value}%` : "0%" }}
                      data-prog={`${item.value}%`}
                      data-width="100%"
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
