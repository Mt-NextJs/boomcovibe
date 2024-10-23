'use client';

import { useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { blockFormReducer, initialState } from 'reducer/block-form-reducer';
import CloseButton from '../components/close-button';
import VideoForm from './components/video-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import useBlockStore from 'store/useBlockStore';

export default function VideoBlock() {
    return (
        <section className="p-10">
            <CloseButton />
            <p className="pageName mb-10">동영상 블록</p>
            <VideoForm />
        </section>
    );
}
