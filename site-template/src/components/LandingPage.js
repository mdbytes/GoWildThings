import React, { Component } from "react";
import GLightbox from "glightbox";
const videoImage =
  "https://dm2306files.storage.live.com/y4m3tcDl--fSr4DTBJ0Qss5EZmsbpJ_8U-2vkxv_rCDSE8wue9SZKHMhkmWI5r_OZM5avJf6-B3NVWlkFcDl5iVKK65q9S91AOiPMncDGEnb0cUnl-rDb7X1IxEIWKWHe-6dV47VvuMzHdq60agVXsaLP4dhWMR0u14tOiMd9U66idN5mwI6AxJ_Sp-BodWr7gy?width=550&height=400&cropmode=none";
const nameLogo =
  "https://dm2306files.storage.live.com/y4mZIW982j-mKInSEhnLWz57VvUv0BFOegVtCMG_3d9mB7HpDrx0p6r3WUmAoakQy-Gyv9SrI656yWkxTq9mBGZy9-4rpAMwXdeTx8FLZhllm0CVcUVAwiQ7zvGHo4MB05Wn0BA3cX-Z3-fJB6wWxjcNbwqm0nl0UbIa5r1_YrGbL7xJ4-pupJpxn2pgISBtQsM?width=1112&height=157&cropmode=none";
const tagLine =
  "https://dm2306files.storage.live.com/y4mdTmQtf73acqe1VlzBVKMh_bYxWLxl14bcZlXYjKro2z6aiLHhaQaFDdihMPXHb1Acid6rEzVItwMXOzvgwcKb9dGlI0Y6BN5Vs1MSPP1OyUn2sli60X7CxZAue5NUpBkhP_QAtm8dCXX2LZIWJcInlO185rbGJh5MGTvZ9GhU4s1bAa1Kl3mxoZjFDs05Ytl?width=1029&height=132&cropmode=none";

class LandingPage extends Component {
  componentDidMount() {
    const lightbox = GLightbox({
      href: "https://youtu.be/O8qilxaBR20",
      type: "video",
      source: "youtube", //vimeo, youtube or local
      width: 900,
      autoPlayVideos: "true",
    });
  }

  render() {
    return (
      <section id="home" className="intro-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 intros">
              <h1 className="display-2">
                <span>
                  <img src={nameLogo} alt="name logo" />
                </span>
                <br />
              </h1>
              <div id="intro">
                <span className="display-2--description lh-base">
                  <div id="tagline">
                    <img src={tagLine} alt="tag line" />
                  </div>
                  <br />
                  <br />A site demo by{" "}
                  <a href="https://mdbytes.com">
                    <span className="name-style">
                      <span className="logo-style">md </span>Bytes
                    </span>
                  </a>
                </span>

                <button
                  type="button"
                  className="glightbox rounded-pill btn-rounded"
                >
                  Penguin Video{" "}
                  <span>
                    <i className="bi bi-play-fill"></i>
                  </span>
                </button>
              </div>
            </div>

            <div className="col-lg-6 intros">
              <div className="video-box">
                <img
                  src={videoImage}
                  alt="video illustration"
                  className="img-fluid"
                />

                <button className="glightbox">
                  <span>
                    <i className="bi bi-play-circle-fill"></i>
                  </span>
                  <span className="border-animation border-animation--border-1"></span>
                  <span className="border-animation border-animation--border-2"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LandingPage;
