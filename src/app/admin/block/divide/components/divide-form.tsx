'use client';

import { useBlockSubmit } from 'hooks/useBlockSubmit';
import DivideSelector from './divide-selector';

export default function DivideForm({
    divideStyle,
    title,
    onSubmit,
    handleDivideStyleChange,
}: {
    divideStyle: number;
    title: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleDivideStyleChange: (index: number, title: string) => void;
}) {
    const { paramsId } = useBlockSubmit();
    return (
        <form onSubmit={onSubmit} className="mb-10 flex flex-col gap-2">
            <DivideSelector
                divideStyle={divideStyle}
                handleDivideStyleChange={handleDivideStyleChange}
            />
            <input type="hidden" name="style" value={divideStyle} />
            <input type="hidden" name="title" value={title} />
            <button type="submit" className="button color">
                {paramsId ? '수정 완료' : '추가 완료'}
            </button>
        </form>
    );
}
