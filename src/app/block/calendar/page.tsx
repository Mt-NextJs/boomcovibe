'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import BlockHeader from '../components/block-header';
import Calendar from './component/calendar';
import Schedule from './component/schedule';
import './component/schedule.css';

export default function CalendarBlock() {
    // 추후 데이터 세트 들어오면 이 부분 수정
    const dataSet = true;

    const [isListView, setIsListView] = useState(true);
    const [viewTypeNow, setViewTypeNow] = useState(true);

    return (
        <>
            <BlockHeader
                windowIcon={'/assets/icons/icon_close.png'}
                iconLink={'/block'}
                blockTitle={'캘린더 블록'}
                blockDescription={`진행/예정된 일정이 1개 이상이어야
                  <br>
                  캘린더 블록을 공개할 수 있습니다`}
            />
            <div className="px-10">
                <Link href={'/block/calendar/form'}>
                    <button className="button color">
                        + 캘린더에 일정을 추가하세요
                    </button>
                </Link>
            </div>

            <div className="mb-10 h-3 w-full bg-gray-100" />

            <div className="px-10">
                <div>
                    <p className="mb-4 text-2xl font-semibold text-gray-700">
                        스타일설정
                    </p>
                    <div className="mb-4 flex flex-wrap">
                        <div className="flex gap-4">
                            <div
                                className="flex cursor-pointer"
                                onClick={() => setIsListView(true)}
                            >
                                <div
                                    className={`circle mr-2 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                                        isListView
                                            ? 'bg-background border-4 border-orange-500'
                                            : 'border-gray-200'
                                    }`}
                                >
                                    <div
                                        className={`button-color h-3 w-3 rounded-full ${
                                            isListView
                                                ? 'border-background border-2 bg-primary'
                                                : ''
                                        }`}
                                    ></div>
                                </div>
                                <div>리스트뷰</div>
                            </div>
                            <div
                                className="flex cursor-pointer"
                                onClick={() => setIsListView(false)}
                            >
                                <div
                                    className={`circle mr-2 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                                        !isListView
                                            ? 'bg-background border-4 border-primary'
                                            : 'border-gray-200'
                                    }`}
                                >
                                    <div
                                        className={`button-color h-3 w-3 rounded-full ${
                                            !isListView
                                                ? 'border-background border-2 bg-primary'
                                                : ''
                                        }`}
                                    ></div>
                                </div>
                                <div>캘린더뷰</div>
                            </div>
                        </div>
                    </div>

                    {isListView ? (
                        <div className="relative z-20 mx-auto flex w-full flex-col gap-10">
                            <div className="h-64 w-full overflow-y-scroll rounded-xl bg-[#FFFFFF] p-5 shadow-[0px_8px_20px_#ced4da] [&::-webkit-scrollbar]:hidden">
                                <div className="schedule-last flex flex-col justify-center gap-1 p-5">
                                    <Schedule flag={1} />
                                    <Schedule flag={1} />
                                    <Schedule flag={1} />
                                    <Schedule flag={1} />
                                    <Schedule flag={1} />
                                    <Schedule flag={1} />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Calendar />
                    )}
                </div>
            </div>

            <div className="my-10 w-full border" />

            <p className="mb-5 px-10 text-2xl font-semibold text-gray-700">
                추가된 모든 일정
            </p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 border-b px-10 text-2xl font-semibold">
                    {/* 진행/예정된 일정 버튼 */}
                    <div
                        onClick={() => setViewTypeNow(true)}
                        className={`cursor-pointer pb-2 ${
                            viewTypeNow === true
                                ? 'border-b border-primary text-primary'
                                : 'text-gray-400'
                        }`}
                    >
                        진행/예정된
                    </div>
                    {/* 지난 일정 버튼 */}
                    <div
                        onClick={() => setViewTypeNow(false)}
                        className={`cursor-pointer pb-2 ${
                            viewTypeNow === false
                                ? 'border-b border-primary text-primary'
                                : 'text-gray-400'
                        }`}
                    >
                        지난
                    </div>
                </div>
                <div className="mb-5 px-10 py-5">
                    {viewTypeNow === true ? (
                        //  데이터세트 들어오면 로직 수정
                        dataSet === true ? (
                            <Schedule flag={2} />
                        ) : (
                            <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                                <p className="text-center">
                                    표시할 블록이 없습니다.
                                    <br />+ 버튼을 눌러서{' '}
                                    <strong>블록을 추가</strong>
                                    해보세요!
                                </p>
                                <Image
                                    src={'/assets/icons/icon_calendar.png'}
                                    alt="no schedule"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        )
                    ) : (
                        <>
                            <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                                <p className="text-center">
                                    표시할 블록이 없습니다.
                                    <br />+ 버튼을 눌러서{' '}
                                    <strong>블록을 추가</strong>
                                    해보세요!
                                </p>
                                <Image
                                    src={'/assets/icons/icon_calendar.png'}
                                    alt="no schedule"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
