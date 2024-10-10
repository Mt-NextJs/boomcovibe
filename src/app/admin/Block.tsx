'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Block() {
    const [isToggled, setIsToggled] = useState(false);

    const toggle = () => {
        setIsToggled(!isToggled);
    };
    return (
        <div className="mb-3 flex overflow-hidden rounded-lg border border-gray-200">
            <div className="flex flex-col bg-gray-100">
                <button className="flex-1">
                    <Image
                        className="p-2"
                        src={'/assets/icons/icon_btn_handle_up.svg'}
                        alt="up button"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="flex-1">
                    <Image
                        className="border-y-1 p-2"
                        src={'/assets/icons/icon_grabber.png'}
                        alt="drag button"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="flex-1">
                    <Image
                        className="p-2"
                        src={'/assets/icons/icon_btn_handle_down.svg'}
                        alt="down button"
                        width={30}
                        height={30}
                    />
                </button>
            </div>
            <div className="relative flex-1 p-3">
                <div className="mb-3 flex items-center gap-1 text-xs font-semibold text-[var(--primary)]">
                    {/* 블록 타입 */}
                    <Image
                        src={'/assets/icons/icon_link.png'}
                        alt="type image"
                        width={15}
                        height={15}
                    />
                    링크
                </div>
                <div className="flex gap-2">
                    {/* 이미지 / title */}
                    <div className="h-14 w-14 bg-slate-400">이미지</div>
                    <div>title</div>
                </div>
                <div className="absolute right-0 top-0 flex p-3">
                    <div className="flex items-center">
                        <button
                            onClick={toggle}
                            className={`relative h-4 w-8 rounded-full duration-300 ease-in-out ${isToggled ? 'bg-blue-500' : 'bg-gray-300'}`}
                        >
                            <span
                                className={`absolute left-1 top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${isToggled ? 'translate-x-3' : 'translate-x-0'}`}
                            />
                        </button>
                    </div>
                    <button>
                        <Image
                            src={'/assets/icons/icon_menu_dot.png'}
                            alt="menu button"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
