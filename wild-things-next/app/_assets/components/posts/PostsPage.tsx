import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';
import Image from 'next/image';
import { getAllPosts } from '../../utils/wp-rest-api';
import { PostsIntro } from './PostsIntro';
import { Post } from '../../../../types';

export default async function PostsPage() {
    const posts = await getAllPosts();

    for (const post of posts) {
        if (!post.excerpt.rendered) {
            post.excerpt.rendered = post.content.rendered.slice(0, 250);
        }
    }

    return (
        <div className="articles" style={{ paddingBottom: '4rem' }}>
            <div className="container">
                <PostsIntro />
                <div id="adventures" className="service-objects">
                    {posts.map((post: Post) => (
                        <div className="row service-item-row" key={post.id}>
                            <div className="col-lg-6 col-sm-12 col-xs-12  services-column">
                                <div className="services__pic">
                                    <Link href={'/post/' + post.slug} passHref>
                                        <Image
                                            layout="fixed"
                                            height={300}
                                            width={600}
                                            src={post['fimg_url']}
                                            alt="UI Design"
                                            className="img-fluid"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 col-xs-12 services-column">
                                <div className="services__content">
                                    <h3 className="display-3--title full-screen-title">
                                        {parse(post.title.rendered)}
                                    </h3>
                                    <span className="lh-lg">
                                        {post.excerpt.rendered
                                            ? parse(post.excerpt.rendered)
                                            : parse(
                                                  post.content.rendered.slice(
                                                      0,
                                                      250
                                                  )
                                              )}
                                    </span>
                                    <div className="learn-btn">
                                        <Link
                                            href={'/post/' + post.slug}
                                            passHref
                                        >
                                            <div className="rounded-pill btn-rounded border-primary">
                                                Read More
                                                <span>
                                                    <i className="bi bi-book"></i>
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
