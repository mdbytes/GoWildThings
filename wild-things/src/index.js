/**
 *
 * Filename:  index.js
 * Author:    Martin Dwyer
 * Purpose:   Launches the App component with React
 * Date Mod:  December 8, 2021
 *
 */

import React from "react";
import ReactDOM from "react-dom";

// Import styling, which is compiled from Sass - customized Bootsrap v5.3
import "glightbox/dist/css/glightbox.css";
import "./css/main.css";

// Import Bootstrap and GLightbox JavaScript
import "glightbox/dist/js/glightbox.min.js";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
