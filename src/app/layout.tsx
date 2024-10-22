import type { Metadata } from 'next';

//styles
import '@styles/global.css';
import '@styles/common.css';
import CheckAuth from '@components/check-auth';
import Script from 'next/script';
export const metadata: Metadata = {
    title: {
        template: '%s | IN MY LINK',
        default: 'IN MY LINK',
    },
    description: 'BOOMCO co.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Script
                    strategy="beforeInteractive"
                    src={process.env.KAKAO_URL}
                />
                {/* <CheckAuth /> */}
                <div className={'mx-auto max-w-screen-md'}>{children}</div>
            </body>
        </html>
    );
}
