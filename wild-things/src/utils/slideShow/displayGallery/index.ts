import GLightbox from 'glightbox';
import { DisplayGalleryProps } from '../../../types';

export const displayGallery = (props: DisplayGalleryProps) => {
  let targetButtonClass = props.evt.target.className;

  let startingSlide = 0;

  startingSlide = Number.parseInt(
    targetButtonClass.replace('photo-', '').replace(' glightbox', '')
  );

  const myGallery = GLightbox({
    elements: props.elements,
    autoplayVideos: false,
    startAt: startingSlide - 1,
    openEffect: 'fade',
    closeEffect: 'fade',
    zoomable: 'true',
  });

  myGallery.on('close', () => {
    myGallery.close();
  });

  myGallery.open();
};
