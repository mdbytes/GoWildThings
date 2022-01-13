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

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
