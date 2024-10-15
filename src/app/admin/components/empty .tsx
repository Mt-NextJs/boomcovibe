import Image from 'next/image';

export default function Empty() {
    return (
        <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-4">
            <p className="text-center">
                표시할 블록이 없습니다.
                <br />+ 버튼을 눌러서 <strong>블록을 추가</strong>해보세요!
            </p>
            <Image
                src={'/assets/icons/icon-no-block.svg'}
                alt="no block"
                width={250}
                height={250}
            />
        </div>
    );
}
