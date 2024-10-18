'use client';

import { useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { blockFormReducer, initialState } from 'reducer/block-form-reducer';
import CloseButton from '../components/close-button';
import DividePreview from './components/divide-preview';
import DivideForm from './components/divide-form';

export default function DivideBlock() {
    const [state, dispatch] = useReducer<React.Reducer<Block, BlockFormAction>>(
        blockFormReducer,
        initialState,
    );
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (state.style === null) {
            alert('구분선을 선택해주세요');
            return;
        }

        const formData: FormData = new FormData();
        formData.set('type', '1');
        // formData.set('sequence', 전역상태에서 가져오기);
        // admin에서 api로 블록 리스트 호출하여 저장하고 length+1
        formData.set('style', String(state.style!));

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
                throw new Error('구분선 블록 등록 실패');
            }

            // 필요하다면 flash message 구현
            router.push('/admin');
        } catch (error) {
            console.error(error);

            // flash message 구현
        }
    };

    return (
        <section className="p-10">
            <CloseButton />
            <h1 className="pageName mb-10">구분선 블록</h1>
            <DividePreview state={state}/>
            <DivideForm state={state} dispatch={dispatch} onSubmit={handleSubmit} />
        </section>
    );
}
