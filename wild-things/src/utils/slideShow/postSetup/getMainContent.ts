export const getMainContent = (post: {
  id: string;
  content: { rendered: string };
}) => {
  const content = post.content.rendered;
  const galleryBeginningIndex = content.indexOf(
    '<figure class="wp-block-image '
  );
  let mainContent = content
    .slice(0, galleryBeginningIndex)
    .replace('[', '')
    .replace(']', '');

  return mainContent;
};
