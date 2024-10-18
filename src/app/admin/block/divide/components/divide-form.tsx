'use client';

import { Dispatch } from 'react';
import Image from 'next/image';
import DivideSelector from './divide-selector';

export default function DivideForm({
    state,
    dispatch,
    onSubmit,
}: {
    state: Block;
    dispatch: Dispatch<BlockFormAction>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
    return (
        <form
            method="POST"
            action="/api/link/add"
            onSubmit={onSubmit}
            className="mb-10 flex flex-col gap-2"
        >
            <DivideSelector state={state} dispatch={dispatch} />
            <button type="submit" className="button color">
                추가 완료
            </button>
        </form>
    );
}
