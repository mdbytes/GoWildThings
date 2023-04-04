import '../../../node_modules/glightbox/dist/css/glightbox.css';
import { DisplayGalleryProps, PortfolioItemsProps } from '../../types';
import { displayGallery } from '../../utils';

export const PortfolioItems = (props: PortfolioItemsProps) => {
  const showGallery = (event: any) => {
    let galleryProps: DisplayGalleryProps = {
      evt: {
        target: {
          className: event.target.className,
        },
      },
      elements: props.portfolio.elements,
    };

    displayGallery(galleryProps);
  };

  let images = props.portfolio.images;
  return (
    <div className="row portfolio-items">
      {images.map((image) => (
        <div className="col-lg-6" key={image.slideLocation}>
          <div className="portfolio-box">
            <img
              src={image.image}
              alt={'portfolio item ' + image.slideLocation}
              title={'portfolio ' + image.slideLocation + ' picture'}
              className="img-fluid"
            />
            <div className="portfolio-info">
              <div className="caption">
                <p>
                  <br />{' '}
                  <button
                    className={'photo-' + image.slideLocation + ' glightbox'}
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
  );
};
