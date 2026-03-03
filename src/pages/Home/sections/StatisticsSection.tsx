export default function StatisticsSection() {
  const STATS_DATA = [
    { goal: 350, label: "Active Students / W" },
    { goal: 950, label: "Visits / W" },
    { goal: 2800, label: "Views / W", display: "2.8K" },
    { goal: 200, label: "File Downloads / W" },
  ];
  return (
    <div className="stats pt-5 pb-5 text-center" id="stats">
      <div className="container">
        <div className="row justify-content-center">
          {STATS_DATA.map((stat) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="box pb-3 pt-3">
                <span className="h4">
                  <span className="number" data-goal="350">
                    {stat.goal}
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
