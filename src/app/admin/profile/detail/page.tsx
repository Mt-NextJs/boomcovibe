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
                <Skeleton width="w-full" height="h-52" />;
                <Skeleton width="w-full" height="h-20" />;
                <Skeleton
                    width="w-full"
                    height="min-h-1/2"
                    className="flex-1"
                />
                ;
            </main>
        );

    return (
        <main className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-5 bg-white">
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

            <header className="relative flex h-52 w-full flex-col items-center justify-center bg-gray-100 py-8">
                <Image
                    src={'/assets/icons/icon_profile.png'}
                    alt="User Avatar"
                    width={64}
                    height={64}
                />
                <p className="mt-2 font-semibold text-black underline">
                    {userInfo?.name}
                </p>
            </header>
            <section className="relative flex flex-1 flex-col pb-16 pt-3 text-black">
                <h1 className="ml-6 font-semibold">내 계정 정보</h1>

                <div className="relative mt-10 flex justify-around pt-10">
                    <h2 className="absolute left-6 flex text-base font-bold">
                        이름
                    </h2>
                    <p className="absolute left-1/2 translate-x-[-50%] font-semibold text-black">
                        {userInfo?.name}
                    </p>
                </div>

                <div className="relative mt-10 flex justify-center pt-10">
                    <h2 className="absolute left-6 flex text-base font-bold">
                        아이디
                    </h2>
                    <p className="absolute left-1/2 translate-x-[-50%] font-semibold text-black">
                        {userInfo?.userId}
                    </p>
                </div>

                <div className="relative mt-10 flex justify-center pt-10">
                    <h2 className="absolute left-6 flex text-base font-bold">
                        이메일
                    </h2>
                    <p className="absolute left-1/2 translate-x-[-50%] font-semibold text-black">
                        {userInfo?.email}
                    </p>
                </div>
            </section>

            <footer className="flex justify-between">
                <button
                    className="flex h-14 w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-neutral-200 font-bold text-white"
                    onClick={() => router.push('/admin/profile/edit')}
                >
                    회원정보수정
                </button>

                <button
                    className="flex h-14 w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-primary font-bold text-white"
                    onClick={handleLogout}
                >
                    로그아웃
                </button>
            </footer>
        </main>
    );
}
