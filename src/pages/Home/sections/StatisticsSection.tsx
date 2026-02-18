export default function StatisticsSection() {
  return (
    <div className="stats pt-5 pb-5 text-center" id="stats">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="box pb-3 pt-3">
              <span className="h4">
                <span className="number" data-goal="350">
                  0
                </span>
                <span className="plus">+</span>
              </span>
              <p>Active Students / W</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="box pb-3 pt-3">
              <span className="h4">
                <span className="number" data-goal="950">
                  0
                </span>
                <span className="plus">+</span>
              </span>
              <p>visits / W</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="box pb-3 pt-3">
              <span className="h4">
                <span className="number" data-goal="2">
                  0
                </span>
                <span>,</span>
                <span className="number" data-goal="8">
                  0
                </span>
                <span>K</span>
                <span className="plus">+</span>
              </span>
              <p>Views / W</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="box pb-3 pt-3">
              <span className="h4">
                <span className="number" data-goal="200">
                  0
                </span>
                <span className="plus">+</span>
              </span>
              <p>File Downloads / W</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
