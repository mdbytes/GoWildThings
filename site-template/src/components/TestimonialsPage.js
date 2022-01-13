import React, { Component } from "react";
import TestimonialSlider from "./testimonials/TestimonialSlider";

const logoTest =
  "https://dm2306files.storage.live.com/y4mQ04FmkR-A2CPGkLG63pCI1ploGZrL9iWtm9FZxrGgC7ICLG2-hOElR3PXh61tX40hujpWu02hER9rYQanUCh6iO44yMSojF1jIn0LkcFLERPJh7wGAyym8t_v9289VI8SB0tqgHmghntBUvNzbvnbJwcOTloK5vwaTXUCS7K0bauneH2HwrF_D0x9prAsU2C?width=128&height=150&cropmode=none";

class Testimonials extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <div>
        <section className="testimonials" id="testimonials">
          <div id="testimonials-bookmark" className="row"></div>
          <div className="container">
            <div className="row text-center text-white">
              <h1 className="display-3 fw-bold">
                Testimonials
                <img src={logoTest} alt="logo" />
              </h1>
              <hr className="mx-auto" />
              <p className="lead pt-1">what our clients are saying</p>
            </div>
            <TestimonialSlider />
          </div>
        </section>
      </div>
    );
  }
}

export default Testimonials;
