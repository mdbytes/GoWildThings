import axios from 'axios';

export async function getAllPosts() {
    const url = process.env.WP_REST_GET_POSTS_URL as string;
    const result = await axios.get(url);

    return result.data;
}

export async function getPostBySlug(slug: string) {
    const url = process.env.WP_REST_GET_POST_WITH_SLUG_URL as string;
    const result = await axios.get(`${url}${slug}`);

    return result.data[0];
}

export async function getFeaturedPosts() {
    const url = process.env.WP_REST_GET_POSTS_URL as string;
    const result = await axios.get(url);

    const featuredPosts = [];

    for (const post of result.data) {
        if (post.tags.includes(123)) {
            featuredPosts.push(post);
        }
    }

    return featuredPosts;
}
