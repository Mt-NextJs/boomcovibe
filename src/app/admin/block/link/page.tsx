'use client';

import { useState } from 'react';
import CloseButton from '../components/close-button';
import LinkPreview from './components/link-preview';
import LinkForm from './components/link-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import useBlockStore from 'store/useBlockStore';

export default function LinkBlock() {
    const { handleSubmit, block: blockState, paramsId } = useBlockSubmit();
    const [selectedStyle, setSelectedStyle] = useState<number>(
        paramsId ? blockState?.style || 1 : 1,
    );
    const [title, setTitle] = useState<string>(
        paramsId ? blockState?.title || '' : '',
    );
    const [url, setUrl] = useState<string>(
        paramsId ? blockState?.url || '' : '',
    );
    const [file, setFile] = useState<File | null>(null);
    const [imgUrl, setImgUrl] = useState<string>(
        paramsId ? blockState?.imgUrl || '' : '',
    );
    const { updateBlock } = useBlockStore();
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        setImgUrl(selectedFile ? URL.createObjectURL(selectedFile) : '');
        if (paramsId && blockState)
            updateBlock(blockState.id, {
                imgUrl: selectedFile ? URL.createObjectURL(selectedFile) : '',
            });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        }

        if (name === 'url') {
            setUrl(value);
        }

        if (paramsId && blockState) {
            if (name === 'title') {
                updateBlock(blockState.id, { title: value });
            }

            if (name === 'url') {
                updateBlock(blockState.id, { url: value });
            }
        }
    };
    const handleDeleteImg = () => {
        setImgUrl('');
        if (paramsId && blockState) updateBlock(blockState.id, { imgUrl: '' });
    };
    const handleStyleChange = (index: number) => {
        setSelectedStyle(index + 1);
        if (paramsId && blockState)
            updateBlock(blockState.id, { style: index + 1 });
    };
    return (
        <div className="p-10">
            <CloseButton />
            <p className="pageName mb-10">링크 블록</p>
            <LinkPreview
                title={title}
                selectedStyle={selectedStyle}
                imgUrl={imgUrl}
            />
            <LinkForm
                onSubmit={(e) => handleSubmit(e, 3)}
                selectedStyle={selectedStyle}
                handleInputChange={handleInputChange}
                handleStyleChange={handleStyleChange}
                title={title}
                url={url}
                paramsId={paramsId}
                imgUrl={imgUrl}
                file={file}
                handleFileChange={handleFileChange}
                handleDeleteImg={handleDeleteImg}
            />
        </div>
    );
}
