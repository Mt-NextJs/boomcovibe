import Image from 'next/image';
import Link from 'next/link';

export default function VideoBlock() {
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
            <p className="pageName mb-10">동영상 블록</p>

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="video">
                    내용 입력
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>

                <input
                    type="text"
                    name="video"
                    id="video"
                    placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
                    className="input"
                />
            </div>

            <div className='w-full aspect-video rounded-lg bg-slate-400'>
                동영상 위치
            </div>

            <button className="button color">추가 완료</button>
        </div>
    );
}
