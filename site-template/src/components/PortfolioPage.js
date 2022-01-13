import React, { Component } from "react";
import PortfolioIntro from "./portfolio/PortfolioIntro";
import PortfolioItems from "./portfolio/PortfolioItems";
class PortfolioPage extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }
  render() {
    return (
      <section id="portfolio" className="portfolio">
        <div className="container">
          <PortfolioIntro />

          <PortfolioItems />
        </div>
      </section>
    );
  }
}

export default PortfolioPage;
