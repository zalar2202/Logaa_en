/** @type {import('next').NextConfig} */
const nextConfig = {
    // Generate unique build ID for each deployment
    generateBuildId: async () => {
        return `build-${Date.now()}`;
    },

    // Disable x-powered-by header
    poweredByHeader: false,

    // Compression
    compress: true,

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
    },
};

export default nextConfig;
