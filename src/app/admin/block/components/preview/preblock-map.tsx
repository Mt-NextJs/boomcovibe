import React from 'react';
import KakaoMap from '../../map/components/kakaomap';

export default function PreblockMap({
    totalValue,
    addressObj,
}: {
    totalValue: MapBlock;
    addressObj: AddressProps;
}) {
    return (
        <>
            <div className="w-full max-w-[450px] rounded-xl bg-white shadow-lg">
                <div className="text-md p-4 text-gray-200">장소</div>
                <div className="flex flex-col items-center px-4">
                    <div>
                        {totalValue.title.length > 0 ? (
                            <>{totalValue.title}</>
                        ) : (
                            <>장소명을 입력해주세요</>
                        )}
                    </div>
                </div>
                {totalValue.subText01 && (
                    <KakaoMap address={totalValue.subText01} />
                )}

                <div className="m-2 flex items-center justify-center font-light text-gray-400">
                    {addressObj.areaAddress} {addressObj.townAddress}
                </div>
            </div>
        </>
    );
}
