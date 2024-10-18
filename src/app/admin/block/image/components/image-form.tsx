'use client';

import { Dispatch } from 'react';
import Image from 'next/image';

export default function ImageForm({
    state,
    dispatch,
    onSubmit,
}: {
    state: Block;
    dispatch:  Dispatch<BlockFormAction>;
    onSubmit:  (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {

    return (
        <form action="/api/admin/add" method="POST" onSubmit={onSubmit}>
            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="imgUrl">
                    이미지
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    placeholder="원하는 이미지 URL을 알려주세요"
                    className="input"
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_BLOCK',
                            payload: { imgUrl: e.target.value },
                        });
                    }}
                />
            </div>
            <div className="relative mb-10 h-[40rem] w-full">
                <Image
                    src="/assets/icons/icon_image.png"
                    alt="image"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="brightness-0 filter"
                />
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <div className="flex justify-between">
                    <label htmlFor="title">타이틀</label>
                    <p>
                        {state.title?.length || 0} <span className="text-slate-300">/ 30</span>
                    </p>
                </div>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="이미지 하단에 함께 보여줄 수 있어요"
                    className="input"
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_BLOCK',
                            payload: { title: e.target.value },
                        });
                    }}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="url">연결할 주소</label>
                <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder="이미지를 통해 이동시키고 싶은 링크가 있나요?"
                    className="input"
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_BLOCK',
                            payload: { url: e.target.value },
                        });
                    }}
                />
            </div>

            <button className="button color">추가 완료</button>
        </form>
    );
}
