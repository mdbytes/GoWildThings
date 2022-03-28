import React, { Component } from "react"
import PostsIntro from "./posts/PostsIntro"
import PostList from "./posts/PostList"

class Posts extends Component {
  componentDidMount() {
    console.log("Posts Props: ", this.props)
    document.querySelector("#homeLink").classList.remove("active")
  }

  componentDidUpdate() {}

  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <PostsIntro />
          <PostList posts={this.props.posts} />
        </div>
      </section>
    )
  }
}

export default Posts
