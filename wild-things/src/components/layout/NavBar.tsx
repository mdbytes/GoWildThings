import { NavLink } from 'react-router-dom';

const logo =
  'https://wildthings.wp.mdbytes.us/wp-content/uploads/2022/01/logo-small.png';

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark menu fixed-top">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-end" to="/">
            <img src={logo} alt="logo" />
            <span className="company-font">WildThings Photography</span>
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
                <NavLink id="homeLink" className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <NavLink id="aboutLink" className="nav-link" to="/about">
                  About
                </NavLink>
              </li>

              <li className="nav-item d-flex align-items-center ">
                <NavLink id="postsLink" className="nav-link" to="/posts">
                  Galleries
                </NavLink>
              </li>

              <li className="nav-item d-flex align-items-center ">
                <NavLink id="contactLink" className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item d-flex align-items-center ">
                <NavLink id="privacyLink" className="nav-link" to="/privacy">
                  Privacy
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
