import React, { Component } from "react";
import GLightbox from "glightbox";
import { NavLink } from "react-router-dom";
const axios = require("axios");
class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const lightbox = GLightbox({
      href: "https://youtu.be/O8qilxaBR20",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoPlayVideos: "true",
    });

    if (this.props.posts) {
      this.setState({
        posts: this.props.posts,
      });
    } else {
      axios
        .get("https://gowildthings.com/wp-json/wp/v2/posts?_embed")
        .then((response) => {
          this.setState({ posts: response.data });
        });
    }
  }

  componentDidUpdate() {
    console.log("state:", this.state.posts);
  }

  render() {
    return (
      <section id="home" className="intro-section">
        <div className="container">
          <div className="col-lg-12 intros">
            <div id="intro">
              <h1>
                Wild Things Nature Photography
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
                  pathname: "/adventures",
                  aboutProps: { posts: this.state.posts },
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
