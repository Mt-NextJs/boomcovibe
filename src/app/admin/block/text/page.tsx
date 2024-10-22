'use client';
import CloseButton from '../components/close-button';
import TextForm from './components/text-form';
import useBlockStore from 'store/useBlockStore';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import { useEffect, useState } from 'react';

export default function PageBlock() {
    const [block, setBlock] = useState<Block | null>(null);
    const { handleSubmit, block: blockState, paramsId } = useBlockSubmit();
    console.log(block, 'block');
    useEffect(() => {
        setBlock(blockState);
    }, [blockState]);
    return (
        <div className="p-10">
            <CloseButton />
            <p className="pageName mb-10">텍스트 블록</p>
            <TextForm
                state={paramsId ? block : null}
                onSubmit={(e) => handleSubmit(e, block?.type || 6)}
            />
        </div>
    );
}
