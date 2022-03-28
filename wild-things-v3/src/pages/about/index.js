import React from "react"
import Layout from "../../components/Layout"
import About from "../../components/About"
import Seo from "../../components/Seo"

import getPosts from "../../api/getPosts"
import { useContext, useEffect } from "react"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../../context/GlobalContextProvider"

const AboutPage = () => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  useEffect(() => {
    if (state.posts.length === 0) {
      getPosts(dispatch)
    }
  }, [])

  console.log("state", state)
  console.log("posts", state.posts)
  return (
    <Layout>
      <Seo title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
