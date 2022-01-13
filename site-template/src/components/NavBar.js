import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const logo =
  "https://dm2306files.storage.live.com/y4mQ04FmkR-A2CPGkLG63pCI1ploGZrL9iWtm9FZxrGgC7ICLG2-hOElR3PXh61tX40hujpWu02hER9rYQanUCh6iO44yMSojF1jIn0LkcFLERPJh7wGAyym8t_v9289VI8SB0tqgHmghntBUvNzbvnbJwcOTloK5vwaTXUCS7K0bauneH2HwrF_D0x9prAsU2C?width=128&height=150&cropmode=none";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.navClick = this.navClick.bind(this);
  }

  navClick = (evt) => {
    document.querySelector("#navToggler").click();
    if (evt.target.getAttribute("id") !== "homeLink") {
      document.querySelector("#homeLink").classList.remove("active");
    } else {
      document.querySelector("#homeLink").classList.add("active");
    }
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container">
            <NavLink className="navbar-brand d-flex align-items-end" to="/">
              <img src={logo} alt="logo" />
              <span className="logo-font">Penguin Tours, Ltd.</span>
            </NavLink>
            <button
              id="navToggler"
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="homeLink"
                    className="nav-link"
                    to="/"
                    onClick={this.navClick}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="servicesLink"
                    className="nav-link"
                    to="/services"
                    onClick={this.navClick}
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="portfolioLink"
                    className="nav-link"
                    to="/portfolio"
                    onClick={this.navClick}
                  >
                    Gallery
                  </NavLink>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="testimonialsLink"
                    className="nav-link"
                    to="/testimonials"
                    onClick={this.navClick}
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="faqLink"
                    className="nav-link"
                    to="/faq"
                    onClick={this.navClick}
                  >
                    Faq
                  </NavLink>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="contactLink"
                    className="nav-link"
                    to="/contact"
                    onClick={this.navClick}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
