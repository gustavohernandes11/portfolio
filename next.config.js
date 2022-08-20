/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    trailingSlash: true,
    images: {
        domains: ["github.com"],
        unoptimized: true,

        loader: "imgix",
        path: "/"
    },
    
};

module.exports = nextConfig;
