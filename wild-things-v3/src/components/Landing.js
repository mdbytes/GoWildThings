import React, { Component } from "react"
import { Link } from "gatsby"

class Landing extends Component {
  componentDidMount() {
    console.log("landing page props", this.props)
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

              <Link to="/posts">
                Galleries{" "}
                <span>
                  <i className="bi bi-images"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing
