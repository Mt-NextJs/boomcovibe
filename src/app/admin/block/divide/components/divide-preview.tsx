import Divider from '@components/divider';

export default function DividePreview({
    divideStyle,
}: {
    divideStyle: number;
}) {
    return (
        <>
            <p className="mb-2">미리보기</p>
            <div className="mx-auto mb-10 h-56 w-full bg-slate-100 py-4">
                <div className="mx-auto h-full w-1/2 rounded-tl-3xl rounded-tr-3xl bg-white px-2 pt-2 shadow-lg">
                    <div className="mx-auto h-full w-full overflow-hidden rounded-tl-3xl rounded-tr-3xl border border-gray-100 px-4 pt-4">
                        <div className="flex h-2/5 w-full rounded-lg border border-gray-100 p-1 shadow-md">
                            <div className="aspect-square h-full rounded-lg bg-slate-300"></div>
                            <div className="mx-auto flex flex-col justify-center gap-2">
                                <div className="flex flex-row space-x-1">
                                    <span className="inline-flex items-center rounded-full bg-primary-100 px-2 text-sm">
                                        Last
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-lime-500 px-2 text-sm text-white">
                                        summer
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-300 px-2">
                                        🌻
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        ♥ 러브의 의류 마켓 ♥
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex h-2/5 w-full items-center justify-center">
                            <Divider
                                style={divideStyle}
                                className="relative flex w-[30%] items-center justify-center"
                            />
                        </div>

                        <div className="flex h-2/5 w-full rounded-lg border border-gray-100 p-1 shadow-md">
                            <div className="aspect-square h-full rounded-lg bg-slate-300"></div>
                            <div className="mx-auto flex flex-col justify-center gap-2">
                                <div className="flex flex-row space-x-1">
                                    <span className="inline-flex items-center rounded-full bg-primary-100 px-2 text-sm">
                                        Last
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-lime-500 px-2 text-sm text-white">
                                        summer
                                    </span>
                                    <span className="inline-flex items-center rounded-full bg-gray-300 px-2">
                                        🌻
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm">
                                        ♥ 러브의 의류 마켓 ♥
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
