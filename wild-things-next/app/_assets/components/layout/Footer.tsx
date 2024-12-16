import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../images/logo-small.png';

export function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-lg-4">
                            <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
                        </div>

                        <div className="col-sm-4 col-lg-4">
                            <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <div className="contact-box pt-1 d-md-flex d-lg-flex d-flex"></div>
                        </div>
                    </div>
                    <div className="row d-flex align-content-center justify-content-center"></div>
                </div>

                <div className="container footer-middle">
                    <div className="row text-white justify-content-center ">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="footer-sm">
                                <h5
                                    style={{ textAlign: 'center' }}
                                    className=""
                                >
                                    Social Media Links
                                </h5>
                                <p></p>

                                <div id="social-icons" className="row ">
                                    <a
                                        className="col"
                                        href="https://www.facebook.com/goWildThings/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-facebook"></i>
                                    </a>

                                    <a
                                        className="col"
                                        href="https://www.instagram.com/wildthings.nature/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            id="mascot-container"
                            className="col-12 col-sm-6 col-lg-4"
                        >
                            <h5
                                style={{ textAlign: 'center' }}
                                className="company-font"
                            >
                                Wild Things Nature Photography
                            </h5>
                            <br />
                            <Image
                                src={logo}
                                alt="Baby Tux"
                                className="img-fluid"
                                width="75"
                                height="110"
                            />

                            <p>
                                Wild Things
                                <br />
                                Native Habitat
                            </p>
                        </div>

                        <div
                            id="site-menu"
                            className="col-12 col-sm-4 col-lg-4"
                        >
                            <h5>Quick Links</h5>
                            <div id="quick-links">
                                <Link href="/">Home</Link>
                                <span>|</span>
                                <Link href="/about">About</Link>
                                <span>|</span>
                                <Link href="/posts">Articles</Link>
                                <span>|</span>
                                <Link href="/terms">Privacy</Link>
                                <span>|</span>
                                <Link href="/contact">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row text-center text-white">
                            <div className="col-12">
                                <div className="footer-bottom__copyright">
                                    &copy; Martin Dwyer, 2024{' '}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
