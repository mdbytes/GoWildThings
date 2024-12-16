import { Post } from '@/types';

export const getMainContent = (post: Post) => {
    const content = post.content.rendered;
    const galleryBeginningIndex = content.indexOf(
        '<figure class="wp-block-image '
    );
    const mainContent = content
        .slice(0, galleryBeginningIndex)
        .replace('[', '')
        .replace(']', '');

    return mainContent;
};
