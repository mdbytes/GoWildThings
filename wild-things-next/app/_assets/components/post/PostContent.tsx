'use client';

import parse from 'html-react-parser';
import GLightbox from 'glightbox';

import '../../../../node_modules/glightbox/dist/css/glightbox.css';

import { getMainContent, slideShowSetup } from '../../utils/slideShow';
import { PostPageProps } from '@/types';
import { useEffect } from 'react';

export const PostContent = (props: PostPageProps) => {
    const post = props.post;
    const portfolioDetails = slideShowSetup(post);
    const mainContent = getMainContent(post);
    const postId = post['id'];

    useEffect(() => {}, []);

    if (!post) {
        return (
            <div
                style={{
                    height: '60vh',
                    marginTop: 175,
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                id="locating-post"
            >
                Locating Post
            </div>
        );
    } else {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const showGallery = (evt: any) => {
            if (typeof window !== 'undefined') {
                const targetButtonClass = evt.target.className;

                let startingSlide = 0;

                startingSlide = Number.parseInt(
                    targetButtonClass
                        .replace('photo-', '')
                        .replace(' glightbox', '')
                );

                const myGallery = GLightbox({
                    // @ts-expect-error: elements not recognized by ES Lint
                    elements: portfolioDetails.elements,
                    autoplayVideos: false,
                    startAt: startingSlide - 1,
                    openEffect: 'fade',
                    closeEffect: 'fade',
                    zoomable: true,
                });

                myGallery.on('close', () => {
                    myGallery.close();
                });

                // @ts-expect-error: not recognized by ES Lint
                myGallery.open();
            }
        };

        return (
            <section id="post" className="post" style={{ minHeight: '100vh' }}>
                <div className="container">
                    <div className="row text-center mt-5">
                        <h1 className="display-3 fw-bold text-capitalize">
                            {post.title.rendered}
                        </h1>
                        <div className="heading-line"></div>
                    </div>
                </div>

                <div className="container post-text" id={postId.toString()}>
                    {parse(mainContent)}
                </div>

                <div className="container portfoio">
                    <p className="mobilePresent">
                        Tap on any image to display in full screen gallery.
                    </p>
                    <p className="largePresent">
                        Hover over any image to display in full screen gallery.
                    </p>
                    {/* <PortfolioItems portfolio={portfolioDetails} /> */}

                    <div className="row portfolio-items">
                        {portfolioDetails.images.map((image) => (
                            <div className="col-lg-6" key={image.slideLocation}>
                                <div className="portfolio-box">
                                    <img
                                        src={image.image}
                                        alt={
                                            'portfolio item ' +
                                            image.slideLocation
                                        }
                                        title={
                                            'portfolio ' +
                                            image.slideLocation +
                                            ' picture'
                                        }
                                        className="img-fluid"
                                    />
                                    <div className="portfolio-info">
                                        <div className="caption">
                                            <p>
                                                <br />{' '}
                                                <button
                                                    className={
                                                        'photo-' +
                                                        image.slideLocation +
                                                        ' glightbox'
                                                    }
                                                    onClick={showGallery}
                                                >
                                                    Display In Gallery
                                                </button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
};
