/** @type {import('next').NextConfig} */
const nextConfig = {
    // Generate unique build ID for each deployment
    generateBuildId: async () => {
        return `build-${Date.now()}`;
    },

    // Optimize output for Docker
    output: 'standalone',

    // Disable x-powered-by header
    poweredByHeader: false,

    // Compression
    compress: true,

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
    },

    // Override aggressive external caching
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, s-maxage=0, must-revalidate',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
