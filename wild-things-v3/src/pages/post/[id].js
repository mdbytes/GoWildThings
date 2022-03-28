import React from "react"
import Post from "../../components/Post"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import GLightbox from "glightbox"

import getPosts from "../../api/getPosts"
import preparePost from "../../api/preparePost"

import selectPost from "../../api/selectPost"
import { useContext, useEffect } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const PostPage = ({ location }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  console.log("state", state)
  let elements = []
  let images = []
  let portfolioDetails = {}
  portfolioDetails.elements = elements
  portfolioDetails.images = images

  const displayGallery = evt => {
    console.dir("display", evt.target)

    let targetButtonClass = evt.target.className

    let startingSlide = 0

    startingSlide = Number.parseInt(
      targetButtonClass.replace("photo-", "").replace(" glightbox", "")
    )

    const myGallery = GLightbox({
      elements: portfolioDetails.elements,
      autoplayVideos: false,
      startAt: startingSlide,
      openEffect: "fade",
      closeEffect: "fade",
      zoomable: "true",
    })

    myGallery.on("close", () => {
      console.log("closing gallery")
      myGallery.reload()
    })

    console.log("opening gallery")
    myGallery.open()
  }

  useEffect(() => {
    if (state.posts.length === 0) {
      getPosts(dispatch)
    }
  }, [state])

  let postId = parseInt(
    location.pathname.slice(location.pathname.indexOf("/path/" + 6))
  )
  let post = state.posts.filter(post => post.id === postId)
  console.log("post", post[0])
  console.log("state", state)
  console.log(post[0])

  portfolioDetails = preparePost(post[0])

  if (post[0].id) {
    return (
      <Layout>
        <Seo title="Post" />
        <h1
          style={{
            marginTop: 175,
            height: "40vh",
            fontSize: 56,
            color: "white",
          }}
        >
          Find Me?? {post[0].id}
        </h1>
        {/* <Post
          post={post[0]}
          displayGallery={displayGallery}
          portfolioDetails={portfolioDetails}
        /> */}
      </Layout>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default PostPage
