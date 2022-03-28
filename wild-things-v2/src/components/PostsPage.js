import React, { Component } from "react";
import PostsIntro from "./posts/PostsIntro";
import Posts from "./posts/Posts";
import axios from "axios";
import { WP_REST_GET_POSTS_URL } from "../config/keys";
import SeoOptimized from "./SeoOptimized";
class PostsPage extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    let blogPosts = [];
    axios.get(WP_REST_GET_POSTS_URL).then((response) => {
      blogPosts = response.data;
      for (let blog of blogPosts) {
        blog.excerpt.rendered = blog.excerpt.rendered
          .replace(/(^"|"$)/g, "")
          .replace("[", "")
          .replace("]", "");
      }
      this.setState({ posts: blogPosts });
      console.log("state", this.state);
    });
  }

  componentDidUpdate() {}

  render() {
    if (this.state.posts !== []) {
      return (
        <section
          id="services"
          className="services"
          style={{ minHeight: "100vh" }}
        >
          <SeoOptimized title="Galleries" />
          <div className="container">
            <PostsIntro />
            <Posts posts={this.state.posts} />
          </div>
        </section>
      );
    } else {
      return (
        <section id="services" className="services">
          <div className="container">
            {" "}
            <div
              style={{
                height: "30vh",
                marginTop: 175,
                color: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              id="locating-post"
            >
              Retrieving Posts...
            </div>
          </div>
        </section>
      );
    }
  }
}

export default PostsPage;
