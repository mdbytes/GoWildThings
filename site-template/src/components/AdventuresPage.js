import React, { Component } from "react";
import AdventuresIntro from "./adventures/AdventuresIntro";
import Adventures from "./adventures/Adventures";
import axios from "axios";
class AdventuresPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.posts) {
      // Do nothing
    } else if (this.props.location.aboutProps.posts) {
      this.props.posts = this.props.location.aboutProps.posts;
    } else {
      console.log("getting posts from server...");
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
    document.querySelector("#homeLink").classList.remove("active");
  }

  componentDidUpdate() {}

  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <AdventuresIntro />
          <Adventures posts={this.props.posts} />
        </div>
      </section>
    );
  }
}

export default AdventuresPage;
