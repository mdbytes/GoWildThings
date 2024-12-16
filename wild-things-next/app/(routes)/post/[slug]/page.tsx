import { getPostBySlug } from '../../../_assets/utils/wp-rest-api';
import React from 'react';
import { Post } from '../../../../types';
import { PostContent } from '@/app/_assets/components/post/PostContent';

export default async function page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const post: Post = await getPostBySlug(slug);

    return <PostContent post={post} />;
}
