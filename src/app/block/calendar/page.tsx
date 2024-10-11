import Link from 'next/link';
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
                <div>border-line</div>
                <div>
                    스타일설정
                    <div>selectbutton (list or calendar)</div>
                    <div>schedule component</div>
                    <div>border-line</div>
                    <div>추가된 모든 일정</div>
                    <div>select (진행/예정된 or 지난)</div>
                    <div>component</div>
                </div>
            </div>
        </>
    );
}
