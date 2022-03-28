import React, { Component } from "react"

import { Link } from "gatsby"

const logo =
  "https://gowildthings.com/wp-content/uploads/2022/01/logo-small.png"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.navClick = this.navClick.bind(this)
  }

  navClick = evt => {
    document.querySelector("#navToggler").click()
    if (evt.target.getAttribute("id") !== "homeLink") {
      document.querySelector("#homeLink").classList.remove("active")
    } else {
      document.querySelector("#homeLink").classList.add("active")
    }
  }

  componentDidMount() {
    let pattern = /\/$/
    if (!pattern.test(window.location.href)) {
      document.querySelector("#homeLink").classList.remove("active")
    }
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
          <div className="container">
            <img src={logo} alt="logo" />
            <span className="company-font">WildThings Photography</span>

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
                  <Link
                    id="homeLink"
                    className="nav-link"
                    to="/"
                    onClick={this.navClick}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="servicesLink"
                    className="nav-link"
                    to="/about"
                    onClick={this.navClick}
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="testimonialsLink"
                    className="nav-link"
                    to="/posts"
                    onClick={this.navClick}
                  >
                    {" "}
                    Galleries{" "}
                  </Link>
                </li>

                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="contactLink"
                    className="nav-link"
                    to="/contact"
                    onClick={this.navClick}
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center ">
                  <Link
                    id="privacyLink"
                    className="nav-link"
                    to="/privacy"
                    onClick={this.navClick}
                  >
                    {" "}
                    Privacy{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
