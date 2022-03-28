import React from "react"
import Layout from "../../components/Layout"
import About from "../../components/About"
import Seo from "../../components/Seo"

import preparePost from "../../api/preparePost"
import getPosts from "../../api/getPosts"
import { useContext, useEffect } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const PostPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (state.posts.length === 0) {
      getPosts(dispatch)
    }
  }, [])
  let postId = state.selectedPostId
  let post = state.posts.filter(post => post.id === postId)
  console.log("post", post[0])
  console.log("state", state)
  console.log(post[0])

  let portfolioDetails = preparePost(post[0])

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
