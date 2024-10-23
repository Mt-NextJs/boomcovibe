'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { checkImageOrientation } from 'service/validation';

export default function ImageForm({
    onSubmit,
    title,
    url,
    imgUrl,
    handleTitleChange,
}: {
    onSubmit: (
        e: React.FormEvent<HTMLFormElement>,
        type: BlockType,
    ) => Promise<void>;
    title: string;
    url: string;
    imgUrl: string;
    handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    const [imgOrientation, setImgOrientation] = useState(false);
    useEffect(() => {
        if (imgUrl) {
            checkImageOrientation(imgUrl).then(setImgOrientation);
        }
    }, [imgUrl]);
    return (
        <form onSubmit={(e) => onSubmit(e, 4)} className="flex flex-col gap-4">
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
                    value={imgUrl}
                    onChange={handleTitleChange}
                />
            </div>
            {(imgUrl || title) && (
                <div className="h-fit overflow-hidden rounded-lg bg-slate-300">
                    {imgUrl && (
                        <div className="relative aspect-square h-96 w-full">
                            <Image
                                src={imgUrl}
                                alt="Image"
                                fill
                                objectFit={`${imgOrientation ? 'cover' : 'contain'}`}
                            />
                        </div>
                    )}
                    {title && (
                        <p className="bg-slate-100 p-4 text-center">{title}</p>
                    )}
                </div>
            )}

            <div className="mb-10 flex flex-col gap-2">
                <div className="flex justify-between">
                    <label htmlFor="title">타이틀</label>
                    <p>
                        {title.length || 0}{' '}
                        <span className="text-slate-300">/ 30</span>
                    </p>
                </div>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="이미지 하단에 함께 보여줄 수 있어요"
                    className="input"
                    value={title}
                    onChange={handleTitleChange}
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
                    value={url}
                    onChange={handleTitleChange}
                />
            </div>

            <button className="button color">추가 완료</button>
        </form>
    );
}
