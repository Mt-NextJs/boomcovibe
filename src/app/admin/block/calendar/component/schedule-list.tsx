import React from 'react';

export default function ScheduleList({ flag }: { flag: number }) {
    return (
        <>
            {flag === 2 ? (
                <>
                    <section className="mb-4 flex h-40 w-full cursor-default justify-center gap-1">
                        <div className="flex h-20 w-5/6 cursor-default items-center gap-6">
                            <div className="relative h-16 w-24">
                                <div className="absolute left-[50%] flex h-8 w-20 translate-x-[-50%] transform justify-center">
                                    <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                                        <p className="h-fit px-1 text-xs font-bold text-primary-450">
                                            CLOSED
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-20 w-[21rem] transform flex-col justify-evenly">
                                <p className="truncate text-sm text-gray-400">
                                    10.14(오전 10시) ~ 10.18(오후 6시)
                                </p>
                                <p className="truncate font-bold underline">
                                    [SAMPLE] 첫 번째 일정 예시
                                </p>
                            </div>
                        </div>
                        <div className="flex h-40 w-1/6 flex-col items-center justify-evenly gap-4">
                            <button className="rounded-xl bg-gray-200 px-5 py-3.5 font-bold hover:bg-gray-400">
                                수정
                            </button>
                            <button className="rounded-xl bg-red-100 px-5 py-3.5 font-bold text-red-500 hover:bg-red-300">
                                삭제
                            </button>
                        </div>
                    </section>
                    <div className="my-4 w-full border-1"></div>
                    <section className="mb-4 flex h-40 w-full cursor-default justify-center gap-1">
                        <div className="flex h-20 w-5/6 cursor-default items-center gap-6">
                            <div className="relative h-16 w-24">
                                <div className="absolute left-[50%] flex h-8 w-20 translate-x-[-50%] transform justify-center">
                                    <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                                        <p className="h-fit px-1 text-xs font-bold text-primary-450">
                                            SOON
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex h-20 w-[21rem] transform flex-col justify-evenly">
                                <p className="truncate text-sm text-gray-400">
                                    10.14(오전 10시) ~ 10.18(오후 6시)
                                </p>
                                <p className="truncate font-bold underline">
                                    [SAMPLE] 첫 번째 일정 예시
                                </p>
                            </div>
                        </div>
                        <div className="flex h-40 w-1/6 flex-col items-center justify-evenly gap-4">
                            <button className="rounded-xl bg-gray-200 px-5 py-3.5 font-bold hover:bg-gray-400">
                                수정
                            </button>
                            <button className="rounded-xl bg-red-100 px-5 py-3.5 font-bold text-red-500 hover:bg-red-300">
                                삭제
                            </button>
                        </div>
                    </section>
                    <div className="my-4 w-full border-1"></div>
                </>
            ) : (
                <section className="flex h-20 w-full cursor-default justify-center gap-1">
                    <div className="relative h-16 w-24">
                        <div className="absolute left-[50%] flex h-8 w-20 translate-x-[-50%] transform justify-center">
                            <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                                <p className="h-fit px-1 text-xs font-bold text-primary-450">
                                    SOON
                                </p>
                            </div>
                        </div>
                    </div>
                    {flag === 1 ? (
                        <div className="relative mx-1 h-[110%] translate-y-[15%] transform border-1">
                            <div className="absolute h-2 w-2 translate-x-[-50%] translate-y-[-10%] transform rounded-full bg-primary-450"></div>
                        </div>
                    ) : null}
                    <div className="flex w-[21rem] translate-y-[-5%] transform flex-col justify-evenly">
                        <p className="truncate text-sm text-gray-400">
                            10.14(오전 10시) ~ 10.18(오후 6시)
                        </p>
                        <p className="truncate font-bold underline">
                            [SAMPLE] 첫 번째 일정 예시
                        </p>
                    </div>
                </section>
            )}
        </>
    );
}
