import React from 'react';

export default function PreblockNoContent() {
    return (
        <>
            {/* Empty State */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 px-4 py-12">
                <div className="mb-4 flex h-12 w-12 items-center justify-center">
                    <div className="rounded-lg bg-orange-100 p-2 text-3xl text-orange-500">
                        😟
                    </div>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-sm text-gray-600">
                        지금은 공개된 링크가 없지만...
                    </p>
                    <p className="text-sm">
                        <span className="text-orange-500">소식받기 버튼</span>을
                        눌러주세요
                    </p>
                    <p className="text-sm text-gray-600">
                        새로운 링크가 생기면 알려드릴게요
                    </p>
                </div>
            </div>
        </>
    );
}
