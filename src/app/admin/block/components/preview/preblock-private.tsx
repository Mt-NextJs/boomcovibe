import React from 'react';
import Image from 'next/image';

export default function PreblockPrivate() {
    return (
        <div className="m-auto w-full max-w-md items-center bg-white">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-4 py-12">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                    <Image
                        src={'/assets/icons/icon_empty.png'}
                        alt={`It's private preview`}
                        width={80}
                        height={60}
                    />
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-sm text-gray-600">
                        지금은 공개 상태가 아니에요
                    </p>
                    <p className="text-sm">
                        <span className="text-orange-500">소식받기 버튼</span>을
                        눌러주세요
                    </p>
                    <p className="mb-10 text-sm text-gray-600">
                        링크가 공개되면 알림을 드릴게요
                    </p>
                    <button className="button">소식받기</button>
                </div>
            </div>
        </div>
    );
}
