import { BlogContext } from "../../context/BlogContext";
import React, { Component, useState, useContext } from "react";

import adventure from "./Adventure";
import adventuresDetail from "./AdventuresDetail";
const axios = require("axios");

class Adventures extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    if (this.props) {
      console.log("props", this.props.posts);
    } else {
      axios
        .get("https://gowildthings.com/wp-json/wp/v2/posts?_embed")
        .then((response) => {
          console.log("axios called");
          let blogPosts = response.data;
          for (let blog of blogPosts) {
            blog.excerpt.rendered = blog.excerpt.rendered
              .replace("<p>", "")
              .replace("</p>", "")
              .replace("[", "")
              .replace("]", "")
              .replace("&nbsp;", " ")
              .replace("&#8217;", "'")
              .replace("&hellip", "");
          }
          this.props.posts = blogPosts;
        });
    }
  }

  componentDidUpdate() {
    console.log("state:", this.state.posts);
  }

  render() {
    return (
      <div id="adventures" className="service-objects">
        {this.props.posts.map((post) => (
          <div className="row service-item-row" key={post.id}>
            {adventure(post)}
          </div>
        ))}
      </div>
    );
  }
}

export default Adventures;
