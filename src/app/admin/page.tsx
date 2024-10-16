'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Empty from './components/empty ';
import { ReactSortable, SortableEvent } from 'react-sortablejs';
import Block from './components/block';

const option = {
    headers: {
        Authorization: `Bearer 6MiwibmeyJpZCIFtZSI6Iuu2kOy9lOuwlOydtOu4jCIsInVzZXJJZCI6ImJvb21jb3ZpYmUiLCJqb2luVHlwZSI6IjEiLCJwYXNzb3dyZCI6IjEyMzQiLCJlbWFpbCI6IiIsImNvdW50cnlDb2RlIjoiS1IiLCJwaG9uZU51bWJlciI6bnVsbCwicGxhbiI6Ik4iLCJwbXNMaW5rIjoiWSIsInBtc0J1c2luZXNzIjoiTiIsInBtc01hcmtldCI6Ik4iLCJhbGFybVRhbGsiOiJOIiwiY2F0ZWdvcmllcyI6bnVsbCwiZGF0ZUNyZWF0ZSI6IjIwMjQtMTAtMDlUMDQ6NDM6MzkuMDAwWiIsImRhdGVVcGRhdGUiOm51bGwsImFjdGl2ZSI6MX0`,
    },
};
export default function Admin() {
    const [blocks, setBlocks] = useState<Block[] | null>(null);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [visitorInfo, setVisitorInfo] = useState<Visitor | null>(null);
    const [movingState, setMovingState] = useState<{
        index: number | null;
        action: 'UP' | 'DOWN' | null;
    }>({ index: null, action: null });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userRes, blockRes, visitorRes] = await Promise.all([
                    fetch('/api/user/info', {
                        method: 'GET',
                        ...option,
                    }),
                    fetch('/api/link/list', {
                        method: 'GET',
                        ...option,
                    }),
                    fetch('/api/user/visitor', {
                        method: 'GET',
                        ...option,
                    }),
                ]);
                const { data: blockData }: { data: Block[] } =
                    await blockRes.json();
                const { data: userData }: { data: UserInfo } =
                    await userRes.json();
                const { data: visitorData }: { data: Visitor } =
                    await visitorRes.json();
                setBlocks(blockData);
                setUserInfo(userData);
                setVisitorInfo(visitorData);
            } catch (error) {
                setBlocks(null);
                setUserInfo(null);
                setVisitorInfo(null);
                console.error(error);
            }
        };

        fetchData();
    }, []);
    const handleBlock = (index: number, action: 'UP' | 'DOWN') => {
        setBlocks((arr) => {
            if (!arr) return null;
            let list = [...arr];
            const item = list.splice(index, 1)[0];
            return action === 'UP' ? [item, ...list] : [...list, item];
        });
    };

    const toggleMove = (index?: number, action?: 'UP' | 'DOWN') => {
        if (!blocks) return;
        if (action === 'DOWN' && index === blocks.length - 1) return true;
        if (index !== undefined && action) {
            setMovingState({ index, action });
        } else {
            setMovingState({ index: null, action: null });
        }
    };
    const dragEnd = (e: SortableEvent) => {
        if (!blocks) return;
        const list = [...blocks];
        const obj = list.splice(e.oldIndex as number, 1);
        list.splice(e.newIndex as number, 0, ...obj);
        setBlocks(list);
    };
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
                    {userInfo?.name}
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
                                <span className="text-red-500">
                                    {visitorInfo?.total}
                                </span>
                            </p>
                            <p>
                                오늘
                                <span className="text-red-500">
                                    {visitorInfo?.today}
                                </span>
                            </p>
                            <p>
                                실시간
                                <span className="text-red-500">
                                    {visitorInfo?.realTime}
                                </span>
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
                {blocks ? (
                    <ReactSortable
                        list={blocks}
                        tag={'ul'}
                        handle=".drag-button"
                        setList={setBlocks}
                        animation={300}
                        onEnd={dragEnd}
                    >
                        {blocks.map((block, i) => (
                            <Block
                                {...block}
                                index={i}
                                key={block.sequence}
                                handleBlock={handleBlock}
                                toggleMove={toggleMove}
                                isMoving={movingState.index !== null}
                                movingIndex={movingState.index}
                                movingAction={movingState.action}
                            />
                        ))}
                    </ReactSortable>
                ) : (
                    <Empty />
                )}
            </section>
            {/* 미리보기 & 추가 버튼 */}
            <footer className="pointer-events-none fixed bottom-0 left-1/2 flex h-16 w-full max-w-[768px] -translate-x-1/2 items-center justify-between bg-gradient-to-b from-transparent to-white p-3">
                <button className="pointer-events-auto absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-gray-100 bg-white p-4 font-semibold text-black shadow-lg">
                    미리보기
                </button>
                <button className="pointer-events-auto absolute -top-4 right-3 h-fit w-fit rounded-full bg-primary p-4">
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
