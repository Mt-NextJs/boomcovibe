'use client';

import { Dispatch } from 'react';
import DivideItem from './divide-item';
export default function DivideSelector({
    state,
    dispatch,
}: {
    state: Block;
    dispatch: Dispatch<BlockFormAction>;
}) {
    return (
        <>
            <p>
                구분선 모양
                <span className="title relative top-1 ml-2 inline-block text-red-500">
                    *
                </span>
            </p>

            <div className="flex h-32 w-full gap-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <DivideItem
                        key={i}
                        state={state}
                        dispatch={dispatch}
                        index={i}
                    />
                ))}
            </div>
        </>
    );
}
