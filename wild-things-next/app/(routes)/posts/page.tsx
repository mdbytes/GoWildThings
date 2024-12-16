import React from 'react';
import PostsPage from '../../_assets/components/posts/PostsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Posts |  Wild Things Nature Photography',
};

export default async function Posts() {
    return (
        <div className="posts">
            <PostsPage />
        </div>
    );
}
