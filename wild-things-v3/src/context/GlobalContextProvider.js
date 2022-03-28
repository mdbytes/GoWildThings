import React, { useReducer, useEffect } from "react"
import axios from "axios"

export const GlobalStateContext = React.createContext()

export const GlobalDispatchContext = React.createContext()

const initialState = {
  theme: "light",
  posts: [],
  selectedPostId: 1,
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }

    case "GET_POSTS":
      return { ...state, posts: action.payload }

    case "SELECT_POST":
      console.log("selected post", action.payload)
      return { ...state, selectedPostId: action.payload }

    default:
      throw new Error("Bad Action Type")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(async () => {
    const getBlogPosts = async () => {
      let blogPosts = []
      axios
        .get("https://gowildthings.com/wp-json/wp/v2/posts?_embed")
        .then(response => {
          blogPosts = response.data
          for (let blog of blogPosts) {
            blog.excerpt.rendered = blog.excerpt.rendered
              .replace(/(^"|"$)/g, "")
              .replace("[", "")
              .replace("]", "")
          }

          dispatch({ type: "GET_POSTS", payload: blogPosts })
        })
    }

    await getBlogPosts()
  }, [])

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
