import React, { Component } from "react";
import PostsIntro from "./posts/PostsIntro";
import Posts from "./posts/Posts";

class PostsPage extends Component {
  componentDidMount() {
    console.log("PostsPage Props: ", this.props);
    document.querySelector("#homeLink").classList.remove("active");
  }

  componentDidUpdate() {}

  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <PostsIntro />
          <Posts posts={this.props.posts} />
        </div>
      </section>
    );
  }
}

export default PostsPage;
