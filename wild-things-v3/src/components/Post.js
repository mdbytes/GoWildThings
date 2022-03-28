import PortfolioItems from "./post/PortfolioItems"
import React from "react"
import parse from "html-react-parser"

const Post = props => {
  console.log(props)
  return (
    <section id="post" className="post">
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="display-3 fw-bold text-capitalize">
            {props.post.title.rendered}
          </h1>
          <div className="heading-line"></div>
        </div>
      </div>

      <div
        className="container post-text"
        id={props.portfolioDetails.postIdString}
      >
        {parse(props.portfolioDetails.mainContent)}
      </div>

      <div className="container portfoio">
        <p className="mobilePresent">
          Tap on any image to display in full screen gallery.
        </p>
        <p className="largePresent">
          Hover over any image to display in full screen gallery.
        </p>
        <PortfolioItems
          portfolioDetails={this.props.portfolioDetails}
          displayGallery={this.props.displayGallery}
        />
      </div>
    </section>
  )
}

export default Post
