import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class LandingPage extends Component {
  componentDidMount() {
    console.log("landing page props", this.props);
  }

  render() {
    return (
      <section id="home" className="intro-section">
        <div className="container">
          <div className="col-lg-12 intros">
            <div id="intro">
              <h1 className="company-font">
                WildThings Photography
                <br />
              </h1>
              <span className="display-2--description lh-base">
                <div id="tagline">
                  Capturing pictures of wild things in their natural habitat
                </div>
                <br />
                <br />A site demo by{" "}
                <a href="https://mdbytes.com">
                  <span className="name-style">
                    <span className="logo-style">md </span>Bytes
                  </span>
                </a>
              </span>

              <NavLink
                className="rounded-pill btn-rounded"
                to={{
                  pathname: "/posts",
                  aboutProps: { posts: this.props.posts },
                }}
                exact
              >
                Galleries{" "}
                <span>
                  <i className="bi bi-images"></i>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
