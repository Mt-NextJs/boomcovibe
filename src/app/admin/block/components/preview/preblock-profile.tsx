import React from 'react';
import Image from 'next/image';
import { GoBell } from 'react-icons/go';
import { CiShare2 } from 'react-icons/ci';

export default function PreblockProfile({ name }: { name: string }) {
    return (
        <>
            <div className="w-full max-w-md bg-white">
                <div className="p-4">
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <button className="rounded-full">
                            <CiShare2 className="h-5 w-5 text-gray-500" />
                        </button>
                        <div className="flex flex-col items-center">
                            <Image
                                src={'/assets/icons/icon_profile.png'}
                                alt="User Avatar"
                                width={64}
                                height={64}
                            />
                            <span className="text-sm font-medium">{name}</span>
                        </div>
                        <button className="rounded-full">
                            <GoBell className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
