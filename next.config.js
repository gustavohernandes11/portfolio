/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
    images: {
        domains: ["github.com", "images.unsplash.com"],
        unoptimized: true,
    },
};

module.exports = nextConfig;
