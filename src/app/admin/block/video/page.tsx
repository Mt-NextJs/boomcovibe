'use client';

import CloseButton from '../components/close-button';
import VideoForm from './components/video-form';

export default function VideoBlock() {
    return (
        <section className="p-10">
            <CloseButton />
            <p className="pageName mb-10">동영상 블록</p>
            <VideoForm />
        </section>
    );
}
