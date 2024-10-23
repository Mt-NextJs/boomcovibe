'use client';

import { useState } from 'react';
import CloseButton from '../components/close-button';
import ImageForm from './components/image-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import useBlockStore from 'store/useBlockStore';

export default function ImageBlock() {
    const { handleSubmit, block, paramsId } = useBlockSubmit();
    const { updateBlock } = useBlockStore();
    const [title, setTitle] = useState(paramsId ? block?.title : '');
    const [url, setUrl] = useState(paramsId ? block?.url : '');
    const [imgUrl, setImgUrl] = useState(paramsId ? block?.imgUrl : '');

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === 'title') setTitle(value);
        if (name === 'url') setUrl(value);
        if (name === 'imgUrl') setImgUrl(value);

        if (paramsId && block) updateBlock(block.id, { [name]: value });
    };
    return (
        <section className="p-10">
            <CloseButton />
            <p className="pageName mb-10">이미지 블록</p>
            <ImageForm
                onSubmit={handleSubmit}
                title={title}
                url={url}
                imgUrl={imgUrl}
                handleTitleChange={handleTitleChange}
            />
        </section>
    );
}
