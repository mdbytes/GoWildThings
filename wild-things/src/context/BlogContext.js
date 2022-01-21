import React from "react";
import axios from "axios";
const { useState, createContext } = React;

export const BlogContext = createContext();

export const BlogProvider = async (props) => {
  const [posts, setPosts] = useState([{ id: 99999, title: "None" }]);

  return (
    <BlogContext.Provider value={[posts, setPosts]}>
      {props.children}
    </BlogContext.Provider>
  );
};
