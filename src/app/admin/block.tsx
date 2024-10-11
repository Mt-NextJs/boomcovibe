'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Menu from './menu';

export default function Block({
    index,
    item,
    handleBlock,
}: {
    index: number;
    item: string;
    handleBlock: (index: number, action: string) => void;
}) {
    const [isToggled, setIsToggled] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // 블록 메뉴 닫는 함수
        const handleClickOutside = (event: MouseEvent) => {
            console.log(event.target);
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuToggle(false);
            }
        };

        if (menuToggle) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [menuToggle]);
    const toggle = () => {
        setIsToggled(!isToggled);
    };
    const handleMenu = () => {
        setMenuToggle(!menuToggle);
    };
    return (
        <li className={`relative mb-3 flex rounded-lg border border-gray-200`}>
            {/* 드래그 버튼 */}
            <div className="flex flex-col rounded-l-lg bg-gray-100">
                <button
                    className="flex-1"
                    onClick={() => handleBlock(index, 'UP')}
                >
                    <Image
                        className="p-2"
                        src={'/assets/icons/icon_btn_handle_up.svg'}
                        alt="up button"
                        width={30}
                        height={30}
                    />
                </button>
                <button className="drag-button flex-1">
                    <Image
                        className="border-y-1 p-2"
                        src={'/assets/icons/icon_grabber.png'}
                        alt="drag button"
                        width={30}
                        height={30}
                    />
                </button>
                <button
                    className="flex-1"
                    onClick={() => handleBlock(index, 'DOWN')}
                >
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
                <div className="mb-3 flex items-center gap-1 text-xs font-semibold text-primary">
                    {/* 블록 타입 */}
                    <Image
                        src={'/assets/icons/icon_link.png'}
                        alt="type image"
                        width={15}
                        height={15}
                    />
                    링크 {item}
                </div>
                <div className="flex gap-2">
                    {/* 이미지 / title */}
                    <div className="h-14 w-14 bg-slate-400">이미지</div>
                    <div>title</div>
                </div>
                {/* 활성화 버튼 & 메뉴 */}
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
                    <button onClick={handleMenu}>
                        <Image
                            src={'/assets/icons/icon_menu_dot.png'}
                            alt="menu button"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                {menuToggle && (
                    <div ref={menuRef}>
                        <Menu />
                    </div>
                )}
            </div>
        </li>
    );
}
