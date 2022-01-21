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
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import EmailJs for initiation
import emailjs from "@emailjs/browser";
import { EMAILJS_USER } from "./config/keys";

// Import main site components
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import PostsPage from "./components/PostsPage";
import PostPage from "./components/PostPage";
import ContactPage from "./components/ContactPage";
import PrivacyPage from "./components/PrivacyPage";
import Footer from "./components/Footer";

/**
 * Router set up to handle traffic on the website.
 * Exact paths result in the App routing to each route accurately
 * to the correct component.
 *
 * @returns primary router component of the App
 */
class App extends Component {
  componentDidMount() {
    console.log("app props", this.props.posts);
  }

  render() {
    emailjs.init(EMAILJS_USER);
    return (
      <div className="App">
        <Router>
          <ScrollToTop />
          <NavBar />
          <Route exact path="/">
            <LandingPage posts={this.props.posts} />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/posts">
            <PostsPage posts={this.props.posts} />
          </Route>
          <Route exact path="/post" posts={this.props.posts}>
            <PostPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/privacy">
            <PrivacyPage />
          </Route>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
