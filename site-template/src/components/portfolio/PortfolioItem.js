import React, { Component } from "react";
import GLightbox from "glightbox";
import PortfolioDetail from "./PortfolioDetail";

const dt = new PortfolioDetail();

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.displayGallery = this.displayGallery.bind(this);
  }

  displayGallery = (evt) => {
    console.dir(evt.target);

    let targetButtonClass = evt.target.className;

    console.log(targetButtonClass);

    let startingSlide = 9;

    if (targetButtonClass.includes("photo-0")) {
      startingSlide = 0;
    } else if (targetButtonClass.includes("photo-1")) {
      startingSlide = 1;
    } else if (targetButtonClass.includes("photo-2")) {
      startingSlide = 2;
    } else if (targetButtonClass.includes("photo-3")) {
      startingSlide = 3;
    } else if (targetButtonClass.includes("photo-4")) {
      startingSlide = 4;
    } else if (targetButtonClass.includes("photo-5")) {
      startingSlide = 5;
    } else if (targetButtonClass.includes("photo-6")) {
      startingSlide = 6;
    } else if (targetButtonClass.includes("photo-7")) {
      startingSlide = 7;
    } else if (targetButtonClass.includes("photo-8")) {
      startingSlide = 8;
    } else if (targetButtonClass.includes("photo-9")) {
      startingSlide = 9;
    }

    const myGallery = GLightbox({
      elements: dt.elements,
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
              <h4>{this.props.obj.title}</h4>
              <p>{this.props.obj.subTitle}</p>
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
