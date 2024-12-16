'use client';

import { DisplayGalleryProps } from '@/types';
import GLightbox from 'glightbox';

export const displayGallery = (props: DisplayGalleryProps) => {
    const targetButtonClass = props.evt.target.className;

    let startingSlide = 0;

    startingSlide = Number.parseInt(
        targetButtonClass.replace('photo-', '').replace(' glightbox', '')
    );

    const myGallery = GLightbox({
        // @ts-expect-error: elements not recognized by ES Lint
        elements: props.elements,
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
};

export const getGLightbox = () => {
    return GLightbox;
};
