import React, { Component } from "react";
import PortfolioDetail from "./PortfolioDetail";
import PortfolioItem from "./PortfolioItem";

const dt = new PortfolioDetail();

class PortfolioItems extends Component {
  render() {
    return (
      <div className="row portfolio-items">
        {dt.images.map((object) => (
          <div className="col-lg-6" key={object.slideLocation}>
            <PortfolioItem obj={object} />
          </div>
        ))}
      </div>
    );
  }
}

export default PortfolioItems;
