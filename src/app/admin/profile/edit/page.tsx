'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfileEdit() {
    const router = useRouter();

    return (
        <main className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-2 bg-white">
            <div className="relative flex cursor-pointer items-center pt-3">
                <Link href={'/admin/profile/detail'}>
                    <Image
                        src="/assets/icons/icon_back.png"
                        alt="back"
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
            <h1 className="pageName absolute left-[50%] translate-x-[-50%] pt-3 text-[22px] text-primary-250">
                프로필 수정
            </h1>

            <div className="px-4 pb-6">
                <div className="my-4 text-center">
                    <Image
                        className="mx-auto my-4 h-32 w-32 rounded-full border-4 border-white"
                        src={'/assets/icons/icon_profile.png'}
                        alt="User Avatar"
                        width={64}
                        height={64}
                    />
                </div>
                <form>
                    <label htmlFor="name" className="title">
                        이름
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        // value={name}
                        className="input mb-5"
                        placeholder="이름을 입력하세요."
                    ></input>
                    <label htmlFor="userId" className="title">
                        아이디
                    </label>
                    <input
                        id="userId"
                        name="userId"
                        type="text"
                        className="input mb-5"
                        placeholder="아이디를 입력하세요."
                    ></input>
                    <label htmlFor="email" className="title">
                        이메일
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        className="input mb-5"
                        placeholder="이메일을 입력하세요."
                    ></input>
                </form>

                <div className="flex gap-2 px-2">
                    <button
                        className="button color"
                        onClick={() => router.push('/admin/profile/detail')}
                    >
                        저장하기
                    </button>
                </div>
            </div>
        </main>
    );
}