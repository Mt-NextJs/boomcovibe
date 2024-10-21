'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { blockTypeMap } from 'service/constants/block-types';

export default function BlockLink({
    handleBlockLink,
}: {
    handleBlockLink: () => void;
}) {
    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="flex h-full w-1/3 min-w-[350px] flex-col rounded-lg bg-white pt-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between px-6">
                    <p className="text-xl font-bold">블록 선택하기</p>
                    <Image
                        src={'/assets/icons/icon_close.png'}
                        alt="close"
                        width={25}
                        height={25}
                        className="cursor-pointer"
                        onClick={handleBlockLink}
                    />
                </div>
                <p className="mb-6 px-6 text-base font-bold text-gray-400">
                    블록 타입
                </p>

                <div className="flex flex-1 flex-col">
                    {Object.entries(blockTypeMap).map(([key, value]) => (
                        <Link
                            href={value.href}
                            key={key}
                            className="flex flex-1 items-center border-b border-gray-200 px-6 text-sm hover:bg-gray-100"
                        >
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-xl ${value.bgColor}`}
                            >
                                {key === '8' ? (
                                    <FaMapMarkedAlt size="30" color="white" />
                                ) : (
                                    <Image
                                        src={value.src}
                                        alt={value.title}
                                        width={30}
                                        height={30}
                                        className="brightness-0 invert filter"
                                    />
                                )}
                            </div>
                            <div className="ml-4">
                                <p className="font-bold">{value.title}</p>
                                <p className="text-gray-400">
                                    {value.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
