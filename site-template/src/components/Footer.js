import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const penny =
  "https://gowildthings.com/wp-content/uploads/2022/01/logo-small.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.companyName = "Penguin Tours, Ltd.";
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
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex">
                  <div className="contact-box__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-phone-call"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <div id="call-number" className="contact-box__info">
                    <a href="#call-number" className="contact-box__info--title">
                      (319) 555-1212
                    </a>
                    <p className="contact-box__info--subtitle">Working Hours</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex">
                  <div className="contact-box__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail-opened"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="3 9 12 15 21 9 12 3 3 9" />
                      <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
                      <line x1="3" y1="19" x2="9" y2="13" />
                      <line x1="15" y1="13" x2="21" y2="19" />
                    </svg>
                  </div>
                  <div id="email-address" className="contact-box__info">
                    <a
                      href="#email-address"
                      className="contact-box__info--title"
                    >
                      info@info.com
                    </a>
                    <p className="contact-box__info--subtitle">
                      Response within 24 hrs
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 col-lg-4">
                <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex">
                  <div className="contact-box__icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-2"
                      viewBox="0 0 24 24"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="18" y1="6" x2="18" y2="6.01" />
                      <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                      <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                      <line x1="9" y1="4" x2="9" y2="17" />
                      <line x1="15" y1="15" x2="15" y2="20" />
                    </svg>
                  </div>
                  <div className="contact-box__info">
                    <a
                      href="https://www.google.com/maps/place/Czech+Village,+Cedar+Rapids,+IA/@41.9661634,-91.6628355,17z/data=!3m1!4b1!4m5!3m4!1s0x87e4f76a1694022d:0xf04f757e08d3a14c!8m2!3d41.9665611!4d-91.6608876"
                      className="contact-box__info--title"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cedar Rapids, Iowa
                    </a>
                    <p className="contact-box__info--subtitle">
                      Near Czech Village
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-flex align-content-center justify-content-center">
              <hr />
            </div>
          </div>

          <div className="container footer-middle">
            <div className="row text-white justify-content-center ">
              <div className="col-12 col-sm-4 col-lg-4">
                <div className="footer-sm">
                  <h5 className="">Social Media Links</h5>
                  <p>Visit Today</p>

                  <div id="social-icons" className="row ">
                    <a
                      className="col"
                      href="http://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      className="col"
                      href="http://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      className="col"
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      className="col"
                      href="http://linkedin.com"
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
                <h5 className="">Wild Things Photography</h5>
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
                  <NavLink to="/services">About</NavLink>
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
                    &copy; Copyright 2021 {this.companyName} | Created by{" "}
                    <a
                      href="https:/mdbytes.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <span className="logo-style">md</span>
                      <span className="name-style">Bytes</span>
                    </a>
                  </div>
                  <div className="footer-bottom__copyright">
                    <br />
                    <p className="attribution">
                      Photos for this site were used without attribution under
                      either{" "}
                      <a
                        href="https://pixabay.com/service/license/"
                        alt="pixabay"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pixabay
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://www.manypixels.co/gallery"
                        alt="ManyPixels"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ManyPixels
                      </a>{" "}
                      licenses.
                    </p>
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
