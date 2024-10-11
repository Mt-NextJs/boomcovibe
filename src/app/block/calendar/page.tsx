import Image from 'next/image';
import Link from 'next/link';

export default function CalendarBlock() {
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
            <p className="pageName mb-10">일정 추가하기</p>
            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="src">
                    입력하는 전체 기간에 따라
                    <br />
                    전체 일정이 최근 날짜 순서로 자동 정렬됩니다.
                </label>
                <input
                    type="text"
                    name="src"
                    id="src"
                    placeholder="원하는 이미지 URL을 알려주세요"
                    className="input"
                />
            </div>
            <div className="relative mb-10 h-[40rem] w-full">
                <Image
                    src="/assets/icons/icon_image.png"
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-0 filter"
                />
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <div className="flex justify-between">
                    <label htmlFor="title">타이틀</label>
                    <p>
                        0 <span className="text-slate-300">/ 30</span>
                    </p>
                </div>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="이미지 하단에 함께 보여줄 수 있어요"
                    className="input"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="link">연결할 주소</label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    placeholder="이미지를 통해 이동시키고 싶은 링크가 있나요?"
                    className="input"
                />
            </div>

            <button className="button color">추가 완료</button>
        </div>
    );
}
