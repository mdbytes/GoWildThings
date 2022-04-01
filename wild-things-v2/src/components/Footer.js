import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const penny =
  "https://wildthings.wp.mdbytes.us/wp-content/uploads/2022/01/logo-small.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.companyName = "WildThings Photography";
    this.backToTop = this.backToTop.bind(this);
  }

  backToTop = () => {
    console.log("back to top");
    window.scrollTo(0, 0);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
              </div>

              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
              </div>

              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
              </div>
            </div>
            <div className="row d-flex align-content-center justify-content-center"></div>
          </div>

          <div className="container footer-middle">
            <div className="row text-white justify-content-center ">
              <div className="col-12 col-sm-4 col-lg-4">
                <div className="footer-sm">
                  <h5 className="text-center">Social Media Links</h5>
                  <p>Visit Today</p>

                  <div id="social-icons" className="row ">
                    <a
                      className="col"
                      href="https://www.facebook.com/mdbytes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      className="col"
                      href="https://twitter.com/mdbytes"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      className="col"
                      href="https://github.com/martindwyer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      className="col"
                      href="https://www.linkedin.com/in/mdbytes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a
                      className="col"
                      href="http://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div id="mascot-container" className="col-12 col-sm-4 col-lg-4">
                <h5 className="company-font text-center">
                  WildThings Photography
                </h5>
                <br />
                <img src={penny} alt="Baby Tux" className="img-fluid" />

                <p>
                  Connecting People <br />
                  and Nature
                </p>
              </div>

              <div id="site-menu" className="col-12 col-sm-4 col-lg-4">
                <h5>Quick Links</h5>
                <div id="quick-links">
                  <NavLink to="/">Home</NavLink>
                  <span>|</span>
                  <NavLink to="/about">About</NavLink>
                  <span>|</span>
                  <NavLink to="/posts">Galleries</NavLink>
                  <span>|</span>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="container">
              <div className="row text-center text-white">
                <div className="col-12">
                  <div className="footer-bottom__copyright">
                    &copy; Copyright 2022{" "}
                    <span className="company-font">{this.companyName}</span> |
                    Created by{" "}
                    <a
                      href="https://mdbytes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <span className="logo-style">md</span>
                      <span className="name-style">Bytes</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <button
          onClick={this.backToTop}
          className="shadow btn rounded-circle back-to-top"
        >
          <i className="bi bi-chevron-up"></i>
        </button>
      </div>
    );
  }
}

export default Footer;
