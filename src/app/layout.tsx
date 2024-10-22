import type { Metadata } from 'next';

//styles
import '@styles/global.css';
import '@styles/common.css';
import CheckAuth from '@components/check-auth';
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
            {/* <CheckAuth /> */}
            <body className={'mx-auto max-w-screen-md'}>{children}</body>
        </html>
    );
}
