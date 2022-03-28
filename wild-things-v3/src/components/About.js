import React, { Component } from "react";
import AboutIntro from "./about/AboutIntro";
import AboutContent from "./about/AboutContent";
class AboutPage extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <section id="about-page" className="about-page">
        <div className="container">
          <AboutIntro />
          <AboutContent />
        </div>
      </section>
    );
  }
}

export default AboutPage;
