import React, { Component } from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import selectPost from "../../api/selectPost"
import { useContext, useEffect } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const PostList = props => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const handleSelectPost = id => {
    selectPost(dispatch, parseInt(id), state.posts)
    window.location = "/post/" + id
  }

  return (
    <div id="adventures" className="service-objects">
      {props.posts.map(post => (
        <div className="row service-item-row" key={post.id}>
          <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
            <div className="services__content">
              <div className="icon fas fa-paper-plane d-block"></div>
              <h3 className="display-3--title">{post.title.rendered}</h3>
              <span className="lh-lg">{parse(post.excerpt.rendered)}</span>
              <div className="learn-btn">
                <button
                  onClick={() => handleSelectPost(post.id)}
                  exact
                  type="button"
                  className="rounded-pill btn-rounded border-primary"
                >
                  See More
                  <span>
                    <i className="bi bi-images"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
            <div className="services__pic">
              <div onClick={() => handleSelectPost(post.id)}>
                <img
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt="UI Design"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
