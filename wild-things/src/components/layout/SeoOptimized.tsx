import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import siteLogo from '../../assets/images/logo-small.png';

type SEOPropType = {
  title: string;
};

export const SeoOptimized = (props: SEOPropType) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta
          name="description"
          content="This website shares stories and pictures from wildlife adventures, capturing digital images of wild things in nature. Galleries include grizzly bears, moose, bison, elk, and much more."
        />
        <meta
          name="keywords"
          content="wildlife photography pictures galleries photos wilderness adventures yellowstone rocky mountains rocky mountain national park colorado wyoming"
        />
        <meta property="og:title" content="Wild Things Photography" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wildthings.mdbytes.us" />
        <meta
          property="og:image"
          content="https://wildthings.mdbytes.us/main-image.jpeg"
        />

        <meta name="twitter:title" content="Wild Things Photography" />
        <meta name="twitter:creator" content="@mdbytes" />
        <meta
          name="twitter:description"
          content="Capturing digital images of wildlife in its native habitat."
        />
        <meta
          name="twitter:image"
          content="https://wildthings.mdbytes.us/main-image.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" type="image/png" href={siteLogo} />
      </Helmet>
    </HelmetProvider>
  );
};
