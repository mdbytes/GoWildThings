import axios from "axios"

const getPosts = async dispatch => {
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
      console.log("posts", blogPosts)
    })
}

export default getPosts
