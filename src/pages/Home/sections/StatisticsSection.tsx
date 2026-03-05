import { useEffect, useRef, useState } from "react";

export default function StatisticsSection() {
  const STATS_DATA = [
    { goal: 350, label: "Active Students / W" },
    { goal: 950, label: "Visits / W" },
    { goal: 2800, label: "Views / W", format: "k" },
    { goal: 200, label: "File Downloads / W" },
  ];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(STATS_DATA.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;

      if (window.scrollY >= sectionTop - 350 && !started) {
        setStarted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [started]);

  useEffect(() => {
    if (!started) return;

    STATS_DATA.forEach((stat, index) => {
      let current = 0;

      const duration = 2000; // animation duration in ms
      const steps = 60; // frames
      const increment = stat.goal / steps;

      const counter = setInterval(() => {
        current += increment;

        if (current >= stat.goal) {
          current = stat.goal;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, duration / steps);
    });
  }, [started]);

  function formatNumber(value: number, format?: string) {
    if (format === "k") {
      return (value / 1000).toFixed(1) + "K";
    }
    return value;
  }

  return (
    <div className="stats pt-5 pb-5 text-center" id="stats" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-center">
          {STATS_DATA.map((stat, i) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
              <div className="box pb-3 pt-3">
                <span className="h4">
                  <span className="number">
                    {" "}
                    {formatNumber(counts[i], stat.format)}
                  </span>
                  <span className="plus">+</span>
                </span>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
