import React from "react"
import Layout from "../../components/Layout"
import Posts from "../../components/Posts"
import Seo from "../../components/Seo"

import getPosts from "../../api/getPosts"
import { useContext, useEffect } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const PostsPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  useEffect(() => {}, [])

  console.log("state", state)
  console.log("posts", state.posts)
  return (
    <Layout>
      <Seo title="Galleries" />
      <Posts posts={state.posts} />
    </Layout>
  )
}

export default PostsPage
