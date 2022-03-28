import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

class Posts extends Component {
  componentDidMount() {
    console.log("adventures props", this.props);
  }

  render() {
    return (
      <div id="adventures" className="service-objects">
        {this.props.posts.map((post) => (
          <div className="row service-item-row" key={post.id}>
            <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
              <div className="services__content">
                <div className="icon fas fa-paper-plane d-block"></div>
                <h3 className="display-3--title">{post.title.rendered}</h3>
                <span className="lh-lg">{parse(post.excerpt.rendered)}</span>
                <div className="learn-btn">
                  <NavLink
                    to={`/post/${post.id}`}
                    exact
                    type="button"
                    className="rounded-pill btn-rounded border-primary"
                  >
                    See More
                    <span>
                      <i className="bi bi-images"></i>
                    </span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
              <div className="services__pic">
                <NavLink to={`/post/${post.id}`} exact>
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt="UI Design"
                    className="img-fluid"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
