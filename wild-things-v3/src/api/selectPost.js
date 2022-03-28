const selectPost = async (dispatch, id, posts) => {
  console.log("sp id", id)
  console.log("sp posts", posts)
  const post = posts.filter(post => post.id === id)
  console.log(post)
  dispatch({ type: "SELECT_POST", payload: post.id })
}

export default selectPost
