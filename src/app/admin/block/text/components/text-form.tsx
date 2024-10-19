import { Dispatch } from 'react';

export default function TextForm({
    state,
    dispatch,
    onSubmit,
}: {
    state: Block
    dispatch: Dispatch<BlockFormAction>;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
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
                    {state.title?.length||0} <span className="text-slate-300">/ 500</span>
                </p>
            </div>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
                className="input"
                onChange={(e) => {
                    dispatch({
                        type: 'SET_BLOCK',
                        payload: { title: e.target.value },
                    });
                }}
            />

            <button className="button color">추가 완료</button>
        </form>
    );
}
