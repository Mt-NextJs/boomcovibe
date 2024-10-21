'use client';

import React, { useState, useEffect } from 'react';

export default function PreblockEvent({
    eventTitle,
    eventContent,
    startDate,
    endDate,
}: {
    eventTitle: string;
    eventContent: string;
    startDate: string;
    endDate: string;
}) {
    const [dateStatus, setDateStatus] = useState<string>('');
    useEffect(() => {
        const today = new Date();
        const start = new Date(startDate);
        const end = new Date(endDate);

        // 오늘 날짜와 시작일의 차이 계산 (단위: 밀리초)
        const timeDiffStart = start.getTime() - today.getTime();
        const timeDiffEnd = end.getTime() - today.getTime();

        // 밀리초를 일로 변환
        const daysDiffStart = Math.ceil(timeDiffStart / (1000 * 60 * 60 * 24));
        const daysDiffEnd = Math.ceil(timeDiffEnd / (1000 * 60 * 60 * 24));

        if (daysDiffStart > 0) {
            setDateStatus(`${daysDiffStart}일 남음`);
        } else if (daysDiffStart === 0) {
            setDateStatus('1일째');
        } else if (daysDiffStart < 0 && daysDiffEnd >= 0) {
            setDateStatus(`${Math.abs(daysDiffStart)}일째`);
        } else {
            setDateStatus('');
        }
    }, [startDate, endDate]);

    return (
        <div className="w-full max-w-[450px] rounded-xl bg-white shadow-lg">
            <div className="text-md p-4 text-gray-200">event</div>
            <div className="flex flex-col items-center px-4">
                <div>
                    {eventTitle.length > 0 ? (
                        <>{eventTitle}</>
                    ) : (
                        <>타이틀을 입력해주세요</>
                    )}
                </div>
                <div className="mb-4 font-light text-gray-400">
                    {eventContent.length > 0 ? (
                        <>{eventContent}</>
                    ) : (
                        <>이벤트 설명을 입력해보세요</>
                    )}
                </div>
            </div>
            <div className="flex items-center justify-between rounded-b-lg bg-gray-100 px-4 py-3 text-sm">
                <span className="text-gray-400">
                    {startDate} - {endDate}
                </span>
                <button className="flex items-center text-gray-400 transition-colors hover:text-gray-700">
                    {dateStatus}
                </button>
            </div>
        </div>
    );
}
