import React, { Component } from "react";

class AdventuresIntro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row text-center">
          <h1 className="display-3 fw-bold">Galleries</h1>
          <div className="heading-line mb-1"></div>
        </div>

        <div id="services-intro-overview" className="row pt-2 mt-1 mb1">
          <div className="col-md-6 border-right">
            <div className="service-items p-3">
              <h4 className="">
                <br />
                <div>
                  <div className="service-item row">
                    <div className="col-1">
                      <i className="bi bi-check"></i>
                    </div>
                    <div className="col-11">
                      Year round tours of the Antarctic
                    </div>
                  </div>
                  <div className="service-item row">
                    <div className="col-1">
                      <i className="bi bi-check"></i>
                    </div>
                    <div className="col-11">
                      Close up encounters with penguins
                    </div>
                  </div>

                  <div className="service-item row">
                    <div className="col-1">
                      <i className="bi bi-check"></i>
                    </div>
                    <div className="col-11">Comfortable accommodations</div>
                  </div>
                </div>
              </h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="services-overview p-4 text-start">
              <p className="fw-light">
                Penguin Tours, Ltd. is a ficticious company invented to
                demonstrate functionality and adaptability of a website
                template. But if we existed, we would provide year round tours
                of the Antarctic, by boat and by foot, including breathtaking
                encounters with penguins and comfortable accommodations.
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AdventuresIntro;
