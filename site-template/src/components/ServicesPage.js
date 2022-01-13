import React, { Component } from "react";
import ServicesIntro from "./services/ServicesIntro";
import Services from "./services/Services";
class ServicesPage extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
  }

  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <ServicesIntro />
          <Services />
        </div>
      </section>
    );
  }
}

export default ServicesPage;
