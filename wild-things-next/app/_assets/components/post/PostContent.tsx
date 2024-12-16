'use client';

import parse from 'html-react-parser';

import '../../../../node_modules/glightbox/dist/css/glightbox.css';

import {
    displayGallery,
    getMainContent,
    slideShowSetup,
} from '../../utils/slideShow';
import { DisplayGalleryProps, PostPageProps } from '@/types';

export const PostContent = (props: PostPageProps) => {
    console.log('setting up post', props);
    const portfolioDetails = slideShowSetup(props.post);

    const mainContent = getMainContent(props.post);
    const postId = props.id;

    if (!props.post || window === undefined) {
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
        const showGallery = (event: any) => {
            const galleryProps: DisplayGalleryProps = {
                evt: {
                    target: {
                        className: event.target.className,
                    },
                },
                elements: portfolioDetails.elements,
            };

            displayGallery(galleryProps);
        };

        return (
            <section id="post" className="post" style={{ minHeight: '100vh' }}>
                <div className="container">
                    <div className="row text-center mt-5">
                        <h1 className="display-3 fw-bold text-capitalize">
                            {props.post.title.rendered}
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
