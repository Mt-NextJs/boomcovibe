'use client';

import { useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { blockFormReducer, initialState } from 'reducer/block-form-reducer';
import CloseButton from '../components/close-button';
import ImageForm from './components/image-form';

export default function ImageBlock() {
    const [state, dispatch] = useReducer<React.Reducer<Block, BlockFormAction>>(
        blockFormReducer,
        initialState,
    );
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData: FormData = new FormData();
        formData.set('type', '4');
        formData.set('title', state.title || '');
        formData.set('url', state.url || '');
        formData.set('imgUrl', state.imgUrl || '');
        // formData.set('sequence', 전역상태에서 가져오기);

        try {
            const response = await fetch('/api/link/add', {
                // headers: {
                //   "Authorization": `Bearer ${token}`,
                // },
                // localStorage or 다른 거에 있는 token 가져오기
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (result.code !== 200) {
                throw new Error('이미지 블록 등록 실패');
            }

            // 필요하다면 flash message 구현

            router.push('/admin');
        } catch (error) {
            // 필요하다면 flash message 구현
            console.log(error);
        }
    };

    return (
        <section className="p-10">
            <CloseButton />
            <p className="pageName mb-10">이미지 블록</p>
            <ImageForm state={state} dispatch={dispatch} onSubmit={handleSubmit} />
        </section>
    );
}
