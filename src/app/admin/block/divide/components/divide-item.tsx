import { Dispatch } from 'react';
import { twMerge } from 'tailwind-merge';
import Divider from '@components/divider';

export default function DivideItem({
    index,
    state,
    dispatch,
}: {
    index: number;
    state: Block;
    dispatch: Dispatch<BlockFormAction>;
}) {
    const descriptions = ['공백', '점선', '실선', '포인트', '지그재그'];

    return (
        <div
            className="flex h-full w-20 flex-col gap-2"
            onClick={() => {
                dispatch({
                    type: 'SET_BLOCK',
                    payload: { style: index + 1 },
                });
            }}
        >
            <Divider
                style={index + 1}
                className={twMerge(
                    'relative flex justify-center items-center aspect-square w-full rounded-lg border border-gray-300',
                    state.style === index + 1 ? 'border-primary-450' : '',
                )}
            />
            <p className="flex items-center justify-center">
                {descriptions[index]}
            </p>
        </div>
    );
}
