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
import axios from "axios";

// Import styling, which is compiled from Sass - customized Bootsrap v5.3
import "glightbox/dist/css/glightbox.css";
import "./css/main.css";

// Import Bootstrap and GLightbox JavaScript
import "glightbox/dist/js/glightbox.min.js";
import "bootstrap/dist/js/bootstrap.js";

import App from "./App";

import { WP_REST_GET_POSTS_URL } from "./config/keys";

const startApp = async () => {
  let blogPosts = [];
  await axios.get(WP_REST_GET_POSTS_URL).then((response) => {
    console.log("axios called");
    blogPosts = response.data;
    for (let blog of blogPosts) {
      blog.excerpt.rendered = blog.excerpt.rendered
        .replace(/(^"|"$)/g, "")
        .replace("[", "")
        .replace("]", "");
    }

    ReactDOM.render(
      <React.StrictMode>
        <App posts={blogPosts} />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });
};

startApp();
