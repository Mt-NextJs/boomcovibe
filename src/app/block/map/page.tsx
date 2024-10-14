'use client';

import React, { useState, useEffect } from 'react';
import BlockHeader from '../components/block-header';
import DaumPost from './components/address';
import KakaoMap from './components/kakaomap';

interface Props {
    areaAddress: string;
    townAddress: string;
}

export interface postMapDataType {
    address: string;
    title: string;
    content: string;
}

export default function MapBlock() {
    const [addressObj, setAddressObj] = useState<Props>({
        areaAddress: '',
        townAddress: '',
    });
    const [totalValue, setTotalValue] = useState<postMapDataType>({
        address: '',
        title: '',
        content: '',
    });

    const handleInputFunction = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        const name = event.target.name;
        const value = event.target.value;
        setTotalValue((prev: postMapDataType) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 주소 데이터 입력 함수
    useEffect(() => {
        setTotalValue((prev: postMapDataType) => ({
            ...prev,
            address: JSON.stringify(addressObj),
        }));
    }, [addressObj]);

    return (
        <>
            <BlockHeader
                windowIcon={'/assets/icons/icon_close.png'}
                iconLink={'/block'}
                blockTitle={'지도 블록'}
                blockDescription={`주소를 검색하여 등록해주세요`}
            />
            <div className="px-10">
                <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                    <div className="w-full max-w-[450px] rounded-xl bg-white shadow-lg">
                        <div className="text-md p-4 text-gray-200">지도</div>
                        <div className="flex flex-col items-center px-4">
                            <div>
                                {totalValue.title.length > 0 ? (
                                    <>{totalValue.title}</>
                                ) : (
                                    <>장소명을 입력해주세요</>
                                )}
                            </div>
                        </div>
                        <KakaoMap
                            address={
                                addressObj.areaAddress +
                                ' ' +
                                addressObj.townAddress
                            }
                        />

                        <div className="text-h6 mt-4">
                            {addressObj.areaAddress} {addressObj.townAddress}
                        </div>
                    </div>
                </div>

                <div className="my-10 w-full border-b" />

                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="title">장소명</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={totalValue.title}
                        onChange={handleInputFunction}
                        placeholder="장소를 잘 나타낼 수 있는 제목을 입력해주세요"
                        className="input"
                    />
                </div>

                <div className="text-h5 leading-12 text-black-100 block flex flex-col justify-center font-bold">
                    주소찾기
                </div>
                <div className="block flex justify-end">
                    <DaumPost setAddressObj={setAddressObj} />
                </div>
            </div>
        </>
    );
}
