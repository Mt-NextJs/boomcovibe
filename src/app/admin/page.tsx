import Image from 'next/image';
import Empty from './Empty ';
import Block from './Block';

export default function Admin() {
    return (
        <main className="relative flex min-h-screen w-full max-w-[768px] flex-col gap-5 bg-white">
            {/* 프로필 */}
            <header className="relative flex h-52 w-full flex-col items-center justify-center bg-gray-100 py-8">
                <Image
                    src={'/assets/icons/icon_profile.png'}
                    alt="User Avatar"
                    width={64}
                    height={64}
                />
                <p className="mt-2 font-semibold text-black underline">
                    user name
                </p>
                <button className="absolute right-8 top-14 rounded-full bg-white p-1 shadow-md">
                    <Image
                        src={'/assets/icons/icon_menu.png'}
                        alt="menu image"
                        width={20}
                        height={20}
                    />
                </button>
            </header>
            {/* 방문자 카드 */}
            <div className="w-full px-3 text-black">
                <div className="flex w-full rounded-lg border border-gray-300">
                    <div className="w-[70%] border-r-1 border-gray-300 p-3">
                        <p className="title">방문자</p>
                        <div className="flex items-center justify-start gap-2 text-gray-500">
                            <p>
                                전체
                                <span className="text-red-500"> 0</span>
                            </p>
                            <p>
                                오늘
                                <span className="text-red-500"> 0</span>
                            </p>
                            <p>
                                실시간
                                <span className="text-red-500"> 0</span>
                            </p>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="font-semibold text-black">소식받기</p>
                        <div>
                            <p>
                                전체
                                <span className="text-red-500"> 0</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 h-[10px] w-full bg-gray-200"></div>
            </div>
            {/* 블록 리스트*/}
            <section className="flex flex-1 flex-col px-3 pb-16 pt-3 text-black">
                <h2 className="mb-8 flex items-center gap-1 text-base font-bold">
                    블록 리스트
                    <a className="rounded-full bg-slate-100 p-1" href="#">
                        <Image
                            src={'/assets/icons/icon_Q_mark.png'}
                            alt="question mark"
                            width={16}
                            height={16}
                        />
                    </a>
                </h2>
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                <Block />
                {/* <Empty /> */}
            </section>
            {/* 미리보기 & 추가 버튼 */}
            <footer className="pointer-events-none fixed bottom-0 left-1/2 flex h-16 w-full max-w-[768px] -translate-x-1/2 items-center justify-between bg-gradient-to-b from-transparent to-white p-3">
                <button className="pointer-events-auto absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-gray-100 bg-white p-4 font-semibold text-black shadow-lg">
                    미리보기
                </button>
                <button className="pointer-events-auto absolute -top-4 right-3 h-fit w-fit rounded-full bg-[var(--primary)] p-4">
                    <Image
                        src={'/assets/icons/icon_plus.png'}
                        alt="plus icon"
                        width={20}
                        height={20}
                    />
                </button>
            </footer>
        </main>
    );
}
