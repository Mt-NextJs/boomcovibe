import React from 'react';
import Image from 'next/image';
import Modal from './modal';

export default function HowtoModal({
    handleHowtoOpen,
}: {
    handleHowtoOpen: () => void;
}) {
    return (
        <Modal handleFunction={handleHowtoOpen}>
            <div className="flex flex-col items-center justify-center gap-5 rounded-lg px-4 py-12">
                <div className="space-y-2 text-center">
                    <p className="text-gray-600">블록을 추가하면</p>
                    <p>
                        <span className="text-orange-500">왼쪽 버튼</span>을
                        활용해보세요
                    </p>
                    <p className="mb-10 text-gray-600">
                        순서를 변경할 수 있어요
                    </p>
                </div>
                <Image
                    src={'/assets/icons/howto.gif'}
                    alt={'howtouse'}
                    width={280}
                    height={260}
                />
                <div className="space-y-2 text-center">
                    <p className="text-gray-600">변경된 순서는</p>
                    <p>
                        <span className="text-orange-500">미리보기 버튼</span>
                        에서
                    </p>
                    <p className="mb-10 text-gray-600">확인해보세요!</p>
                </div>
            </div>
        </Modal>
    );
}
