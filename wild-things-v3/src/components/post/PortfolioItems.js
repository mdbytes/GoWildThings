import React, { Component } from "react"
import PortfolioDetail from "./PortfolioDetail"
import PortfolioItem from "./PortfolioItem"
import GLightbox from "glightbox"

const dt = new PortfolioDetail()

class PortfolioItems extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}
  render() {
    return (
      <div className="row portfolio-items">
        {this.props.portfolioDetails.images.map(object => (
          <div className="col-lg-6" key={object.slideLocation}>
            <PortfolioItem
              elements={this.props.portfolioDetails.elements}
              obj={object}
              displayGallery={this.props.displayGallery}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default PortfolioItems
