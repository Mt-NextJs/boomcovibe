import { Dispatch } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export default function LinkStyleItem({state, dispatch, index}: {
    state: Block;
    dispatch:  Dispatch<BlockFormAction>;
    index: number;
}) {
    const descriptions = ['썸네일', '배경', '카드', '심플'];
    return (
        <div
            className="flex h-24 w-1/4 flex-col items-center justify-center gap-2"
            onClick={() => {
                dispatch({
                    type: 'SET_BLOCK',
                    payload: { style: index + 1 },
                });
            }}
        >
            <div className={twMerge("relative p-4 h-16 w-full rounded-lg border border-gray-400", state.style === index + 1 ? "border-primary-450" : "")}>
                <Image
                    src={`/assets/icons/item_card_00${index + 1}.png`}
                    alt="thumbnail"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="px-8 py-2"
                />
            </div>
            <p className="text-center">{descriptions[index]}</p>
        </div>
    );
}
