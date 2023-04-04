export type PageHeaderProps = {
  page: string;
  icon?: string;
};

export type PortfolioImage = {
  slideLocation: number;
  image: string;
};

export type PortfolioElement = {
  href: string;
  type: string;
};

export type PortfolioDetails = {
  images: PortfolioImage[] | any[];
  elements: PortfolioElement[] | any[];
};

export type DisplayGalleryProps = {
  evt: {
    target: {
      className: string;
    };
  };
  elements: PortfolioElement[];
};

export type PortfolioItemsProps = {
  portfolio: PortfolioDetails;
};

export type Post = {
  id: string;
  title: {
    rendered: string;
  };
  excerpt: string;
  fimg_url: string;
};

export type Posts = Post[];

export type PostsContentProps = {
  posts: Post[];
};
