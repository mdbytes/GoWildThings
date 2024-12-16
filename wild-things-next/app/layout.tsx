import type { Metadata } from 'next';
import { Navbar } from './_assets/components/layout/NavBar';
import { Footer } from './_assets/components/layout/Footer';
import CookiesApproval from './_assets/components/layout/CookiesApproval';

// Import font families
import '@fontsource/nunito';
import '@fontsource/josefin-sans';
import '@fontsource/aclonica';

// Import global styles
import './_assets/styles/scss/main.scss';

import 'dotenv/config';

export const metadata: Metadata = {
    metadataBase: new URL('https://gowildthings.com'),
    title: 'Home | Wild Things Nature Photography',
    description:
        'This website shares stories and pictures from wildlife adventures, capturing digital images of wild things in nature. Galleries include grizzly bears, moose, bison, elk, and much more.',
    keywords:
        'wildlife photography pictures galleries photos wilderness adventures yellowstone rocky mountains rocky mountain national park colorado wyoming',
    openGraph: {
        title: 'Wild Things Nature Photography',
        type: 'website',
        url: 'https://gowildthings.com',
        images: '/images/wild-things.jpeg',
    },

    twitter: {
        images: '/images/wild-things.jpeg',
        card: 'summary_large_image',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                    integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
                <CookiesApproval />
            </body>
        </html>
    );
}
