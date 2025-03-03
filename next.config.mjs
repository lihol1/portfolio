/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    reactStrictMode: true,
    images: {
        unoptimized: true
    }
};

export default nextConfig;
