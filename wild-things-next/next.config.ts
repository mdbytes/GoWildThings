import type { NextConfig } from 'next';

const path = require('path');

const nextConfig: NextConfig = {
    productionBrowserSourceMaps: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'go-wild-things.vercel.app',
            },
            {
                protocol: 'https',
                hostname: '**.mdbytes.us',
            },
            {
                protocol: 'https',
                hostname: 'gowildthings.com',
            },
        ],
    },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
    },
    env: {
        EMAIL_JS: process.env.NEXT_PUBLIC_EMAILJS_USER,
        WP_REST_GET_POSTS_URL: process.env.WP_REST_GET_POSTS_URL,
        WP_REST_GET_POST_WITH_SLUG_URL:
            process.env.WP_REST_GET_POST_WITH_SLUG_URL,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'app/_assets/styles/scss')],
    },
    webpack: (config, { dev }) => {
        // Enable source maps in development mode
        if (dev) {
            config.devtool = 'source-map';
        }
        return config;
    },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
