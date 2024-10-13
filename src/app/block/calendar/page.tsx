import Link from 'next/link';
import Image from 'next/image';
import BlockHeader from '../components/block-header';

export default function CalendarBlock() {
    return (
        <>
            <BlockHeader
                windowIcon={'/assets/icons/icon_close.png'}
                iconLink={'/block'}
                blockTitle={'캘린더 블록'}
                blockDescription={`진행/예정된 일정이 1개 이상이어야
                  <br>
                  캘린더 블록을 공개할 수 있습니다`}
            />
            <div className="px-10">
                <Link href={'/block/calendar/form'}>
                    <button className="button color">
                        + 캘린더에 일정을 추가하세요
                    </button>
                </Link>
            </div>
            <div className="mb-10 h-3 w-full bg-gray-100" />
            <div className="px-10">
                <div>
                    <p className="mb-4 text-2xl font-semibold text-gray-700">
                        스타일설정
                    </p>
                    <div className="mb-4 flex flex-wrap">
                        <div className="flex gap-4">
                            <div className="flex">
                                <div className="circle mr-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary">
                                    <div className="button-color h-3 w-3 rounded-full border-2 border-orange-500 bg-primary"></div>
                                </div>
                                <div>리스트뷰</div>
                            </div>
                            <div className="flex">
                                <div className="circle mr-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-200">
                                    {/* <div className="button-color h-3 w-3 rounded-full border-2 border-orange-500 bg-primary"></div> */}
                                </div>
                                <div>캘린더뷰</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-20 mx-auto flex w-full flex-col gap-10">
                        <div className="h-64 w-full rounded-xl bg-[#FFFFFF] p-5 shadow-[0px_8px_20px_#ced4da]">
                            <div className="flex flex-col justify-center p-5">
                                <p>조금만 기다려주십쇼</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10 w-full border" />

            <p className="mb-5 px-10 text-2xl font-semibold text-gray-700">
                추가된 모든 일정
            </p>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 border-b px-10 text-2xl font-semibold">
                    <div className="border-b border-primary pb-2 text-primary">
                        진행/예정된
                    </div>
                    <div className="text-gray-400">지난</div>
                </div>
                <div className="mb-5 px-10 py-5">
                    <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                        <p className="text-center">
                            표시할 블록이 없습니다.
                            <br />+ 버튼을 눌러서 <strong>블록을 추가</strong>
                            해보세요!
                        </p>
                        <Image
                            src={'/assets/icons/icon_calendar.png'}
                            alt="no schedule"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
