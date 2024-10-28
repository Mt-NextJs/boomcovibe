'use client';
import useBlockStore from 'store/useBlockStore';
import CloseButton from '../components/close-button';
import TextForm from './components/text-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import { useState } from 'react';

export default function PageBlock() {
    const { handleSubmit, block, paramsId } = useBlockSubmit();
    const { updateBlock } = useBlockStore();
    const [title, setTitle] = useState(paramsId && block ? block.title : '');
    const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value);
        if (e.target.value.length > 500) return;
        if (paramsId && block) updateBlock(block.id, { title: e.target.value });
    };
    return (
        <div className="p-10">
            <CloseButton />
            <p className="pageName mb-10">텍스트 블록</p>
            <TextForm
                onSubmit={(e) => handleSubmit(e, 6)}
                title={title}
                handleTitleChange={handleTitleChange}
                paramsId={paramsId}
            />
        </div>
    );
}
