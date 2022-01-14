/**
 *
 * Filename:  App.js
 * Author:     Martin Dwyer
 * Purpose:   Sets up main App which is rendered in index.js
 *            Imports main functional componets and routes pages
 *            to components with BrowserRouter
 * Date Mod:  December 8, 2021
 *
 */

// Import React components first
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import main site components
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import ServicesPage from "./components/ServicesPage";
import AdventuresPage from "./components/AdventuresPage";
import PortfolioPage from "./components/PortfolioPage";
import ContactPage from "./components/ContactPage";
import PrivacyPage from "./components/PrivacyPage";
import Footer from "./components/Footer";

// Import styling, which is compiled from Sass - customized Bootsrap v5.3
import "glightbox/dist/css/glightbox.css";
import "./css/main.css";

// Import Bootstrap and GLightbox JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "glightbox/dist/js/glightbox.min.js";

/**
 * Router set up to handle traffic on the website.
 * Exact paths result in the App routing to each route accurately
 * to the correct component.
 *
 * @returns primary router component of the App
 */
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/adventures" component={AdventuresPage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
