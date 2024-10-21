import React from 'react';

export default function PreblockEvent({
    eventTitle,
    eventContent,
    eventDate,
}: {
    eventTitle: string;
    eventContent: string;
    eventDate: string;
}) {
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
                    24.09.11 16:00 ~ 24.09.11 16:00
                </span>
                <button className="flex items-center text-gray-400 transition-colors hover:text-gray-700">
                    80일 남음
                </button>
            </div>
        </div>
    );
}
