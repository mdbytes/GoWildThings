import React from 'react';
import { Metadata } from 'next';
import { AboutIntro } from '../../_assets/components/about/AboutIntro';
import { AboutContent } from '../../_assets/components/about/AboutContent';

export const metadata: Metadata = {
    title: 'About |  Wild Things Nature Photography',
};

const Page = () => {
    return (
        <div id="about-page">
            <AboutIntro />
            <AboutContent />
        </div>
    );
};

export default Page;
