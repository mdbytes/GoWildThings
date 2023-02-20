import React, { Component } from "react";
import PortfolioDetail from "./PortfolioDetail";
import PortfolioItem from "./PortfolioItem";

const dt = new PortfolioDetail();

class PortfolioItems extends Component {
  constructor(props) {
    super(props);
    dt.images = this.props.portfolioDetails.images;
    dt.elements = this.props.portfolioDetails.elements;
  }

  componentDidMount() {
    console.log("portfolio items props", this.props);
  }
  render() {
    return (
      <div className="row portfolio-items">
        {dt.images.map((object) => (
          <div className="col-lg-6" key={object.slideLocation}>
            <PortfolioItem elements={dt.elements} obj={object} />
          </div>
        ))}
      </div>
    );
  }
}

export default PortfolioItems;
