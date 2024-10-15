import Image from 'next/image';
import Link from 'next/link';

export default function DivideBlock() {
    return (
        <div className="p-10">
            <div className="relative mb-5 h-6 w-6 cursor-pointer">
                <Link href={'/block'}>
                    <Image
                        src="/assets/icons/icon_close.png"
                        alt="close"
                        layout="fill"
                        objectFit="cover"
                    />
                </Link>
            </div>
            <h1 className="pageName mb-10">구분선 블록</h1>
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
                            <Image
                                src={'/assets/icons/item_zigzag.png'}
                                alt="zigzag"
                                width={100}
                                height={100}
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
            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="divider-shape">
                    구분선 모양
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="divider-shape"
                    id="divider-sahpe"
                    className="hidden"
                />

                <div className="flex h-32 w-full gap-4">
                    <div className="flex h-full w-20 flex-col gap-2">
                        <div className="relative aspect-square w-full rounded-lg border border-gray-300"></div>
                        <p className="flex items-center justify-center">공백</p>
                    </div>
                    <div className="flex h-full w-20 flex-col gap-2">
                        <div className="relative flex aspect-square w-full items-center justify-center rounded-lg border border-gray-300">
                            <hr className="w-full border border-dashed border-black" />
                        </div>
                        <p className="flex items-center justify-center">점선</p>
                    </div>

                    <div className="flex h-full w-20 flex-col gap-2">
                        <div className="relative flex aspect-square w-full items-center justify-center rounded-lg border border-gray-300">
                            <hr className="w-full border border-black" />
                        </div>
                        <p className="flex items-center justify-center">실선</p>
                    </div>

                    <div className="flex h-full w-20 flex-col gap-2">
                        <div className="relative flex aspect-square w-full items-center justify-center rounded-lg border border-gray-300">
                            <span className="absoluteright-0 text-2xl text-black">
                                • • •
                            </span>
                        </div>
                        <p className="flex items-center justify-center">
                            포인트
                        </p>
                    </div>

                    <div className="flex h-full w-20 flex-col gap-2">
                        <div className="relative flex aspect-square w-full items-center rounded-lg border border-gray-300">
                            <Image
                                src={'/assets/icons/item_zigzag.png'}
                                alt="zigzag"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="flex items-center justify-center">
                            지그재그
                        </p>
                    </div>
                </div>
            </div>

            <button className="button color">추가 완료</button>
        </div>
    );
}
