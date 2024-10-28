'use client';

import CloseButton from '../components/close-button';
import DividePreview from './components/divide-preview';
import DivideForm from './components/divide-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import { useState } from 'react';
import useBlockStore from 'store/useBlockStore';

export default function DivideBlock() {
    const { block, handleSubmit, paramsId } = useBlockSubmit();
    const { updateBlock } = useBlockStore();
    const [divideStyle, setDivideStyle] = useState(
        paramsId && block ? block.style : 1,
    );
    const [title, setTitle] = useState(paramsId && block ? block.title : '');
    const handleDivideStyleChange = (index: number, title: string) => {
        setDivideStyle(index + 1);
        setTitle(title);
        if (paramsId && block)
            updateBlock(block.id, { style: index + 1, title });
    };
    return (
        <section className="p-10">
            <CloseButton />
            <h1 className="pageName mb-10">구분선 블록</h1>
            <DividePreview divideStyle={divideStyle} />
            <DivideForm
                divideStyle={divideStyle}
                title={title}
                onSubmit={(e) => handleSubmit(e, 1)}
                handleDivideStyleChange={handleDivideStyleChange}
            />
        </section>
    );
}
