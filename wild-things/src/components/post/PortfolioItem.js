import React, { Component } from "react";
import GLightbox from "glightbox";

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.displayGallery = this.displayGallery.bind(this);
  }

  displayGallery = (evt) => {
    let targetButtonClass = evt.target.className;

    let startingSlide = 0;

    startingSlide = Number.parseInt(
      targetButtonClass.replace("photo-", "").replace(" glightbox", "")
    );

    const myGallery = GLightbox({
      elements: this.props.elements,
      autoplayVideos: false,
      startAt: startingSlide,
      openEffect: "fade",
      closeEffect: "fade",
      zoomable: "true",
    });

    myGallery.on("close", () => {
      myGallery.close();
    });

    myGallery.open();
  };
  render() {
    return (
      <React.Fragment>
        <div className="portfolio-box">
          <img
            src={this.props.obj.image}
            alt={"portfolio item " + this.props.obj.slideLocation}
            title={"portfolio " + this.props.obj.slideLocation + " picture"}
            className="img-fluid"
          />
          <div className="portfolio-info">
            <div className="caption">
              <p>
                <br />{" "}
                <button
                  className={
                    "photo-" + this.props.obj.slideLocation + " glightbox"
                  }
                  onClick={this.displayGallery}
                >
                  Display In Gallery
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PortfolioItem;
