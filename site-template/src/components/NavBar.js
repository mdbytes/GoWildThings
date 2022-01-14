import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const logo =
  "https://gowildthings.com/wp-content/uploads/2022/01/logo-small.png";

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
              <span className="logo-font">Wild Things Photography</span>
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
                    About
                  </NavLink>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <NavLink
                    id="testimonialsLink"
                    className="nav-link"
                    to="/adventures"
                    onClick={this.navClick}
                  >
                    Galleries
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
                    id="contactLink"
                    className="nav-link"
                    to="/contact"
                    onClick={this.navClick}
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    id="privacyLink"
                    className="nav-link"
                    to="/privacy"
                    onClick={this.navClick}
                  >
                    Privacy
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
