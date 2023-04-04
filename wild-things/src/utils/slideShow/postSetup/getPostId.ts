export const getPostId = (post: {
  id: string;
  content: { rendered: string };
}) => {
  let postIdString = 'post-' + post.id;

  return postIdString;
};
