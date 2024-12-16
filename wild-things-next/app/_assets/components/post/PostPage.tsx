'use client';

import parse from 'html-react-parser';
import Image from 'next/image';
import { PostPageProps } from '../../../../types';
import moment from 'moment';

export function PostPage(props: PostPageProps) {
    if (window === undefined) return <></>;

    let postIdString = '';
    let mainContent = '';

    const post = props.post;

    if (post) {
        postIdString = 'post-' + post.id;
        const content = post?.content?.rendered ? post.content.rendered : '';
        mainContent = content.replace('[', '').replace(']', '');
        mainContent = mainContent.replaceAll(
            'class="img-fluid"',
            'class="img-fluid animate__animated animate__fadeIn animate__slow"'
        );
    }

    return (
        <div className="post-page">
            <section id="post" className="post">
                <div className="container">
                    <div className="row text-center mt-5 mb-5"></div>
                </div>

                <div className="container post-text" id={postIdString}>
                    <div>
                        <h3 className="post-title">
                            {parse(post.title.rendered)}
                        </h3>
                    </div>
                    <Image
                        layout="fixed"
                        height={300}
                        width={600}
                        src={post['fimg_url']}
                        alt="UI Design"
                        className="img-fluid img-featured"
                    />
                    <div className="post-author w-100">
                        <p className="text-center mt-3 pb-0 mb-0">
                            Martin Dwyer, CFT
                        </p>
                    </div>
                    <div className="post-date w-100">
                        <p
                            className="text-center pb-3"
                            style={{ fontSize: '1rem' }}
                        >
                            {moment(post.date).format('MMMM DD, YYYY')}
                        </p>
                    </div>
                    <div className="container">{parse(mainContent)}</div>
                </div>
            </section>
        </div>
    );
}
