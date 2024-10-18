import LinkStyleSelctor from './link-style-selector';
import { Dispatch } from 'react';

export default function LinkForm({
    state,
    dispatch,
    onSubmit,
}: {
    state: Block;
    dispatch:  Dispatch<BlockFormAction>;
    onSubmit:  (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
    return (
        <form method='POST' action='/api/link/add' onSubmit={onSubmit}>
            <LinkStyleSelctor state={state} dispatch={dispatch} />

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="title">
                    타이틀
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="링크는 잘 나타낼 수 있는 이름으로 입력해주세요"
                    className="input"
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_BLOCK',
                            payload: { title: e.target.value },
                        });
                    }}
                />
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="imgUrl">
                    이미지
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="imgUrl"
                    id="imgUrl"
                    placeholder="이미지의 주소를 입력해주세요."
                    className="input"
                    onChange={(e) => {
                        dispatch({
                            type: 'SET_BLOCK',
                            payload: { imgUrl: e.target.value },
                        });
                    }}
                />
            </div>

            <button className="button color">추가 완료</button>
        </form>
    );
}
