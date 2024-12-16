import { getAllPosts, getPostBySlug } from '../../../_assets/utils/wp-rest-api';
import { Metadata } from 'next';
import React from 'react';
import { Post } from '../../../../types';
import { PostContent } from '@/app/_assets/components/post/PostContent';

export async function generateStaticParams() {
    const posts: Post[] = await getAllPosts();

    const staticParams: { slug: string }[] | undefined = [];

    for (const post of posts) {
        staticParams.push({ slug: post.slug });
    }

    return staticParams;
}

export const metadata: Metadata = {
    title: 'Post |  Wild Things Nature Photography',
};

export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post: Post = await getPostBySlug(slug);
    console.log(post);

    if (typeof window !== 'undefined') {
        return (
            <PostContent
                post={post}
                slug={post['slug']}
                id={Number(post['id'])}
            />
        );
    } else {
        return <div>Loading...</div>;
    }
}
