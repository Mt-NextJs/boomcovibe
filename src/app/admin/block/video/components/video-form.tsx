'use client';

import { Dispatch } from 'react';
import VideoEmbed from './video-embed';

export default function VideoForm({
    state,
    dispatch,
    onSubmit,
}: {
    state: Block
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
            <label htmlFor="url">
                내용 입력
                <span className="title relative top-1 ml-2 inline-block text-red-500">
                    *
                </span>
            </label>

            <input
                type="text"
                name="url"
                id="url"
                placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
                className="input"
                onChange={(e) => {
                    dispatch({
                        type: 'SET_BLOCK',
                        payload: {
                            url: e.target.value,
                        },
                    });
                }}
            />
            <VideoEmbed url={state.url || null} />
            <button className="button color">추가 완료</button>
        </form>
    );
}
