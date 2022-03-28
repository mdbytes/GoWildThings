import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import SeoOptimized from "./SeoOptimized";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm("service_998jv3x", "template_gkvwqkc", e.target).then(
      (result) => {
        document.querySelector("#success-message").innerHTML =
          "Thanks!  We will reply to your message within 24 hours.";
        document.getElementById("form").reset();
      },
      (error) => {
        document.querySelector("#error-message").innerHTML =
          "A problem was incurred sending your message.  Please try again later.";
        document.getElementById("form").reset();
      }
    );
  }

  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  componentWillUnmount() {}

  render() {
    return (
      <section id="contact" className="get-started">
        <SeoOptimized title="Contact" />
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-capitalize">
              Contact Us Today
            </h1>
            <div className="heading-line"></div>
            <p className="lh-lg"></p>
          </div>

          <div className="row text-white">
            <div className="col-12 col-lg-6 ">
              <div className="cta-info w-100">
                <h4 className="display-3--title mb-5">
                  WildThings Photography
                </h4>
                <p className="lh-lg">
                  We strive to provide here on the website is a flavor of the
                  photos we have gathered from exciting natural wildlife
                  habitats.
                </p>
                <h3 className="display-3--brief">
                  You might also be interested in:{" "}
                </h3>
                <ul className="cta-info__list">
                  <li>High quality digital images.</li>
                  <li>Additional preview images.</li>
                  <li>Travel recommendations for the sites we have visited.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="form w-100 pb-2">
                <h4 className="display-3--title mb-5">Plan Your Tour</h4>
                <form id="form" className="row">
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      id="inputFirstName"
                      className="form-control form-control-lg shadow"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="inputLastName"
                      className="form-control form-control-lg shadow"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      id="inputEmailAddress"
                      className="form-control form-control-lg shadow"
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <textarea
                      placeholder="Describe what you want to see, where you want to go.."
                      name="message"
                      id="message"
                      rows="8"
                      className="form-control form-control-lg shadow"
                    ></textarea>
                  </div>
                  <div className="text-center d-grid mt-1">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      type="button"
                      className="btn btn-secondary rounded-pill pt-3 pb-3"
                    >
                      Submit <i className="fas fa-paper-plane"></i>
                    </button>
                    <div id="success-message"></div>
                    <div id="error-message"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Message Not Submitted
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-black">
                  <p>
                    Thanks for visiting WildThings Photography, a site used for
                    demonstration purposes by MD Bytes.
                  </p>

                  <p>
                    If you would like to send us a message, visit us at: <br />
                    <br />{" "}
                    <a
                      href="https://mdbytes.com/contact"
                      target="_blank"
                      rel="noreferrer"
                    >
                      MD Bytes Contact Page{" "}
                    </a>
                  </p>

                  <p>We look forward to hearing from you!</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactPage;
