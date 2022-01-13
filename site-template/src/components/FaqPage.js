import React, { Component } from "react";
import FaqAccordion from "./faq/FaqAccordion";

const logoFAQ =
  "https://dm2306files.storage.live.com/y4mQ04FmkR-A2CPGkLG63pCI1ploGZrL9iWtm9FZxrGgC7ICLG2-hOElR3PXh61tX40hujpWu02hER9rYQanUCh6iO44yMSojF1jIn0LkcFLERPJh7wGAyym8t_v9289VI8SB0tqgHmghntBUvNzbvnbJwcOTloK5vwaTXUCS7K0bauneH2HwrF_D0x9prAsU2C?width=128&height=150&cropmode=none";

class FaqPage extends Component {
  componentDidMount() {
    document.querySelector("#homeLink").classList.remove("active");
    document.querySelector("#heading1 > button").click();
  }

  render() {
    return (
      <section id="faq" className="faq">
        <div className="container">
          <div className="row text-center">
            <h1 className="display-3 fw-bold text-uppercase">
              faq
              <img src={logoFAQ} alt="logo" />
            </h1>
            <div className="heading-line"></div>
            <p className="lead">
              Frequently asked questions, getting answers in advance.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>
    );
  }
}

export default FaqPage;
