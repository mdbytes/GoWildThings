import axios from 'axios';
import { WP_REST_GET_POSTS_URL } from '../../config';

export const getPosts = async () => {
  let blogPosts = [];

  const response = await axios.get(WP_REST_GET_POSTS_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  blogPosts = response.data;
  if (blogPosts) {
    for (let blog of blogPosts) {
      blog.excerpt = blog.excerpt.rendered
        .replace(/(^"|"$)/g, '')
        .replace('[', '')
        .replace(']', '');
    }
  }

  return blogPosts;
};

export const getPost = async (id: string) => {
  let query = `${WP_REST_GET_POSTS_URL}/${id}`;

  const response = await axios.get(query, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  response.data.excerpt = response.data.excerpt.rendered
    .replace(/(^"|"$)/g, '')
    .replace('[', '')
    .replace(']', '');

  return response.data;
};
