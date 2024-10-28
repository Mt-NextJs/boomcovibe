import { useEffect, useRef } from 'react';

export default function TextForm({
    onSubmit,
    title,
    handleTitleChange,
    paramsId,
}: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    title: string;
    handleTitleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    paramsId: string;
}) {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    // textarea 높이를 텍스트 길이에 맞춰 조정
    const textareaHeight = () => {
        if (textareaRef.current) {
            if (title.length <= 43 && !title.includes('\n')) {
                textareaRef.current.style.height = '48px';
            } else {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        }
    };

    useEffect(() => {
        textareaHeight();
    }, [title]);
    return (
        <form onSubmit={onSubmit} className="mb-10 flex flex-col gap-2">
            <div className="flex justify-between">
                <label htmlFor="content">
                    내용 입력
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <p>
                    {title.length || 0}{' '}
                    <span className="text-slate-300">/ 500</span>
                </p>
            </div>
            <textarea
                ref={textareaRef}
                maxLength={500}
                name="title"
                id="title"
                placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
                className="max-h-[800px] min-h-12 w-full resize-none overflow-hidden rounded-lg border-1 border-gray-200 p-3 focus:border-primary-200 focus:outline-none"
                value={title}
                onChange={handleTitleChange}
            />

            <button
                className={`button color ${title.trim().length === 0 && 'disable'}`}
            >
                {paramsId ? '수정 완료' : '추가 완료'}
            </button>
        </form>
    );
}
