'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Menu from './menu';
import Schedule from './schedule';
import Event from './event';
import { blockTypeMap } from 'service/constants/block-types';

interface BlockProps extends Block {
    index: number;
    handleBlock: (index: number, action: 'UP' | 'DOWN') => void;
    toggleMove: (index?: number, action?: 'UP' | 'DOWN') => true | undefined;
    isMoving: boolean;
    movingIndex: number | null;
    movingAction: 'UP' | 'DOWN' | null;
}

export default function Block({
    type,
    imgUrl,
    index,
    title,
    schedule,
    handleBlock,
    toggleMove,
    isMoving,
    movingIndex,
    movingAction,
    ...rest
}: BlockProps) {
    const [isToggled, setIsToggled] = useState(rest.active === 1);
    const [menuToggle, setMenuToggle] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const blockStyle = () => {
        if (isMoving && movingAction === 'UP' && index < movingIndex!)
            return 'translate-y-full';
        if (isMoving && movingAction === 'DOWN' && index > movingIndex!)
            return '-translate-y-full';
        if (isMoving && movingAction === 'UP' && index === movingIndex)
            return '-translate-y-full z-10';
        if (isMoving && movingAction === 'DOWN' && index === movingIndex)
            return 'translate-y-full z-10';

        return '';
    };
    useEffect(() => {
        // 블록 메뉴 닫는 함수
        const handleClickOutside = (event: MouseEvent) => {
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

    // 블록 최 상하단 버튼
    const handleMove = (index: number, action: 'UP' | 'DOWN') => {
        if (action === 'UP' && index === 0) return;
        if (toggleMove(index, action)) return;
        toggleMove(index, action);
        setTimeout(() => {
            handleBlock(index, action);
            toggleMove();
        }, 300);
    };

    //활성화 버튼
    const toggle = () => {
        setIsToggled(!isToggled);
    };
    // 메뉴 버튼
    const handleMenu = () => {
        setMenuToggle(!menuToggle);
    };

    return (
        <li
            className={`relative mb-3 flex min-h-32 rounded-lg border border-gray-200 bg-white shadow-lg ${isMoving && 'transform transition-transform duration-500'} ${blockStyle()}`}
        >
            {/* 드래그 버튼 */}
            <div className="flex flex-col rounded-l-lg bg-gray-100">
                <button
                    className="flex-1"
                    onClick={() => handleMove(index, 'UP')}
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
                    onClick={() => handleMove(index, 'DOWN')}
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
                        src={blockTypeMap[type].src}
                        alt="type image"
                        width={15}
                        height={15}
                    />
                    {blockTypeMap[type].title}
                </div>
                <div className={`flex gap-2`}>
                    {/* content */}
                    {type === 5 && (
                        <Event
                            title={title}
                            dateStart={rest.dateStart}
                            dateEnd={rest.dateEnd}
                        />
                    )}
                    {schedule && <Schedule schedule={schedule} />}
                    {type !== 5 && type !== 7 && (
                        <>
                            {imgUrl && (
                                <Image
                                    src={imgUrl}
                                    alt={''}
                                    width={56}
                                    height={56}
                                    className="rounded-md"
                                />
                            )}
                            <div>{title}</div>
                        </>
                    )}
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
