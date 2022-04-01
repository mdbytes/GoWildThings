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
    const getPosts = async () => {
      let blogPosts = [];
      let query = `
      query AllPostQuery {
        posts {
          nodes {
            id
            slug
            postId
            title(format: RENDERED)
            content(format: RENDERED)
            excerpt(format: RENDERED)
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }`;
      const response = await axios.post(
        "https://wildthings.wp.mdbytes.us/graphql",

        { query: query },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("response", response);
      blogPosts = response.data.data.posts.nodes;
      console.log("blogposts", blogPosts);
      if (blogPosts) {
        for (let blog of blogPosts) {
          blog.excerpt = blog.excerpt
            .replace(/(^"|"$)/g, "")
            .replace("[", "")
            .replace("]", "");
        }
      }

      this.setState({ posts: blogPosts });
      console.log("state", this.state);
    };

    getPosts();
  }

  render() {
    if (this.state.posts !== []) {
      return (
        <section
          id="services"
          className="services"
          style={{ minHeight: "100vh" }}
        >
          <SeoOptimized title="Nature Adventures" />
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
