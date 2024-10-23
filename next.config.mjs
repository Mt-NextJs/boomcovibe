/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.API_URL}/api/:path*`,
            },
        ];
    },
    images: {
        domains: ['img.youtube.com'],
    },
};

export default nextConfig;
