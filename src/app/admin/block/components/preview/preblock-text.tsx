import React from 'react';

export default function PreblockText({ title }: { title: string }) {
    return (
        <div className="w-full max-w-[450px] rounded-xl bg-white shadow-lg">
            <div className="flex flex-col items-center px-4">{title}</div>
        </div>
    );
}
