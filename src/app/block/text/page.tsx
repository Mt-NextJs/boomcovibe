import Image from 'next/image';
import Link from 'next/link';

export default function PageBlock() {
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
            <p className="pageName mb-10">텍스트 블록</p>


            <div className="mb-10 flex flex-col gap-2">
                <div className="flex justify-between">
                    <label htmlFor="content">
                        내용 입력
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </label>
                    <p>
                        0 <span className="text-slate-300">/ 500</span>
                    </p>
                </div>
                <input
                    type="text"
                    name="content"
                    id="content"
                    placeholder="줄바꿈을 포함하여 원하는 내용을 자유롭게 입력해주세요."
                    className="input"
                />
            </div>


            <button className="button color">추가 완료</button>
        </div>
    );
}
