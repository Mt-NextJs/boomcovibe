'use client';

import CloseButton from '../components/close-button';
import LinkPreview from './components/link-preview';
import LinkForm from './components/link-form';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import { useState } from 'react';

export default function LinkBlock() {
    const { handleSubmit, block: blockState, paramsId } = useBlockSubmit();
    const [selectedStyle, setSelectedStyle] = useState<number>(
        paramsId ? blockState?.style || 1 : 1,
    );

    return (
        <div className="p-10">
            <CloseButton />
            <p className="pageName mb-10">링크 블록</p>
            <LinkPreview
                title={blockState?.title || null}
                selectedStyle={selectedStyle}
            />
            <LinkForm
                state={paramsId ? blockState : null}
                onSubmit={(e) => handleSubmit(e, 3)}
                selectedStyle={selectedStyle}
                setSelectedStyle={setSelectedStyle}
            />
        </div>
    );
}
