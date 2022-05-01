import React, { Component } from "react";

class PostsIntro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row text-center">
          <h1 className="display-3 fw-bold">Featured Galleries</h1>
          <div className="heading-line mb-1"></div>
        </div>

        <div id="services-intro-overview" className="row pt-2 mt-1 mb1">
          <p>
            Welcome to our featured galleries. You will be able to browse
            through descriptions of our wild things galleries. We hope you take
            a minute to enjoy each and every one.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default PostsIntro;
