import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Landing from "../components/Landing"

import getPosts from "../api/getPosts"
import { useContext, useEffect } from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const IndexPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (state.posts.length === 0) {
      getPosts(dispatch)
    }
  }, [])
  console.log("state", state)
  return (
    <Layout>
      <Seo title="Home" />
      <Landing posts={state.posts} />
    </Layout>
  )
}

export default IndexPage
