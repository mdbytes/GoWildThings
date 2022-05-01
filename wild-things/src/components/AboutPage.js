import React, { Component } from "react";
import AboutIntro from "./about/AboutIntro";
import AboutContent from "./about/AboutContent";
import SeoOptimized from "./SeoOptimized";
class AboutPage extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <section id="about-page" className="about-page">
        <SeoOptimized title="About Martin & Rose" />
        <div className="container">
          <AboutIntro />
          <AboutContent />
        </div>
      </section>
    );
  }
}

export default AboutPage;
