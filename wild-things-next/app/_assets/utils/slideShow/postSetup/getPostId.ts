import { Post } from '@/types';

export const getPostId = (post: Post) => {
    const postIdString = 'post-' + post.id;

    return postIdString;
};
