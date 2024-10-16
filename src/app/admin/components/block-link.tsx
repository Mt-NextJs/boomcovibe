'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkedAlt } from 'react-icons/fa';

export default function BlockLink({
    handleBlockLink,
}: {
    handleBlockLink: () => void;
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-6 flex items-center justify-between">
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
                <p className="mb-6 text-base font-bold text-gray-400">
                    블록 타입
                </p>

                <Link href={'/admin/block/link'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-600">
                            <Image
                                src={'/assets/icons/icon_link.png'}
                                alt="link"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">링크</p>
                            <p className="text-base text-gray-400">
                                연결하고 싶은 url은 무엇이든 추가하세요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/text'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500">
                            <Image
                                src={'/assets/icons/icon_text.png'}
                                alt="text"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">텍스트</p>
                            <p className="text-base text-gray-400">
                                공유하고 싶은 글이 있다면 적어보세요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/image'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-400">
                            <Image
                                src={'/assets/icons/icon_image.png'}
                                alt="image"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">이미지</p>
                            <p className="text-base text-gray-400">
                                보여주고 싶은 이미지로 표현하세요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/divide'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime-500">
                            <Image
                                src={'/assets/icons/icon_divide.png'}
                                alt="divide"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">구분선</p>
                            <p className="text-base text-gray-400">
                                블록과 블록 사이를 구분할 수 있어요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/video'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500">
                            <Image
                                src={'/assets/icons/icon_video.png'}
                                alt="video"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">동영상</p>
                            <p className="text-base text-gray-400">
                                유튜브, 틱톡 등 동영상을 공유하세요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/calendar'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500">
                            <Image
                                src={'/assets/icons/icon_calendar.png'}
                                alt="calendar"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">캘린더</p>
                            <p className="text-base text-gray-400">
                                다가오는 중요한 이벤트의 일정을 알리세요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/event'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500">
                            <Image
                                src={'/assets/icons/icon_gift.png'}
                                alt="gift"
                                width={30}
                                height={30}
                                className="brightness-0 invert filter"
                            />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">이벤트</p>
                            <p className="text-base text-gray-400">
                                이벤트 응모부터, 추첨까지 진행해보세요
                            </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/admin/block/map'}>
                    <div className="mb-3 flex items-center border-b border-gray-200 pb-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500">
                            <FaMapMarkedAlt size="30" color="white" />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg font-bold">장소</p>
                            <p className="text-base text-gray-400">
                                알려야하는 위치를 띄워보세요
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
