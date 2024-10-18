import { Dispatch } from 'react';
import LinkStyleItem from './link-style-item';

export default function LinkStyleSelctor({
    state,
    dispatch,
}: {
    state: Block;
    dispatch: Dispatch<BlockFormAction>;
}) {
    return (
        <div className="mb-10 flex flex-col gap-2">
            <p>
                스타일
                <span className="title relative top-1 ml-2 inline-block text-red-500">
                    *
                </span>
            </p>

            <div className="flex gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <LinkStyleItem
                        key={i}
                        state={state}
                        dispatch={dispatch}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}
