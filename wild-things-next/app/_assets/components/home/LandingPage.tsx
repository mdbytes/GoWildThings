import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
    return (
        <section id="home" className="intro-section">
            <div className="container">
                <div className="col-lg-12 intros">
                    <div id="intro">
                        <h1 className="company-font">
                            WildThings Photography
                            <br />
                        </h1>
                        <span className="display-2--description lh-base">
                            <div id="tagline">
                                Capturing pictures of wild things in their
                                natural habitat
                            </div>
                            <br />
                        </span>

                        <Link
                            className="rounded-pill btn-rounded"
                            href={{
                                pathname: '/posts',
                            }}
                        >
                            Galleries{' '}
                            <span>
                                <i className="bi bi-images"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;
