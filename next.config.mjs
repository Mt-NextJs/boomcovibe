/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        // console.log(process.env.NEXT_PUBLIC_API_URL);
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`,
            },
        ];
    },
    env: {
        CUSTOM_URL: process.env.NEXT_PUBLIC_KAKAO_URL, // CUSTOM_URL 추가
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // 모든 도메인 허용
            },
        ],
    },
};

export default nextConfig;
