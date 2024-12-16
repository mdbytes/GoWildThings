import {
    PortfolioDetails,
    PortfolioElement,
    PortfolioImage,
    Post,
} from '../../../../../types';

export const slideShowSetup = (post: Post) => {
    const portfolioDetails: PortfolioDetails = {
        elements: [{ href: '', type: '' }],
        images: [{ slideLocation: 0, image: '' }],
    };

    const content = post.content.rendered;
    const galleryBeginningIndex = content.indexOf(
        '<figure class="wp-block-image '
    );
    const galleryContent = content.slice(galleryBeginningIndex);
    let beginningIndex = 0;
    let srcSetBegins = 0;
    let startsWithUrl = '';
    let url = '';
    let remainingGallery = galleryContent;
    const images: PortfolioImage[] = [];
    const elements: PortfolioElement[] = [];
    let srcSetArray = [];

    let morePhotos = true;
    let slideLocation = 1;

    while (morePhotos) {
        if (remainingGallery.indexOf('src=') === -1) {
            morePhotos = false;
            continue;
        }
        beginningIndex = remainingGallery.indexOf('src=') + 5;
        srcSetBegins = remainingGallery.indexOf('srcset=') + 7;
        srcSetArray = remainingGallery
            .slice(srcSetBegins, remainingGallery.indexOf('sizes=') - 1)
            .trim()
            .split(',');
        const largeImageSrc = srcSetArray
            .sort()
            [srcSetArray.length - 1].trim()
            .replace('\\', '')
            .replace('"', '')
            .replace("'", '')
            .split(' ')[0];
        startsWithUrl = remainingGallery.slice(beginningIndex);
        url = startsWithUrl.slice(0, startsWithUrl.indexOf('"'));
        remainingGallery = startsWithUrl.slice(startsWithUrl.indexOf('"'));
        const portfolioImage: PortfolioImage = {
            image: url,
            slideLocation: slideLocation,
        };

        const portfolioElement: PortfolioElement = {
            href: largeImageSrc,
            type: 'image',
        };

        images.push(portfolioImage);
        elements.push(portfolioElement);
        slideLocation += 1;
    }

    portfolioDetails.images = images;
    portfolioDetails.elements = elements;
    return portfolioDetails;
};
