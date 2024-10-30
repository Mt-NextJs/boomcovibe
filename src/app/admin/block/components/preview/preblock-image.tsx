import React from 'react';
import Image from 'next/image';

export default function PreblockImage({
    title,
    url,
}: {
    title: string;
    url: string;
}) {
    return (
        <div className="w-full rounded-xl bg-white shadow-lg">
            <div className="text-md p-4 text-gray-200">Image</div>
            <div className="flex flex-col items-center px-4">
                <Image src={url} alt="Image Content" width={200} height={100} />
            </div>
            <div className="flex items-center justify-between rounded-b-lg bg-gray-100 px-4 py-3 text-sm">
                <span className="text-gray-400">{title}</span>
            </div>
        </div>
    );
}
