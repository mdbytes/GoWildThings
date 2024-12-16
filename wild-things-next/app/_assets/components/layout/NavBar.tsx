'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import bodybuilderIcon from '../../images/logo-small.png';
import { ButtonRef, NavLinkRef } from '../../../../types';

export const Navbar = () => {
    const pathname = usePathname();
    const navTogglerRef: ButtonRef = useRef(null);
    const homeRef: NavLinkRef = useRef(null);
    const aboutRef: NavLinkRef = useRef(null);
    const faqRef: NavLinkRef = useRef(null);
    const contactRef: NavLinkRef = useRef(null);
    const privacyRef: NavLinkRef = useRef(null);

    useEffect(() => {
        /* eslint-disable  @typescript-eslint/no-require-imports */
        require('../../../../node_modules/bootstrap/dist/js/bootstrap.bundle.js');

        const linkRefs: NavLinkRef[] = [
            homeRef,
            aboutRef,
            faqRef,
            contactRef,
            privacyRef,
        ];

        // Close the mobile nav display when a link is clicked
        if (navTogglerRef) {
            for (const link of linkRefs) {
                link?.current?.addEventListener('click', () => {
                    navTogglerRef.current?.click();
                });
            }
        }
        const destination = pathname.slice(
            pathname.lastIndexOf('/') + 1,
            pathname.length
        );

        if (pathname === '/') {
            homeRef?.current?.classList.add('active');
            aboutRef?.current?.classList.remove('active');
            faqRef?.current?.classList.remove('active');
            contactRef?.current?.classList.remove('active');
            privacyRef?.current?.classList.remove('active');
        } else {
            for (const link of linkRefs) {
                link?.current?.classList.remove('active');

                if (link.current?.href.includes(destination)) {
                    link.current?.classList.add('active');
                }
            }
        }
    }, [pathname]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu fixed-top">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        href="/"
                        style={{ marginLeft: '2rem' }}
                    >
                        <Image
                            src={bodybuilderIcon}
                            height={90}
                            width={45}
                            alt="site logo in navbar"
                        />
                    </Link>
                    <button
                        ref={navTogglerRef}
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    ref={homeRef}
                                    id="home-link"
                                    className="nav-link"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    ref={aboutRef}
                                    className="nav-link"
                                    aria-current="page"
                                    href="/about"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    ref={faqRef}
                                    className="nav-link"
                                    aria-current="page"
                                    href="/posts"
                                >
                                    Galleries
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    ref={contactRef}
                                    className="nav-link"
                                    aria-current="page"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    ref={privacyRef}
                                    className="nav-link"
                                    aria-current="page"
                                    href="/terms"
                                >
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
