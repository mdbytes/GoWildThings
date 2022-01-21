import React, { Component } from "react";

import testimonialDetail from "./TestimonialDetail";
import testimonialSlide from "./TestimonialSlide";

class TestimonialSlider extends Component {
  componentDidMount() {
    document
      .querySelector(
        "#carouselExampleCaptions > div.carousel-inner > div:nth-child(1)"
      )
      .classList.add("active");
  }
  render() {
    return (
      <div className="row align-items-center">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonialDetail.map((obj) => (
              <div className="carousel-item" key={obj.key}>
                {testimonialSlide(obj)}
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="btn btn-outline-light"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <i className="bi bi-arrow-left"></i>
            </button>
            <button
              className="btn btn-outline-light"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialSlider;
