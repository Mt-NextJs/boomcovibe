import { useEffect, useState } from 'react';
import useBlockStore from 'store/useBlockStore';

export default function TextForm({
    state,
    onSubmit,
}: {
    state: Block | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
    const { updateBlock } = useBlockStore();
    const [inputValue, setInputValue] = useState(state?.title || '');

    useEffect(() => {
        console.log(state, 'state', state?.title);
        if (state) {
            setInputValue(state.title || '');
        }
    }, [state]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        if (state) updateBlock(state?.id, { title: e.target.value });
        else {
        }
    };
    return (
        <form
            onSubmit={onSubmit}
            method="POST"
            action="/api/admin/add"
            className="mb-10 flex flex-col gap-2"
        >
            <div className="flex justify-between">
                <label htmlFor="content">
                    내용 입력
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <p>
                    {state?.title?.length || 0}{' '}
                    <span className="text-slate-300">/ 500</span>
                </p>
            </div>
            <input
                name="title"
                id="title"
                placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
                className="input"
                value={inputValue}
                onChange={handleChange}
            />

            <button className="button color">
                {state ? '수정 완료' : '추가 완료'}
            </button>
        </form>
    );
}
