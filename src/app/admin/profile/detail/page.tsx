'use client';

import { ClientRoute } from '@config/route';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchUserInfo } from 'service/api/admin-api';
import Link from 'next/link';
import Skeleton from '@app/admin/components/skeleton';
import useToken from 'store/useToken';

export default function ProfileDetail() {
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const setACToken = useToken((state) => state.setToken);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push(ClientRoute.LOGIN as string);
        }
        setACToken(token);
        const fetchData = async () => {
            if (token) {
                try {
                    const userData = await fetchUserInfo(token);

                    setUserInfo(userData);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, []);

    async function handleLogout() {
        try {
            localStorage.removeItem('token');
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    }

    if (loading)
        return (
            <main className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-2 bg-white">
                <Skeleton
                    width="w-full"
                    height="min-h-1/2"
                    className="flex-1"
                />
                <Skeleton
                    width="w-full"
                    height="min-h-1/2"
                    className="flex-1"
                />
                ;
            </main>
        );

    return (
        <main className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-2 bg-white">
            <div className="relative flex cursor-pointer items-center pt-3">
                <Link href={ClientRoute.ADMIN as string}>
                    <Image
                        src="/assets/icons/icon_back.png"
                        alt="back"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
            <h1 className="pageName absolute left-[50%] translate-x-[-50%] pt-3 text-[22px] text-primary-250">
                프로필
            </h1>

            <div className="border-b px-4 pb-6">
                <div className="my-4 text-center">
                    <Image
                        className="mx-auto my-4 h-32 w-32 rounded-full border-4 border-white"
                        src={'/assets/icons/icon_profile.png'}
                        alt="User Avatar"
                        width={64}
                        height={64}
                    />
                    <div className="py-2">
                        <h3 className="mb-1 text-2xl font-bold text-gray-800">
                            {userInfo?.name}
                        </h3>
                        <div className="inline-flex items-center text-gray-700">
                            <svg
                                className="mr-1 h-5 w-5 text-gray-400"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path
                                    className=""
                                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                                />
                            </svg>
                            {userInfo?.countryCode}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 px-2">
                    <button
                        className="flex-1 rounded-full bg-neutral-500 px-4 py-2 font-bold text-white hover:bg-neutral-400"
                        onClick={() => router.push('/admin/profile/edit')}
                    >
                        회원정보수정
                    </button>
                    <button
                        className="flex-1 rounded-full border-2 border-gray-400 bg-primary px-4 py-2 font-semibold text-black hover:bg-primary-400"
                        onClick={handleLogout}
                    >
                        로그아웃
                    </button>
                </div>
            </div>
        </main>
    );
}
