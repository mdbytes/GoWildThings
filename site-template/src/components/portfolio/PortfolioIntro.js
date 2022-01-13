import React, { Component } from "react";

const logoPort =
  "https://dm2306files.storage.live.com/y4mQ04FmkR-A2CPGkLG63pCI1ploGZrL9iWtm9FZxrGgC7ICLG2-hOElR3PXh61tX40hujpWu02hER9rYQanUCh6iO44yMSojF1jIn0LkcFLERPJh7wGAyym8t_v9289VI8SB0tqgHmghntBUvNzbvnbJwcOTloK5vwaTXUCS7K0bauneH2HwrF_D0x9prAsU2C?width=128&height=150&cropmode=none";

class PortfolioIntro extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }
  render() {
    return (
      <React.Fragment>
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">
            Photo Gallery
            <img src={logoPort} alt="logo" />
          </h1>
          <div className="heading-line"></div>
          <p className="lead">Here's a little of what's been going on...</p>
          <p className="mobilePresent">
            Tap on any image to display in full screen gallery.
          </p>
          <p className="largePresent">
            Hover over any image to display in full screen gallery.
          </p>
        </div>
        <div className="row text-center mt-5 mb-4 g-3">
          <div className="col-md-12">
            <button className="btn btn-outline-primary" type="button">
              All
            </button>
            <button className="btn btn-outline-primary" type="button">
              Websites
            </button>
            <button className="btn btn-outline-primary" type="button">
              Web Applications
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioIntro;
