import React, { Component } from "react"

class PortfolioItem extends Component {
  constructor(props) {
    super(props)
    this.displayGallery = this.props.displayGallery
  }

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
                  onClick={this.props.displayGallery}
                >
                  Display In Gallery
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default PortfolioItem
