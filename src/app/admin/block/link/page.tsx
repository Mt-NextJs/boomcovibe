'use client';

import { useState } from 'react';
import CloseButton from '../components/close-button';
import LinkPreview from './components/link-preview';
import LinkForm from './components/link-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import useBlockStore from 'store/useBlockStore';
import { uploadImage } from 'service/firebase';

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
    const [imgUrl, setImgUrl] = useState<string>(
        paramsId ? blockState?.imgUrl || '' : '',
    );
    const [file, setFile] = useState<File | null>(null);
    const { updateBlock } = useBlockStore();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            const imageUrl = await uploadImage(file);

            handleSubmit(e, 3, imageUrl);
        } else {
            handleSubmit(e, 3);
        }
    };
    // 미리보기 이미지 변경 함수
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile && selectedFile.size > 5 * 1024 * 1024) {
            alert('이미지 크기는 5MB를 초과할 수 없습니다.');
            return;
        }
        setImgUrl(URL.createObjectURL(selectedFile));
        setFile(selectedFile);
    };

    // 링크 제목, url 변경 함수
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        }

        if (name === 'url') {
            setUrl(value);
        }

        if (paramsId && blockState) {
            updateBlock(blockState.id, { [name]: value });
        }
    };

    // 미리보기 이미지 삭제 함수
    const handleDeleteImg = () => {
        setImgUrl('');
        if (paramsId && blockState) updateBlock(blockState.id, { imgUrl: '' });
    };

    // 링크 스타일 변경
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
                onSubmit={onSubmit}
                selectedStyle={selectedStyle}
                handleInputChange={handleInputChange}
                handleStyleChange={handleStyleChange}
                title={title}
                url={url}
                paramsId={paramsId}
                imgUrl={imgUrl}
                handleFileChange={handleFileChange}
                handleDeleteImg={handleDeleteImg}
            />
        </div>
    );
}
