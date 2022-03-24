import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class AboutContent extends Component {
  render() {
    return (
      <div id="about-us" className="container">
        <div id="aboutUsCarousel" className="row">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://gowildthings.com/wp-content/themes/wildthing/images/slide1_1600x533.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Breath Taking Destinations</h3>
                <p>Rocky Mountains near Walden, Colorado</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://gowildthings.com/wp-content/themes/wildthing/images/slide2_1600x533.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Once Endangered Animals</h3>
                <p>From respectful distance, Yellowstone, Wyoming</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://gowildthings.com/wp-content/themes/wildthing/images/slide3_1600x533.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Alpine Meadows</h3>
                <p>From Rocky Mountain National Park</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://gowildthings.com/wp-content/themes/wildthing/images/slide4_1600x533.jpg"
                alt="Fourth slide"
              />

              <Carousel.Caption>
                <h3>Wildlife Encounters</h3>
                <p>State Forest State Park, Colorado</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div id="fourth_row" className="row">
          <div className="col-lg-6">
            <div id="about_us" className="card">
              <div className="card-body">
                <h3 className="card-title">Martin & Rose</h3>
                <p className="card-text">
                  Martin Dwyer's passion is for nature and wildlife, his
                  occupation is website development. Over the years, the digital
                  photography from his nature adventues provides great content
                  for website development. This site is both an example of
                  Martin's development work and a look inside his nature
                  adventures with his business partner and wife, Rose.
                  <br /> <br />
                  This website shares stories and pictures from their wildlife
                  adventures targeted at capturing digital images of wild things
                  in nature.. Together, they have visited some of the most
                  exciting nature spots in North America.
                  <br />
                  <br />
                  For more information about Martin, Rose, or any place they
                  have visited, please contact them at the contact page on this
                  website.
                  <br />
                  <br />
                  If you are interested in more information about website
                  development or web applications, please visit{" "}
                  <a href="https://mdbytes.com">MD Bytes</a> and contact Martin.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div id="about_us_image" className="card">
              <div className="card-body">
                <h3 className="card-title">From State Forest State Park</h3>
                <p className="card-subtitle">
                  Lake Agnes, Colorado, Elevation 10,666'
                </p>
                <p className="p-center-image">
                  <img
                    src="https://gowildthings.com/wp-content/uploads/2019/01/000-1.jpg"
                    alt="about us"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="feature_photo" className="row">
          <h3 className="title">From Grand Teton National Park</h3>
          <p className="subtitle">Jenny Lake Trail Head, Wyoming</p>
          <p className="p-full-image">
            <img
              src="https://gowildthings.com/wp-content/uploads/2022/01/gtnp-scaled.jpeg"
              alt="feature"
            />
          </p>
        </div>

        <div id="sixth_row" className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3 className="title">Alpine Ridge Trail</h3>
                <p className="subtitle">Rocky Mountain National Park</p>
                <p className="p-center-image">
                  <img
                    src="https://gowildthings.com/wp-content/uploads/2022/01/rmnp-1.jpeg"
                    alt="about us"
                    height="300"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h3 className="title">Geothermals</h3>
                <p className="subtitle">Yellowstone National Park</p>
                <p className="p-center-image">
                  <img
                    src="https://gowildthings.com/wp-content/uploads/2022/01/geoynp.jpeg"
                    alt="about us"
                    height="300"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
