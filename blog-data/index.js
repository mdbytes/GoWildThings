var file = require("file-system");
const axios = require("axios");

const getBlogPosts = () => {
  let blogPosts = [];
  axios
    .get("https://gowildthings.com/wp-json/wp/v2/posts?_embed")
    .then((response) => {
      blogPosts = response.data;
      for (let blog of blogPosts) {
        blog.excerpt.rendered = blog.excerpt.rendered
          .replace(/(^"|"$)/g, "")
          .replace("[", "")
          .replace("]", "");
      }
      require("file-system").writeFile(
        "./blog-data",
        JSON.stringify(blogPosts),
        function (err) {
          if (err) {
            console.error("crap happens");
          }
        }
      );
    });
};

getBlogPosts();
