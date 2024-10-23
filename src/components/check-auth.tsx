'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useToken from 'store/useToken';

export default function CheckAuth() {
    const router = useRouter();
    const pathname = usePathname();
    const { setToken } = useToken();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            if (
                pathname !== '/' &&
                pathname !== '/login' &&
                pathname !== '/join'
            )
                router.push('/login');
        } else {
            if (pathname === '/login' || pathname === '/join') {
                // router.push('/admin');
            }
            setToken(token);
        }
    }, [pathname]);

    return null;
}
