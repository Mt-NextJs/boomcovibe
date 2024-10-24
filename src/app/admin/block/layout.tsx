// import type { Metadata } from 'next';

// //metadata
// export const metadata: Metadata = {
//     title: 'admin',
// };
import { Suspense } from 'react';

export default function BlockLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Suspense>{children}</Suspense>
        </div>
    );
}
