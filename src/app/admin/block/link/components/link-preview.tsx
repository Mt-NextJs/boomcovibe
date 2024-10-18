export default function LinkPreview({title}: {title: string | null}) {
    return (
        <div className="mb-10 flex h-24 w-full items-center justify-center bg-slate-100 px-4 py-4">
            <div className="flex h-full w-5/6 justify-between rounded-lg bg-white p-1 shadow-lg">
                <div className="aspect-square h-full rounded-lg bg-slate-300"></div>
                <div className="flex grow items-center justify-center">
                    <p>{title||"타이틀을 입력해주세요"}</p>
                </div>
            </div>
        </div>
    );
}
