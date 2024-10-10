import Image from 'next/image';
import Link from 'next/link';

export default function LinkBlock() {
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
            <p className="pageName mb-10">링크 블록</p>

            <div className="mb-10 flex h-24 w-full items-center justify-center bg-slate-100 px-4 py-4">
                <div className="flex h-full w-5/6 justify-between rounded-lg bg-white p-1 shadow-lg">
                    <div className="aspect-square h-full rounded-lg bg-slate-300"></div>
                    <div className="flex grow items-center justify-center">
                        <p>타이틀을 입력해주세요</p>
                    </div>
                </div>
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="style">
                    스타일
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input type="text" name="style" id="style" className="hidden" />

                <div className="flex gap-4">
                    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-2">
                        <div className="relative h-16 w-full rounded-lg border border-orange-500 p-4">
                            <Image
                                src="/assets/icons/item_card_001.png"
                                alt="thumbnail"
                                layout="fill"
                                objectFit="contain"
                                className="px-8 py-2"
                            />
                        </div>
                        <p className="text-center">썸네일</p>
                    </div>

                    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-2">
                        <div className="relative h-16 w-full rounded-lg border border-orange-500 p-4">
                            <Image
                                src="/assets/icons/item_card_004.png"
                                alt="simple"
                                layout="fill"
                                objectFit="contain"
                                className="px-8 py-2"
                            />
                        </div>
                        <p className="text-center">심플</p>
                    </div>

                    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-2">
                        <div className="relative h-16 w-full rounded-lg border border-orange-500 p-4">
                            <Image
                                src="/assets/icons/item_card_003.png"
                                alt="card"
                                layout="fill"
                                objectFit="contain"
                                className="px-8 py-2"
                            />
                        </div>
                        <p className="text-center">카드</p>
                    </div>

                    <div className="flex h-24 w-1/4 flex-col items-center justify-center gap-2">
                        <div className="relative h-16 w-full rounded-lg border border-orange-500 p-4">
                            <Image
                                src="/assets/icons/item_card_002.png"
                                alt="background"
                                layout="fill"
                                objectFit="contain"
                                className="px-8 py-2"
                            />
                        </div>
                        <p className="text-center">배경</p>
                    </div>
                </div>
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="link">
                    연결할 주소
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    placeholder="연결하고 싶은 링크 주소 전체를 입력해주세요"
                    className="input"
                />
            </div>

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
                />
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="image">
                    이미지
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input type="file" name="image" id="image" className="hidden" />
            </div>

            <button className="button color">추가 완료</button>
        </div>
    );
}
