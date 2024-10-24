type Props = Pick<Block, 'title' | 'subText01' | 'subText02'>;

export default function MapAdmin({ title, subText01, subText02 }: Props) {
    const addressObj = JSON.parse(subText01);
    const fullAddress = addressObj.areaAddress + addressObj.townAddress;

    return (
        <div className="text-sm">
            <div className="flex items-center justify-start gap-2 text-left">
                <p className="w-16 text-gray-400">장소명</p>
                <span className="">{title}</span>
            </div>
            <div className="flex items-center gap-2 text-left">
                <p className="w-16 text-gray-400">주소</p>
                <span className="">{fullAddress}</span>
            </div>
            <div className="flex items-center gap-2 text-left">
                <p className="w-16 text-gray-400">장소 설명</p>
                <span className="">{subText02}</span>
            </div>
        </div>
    );
}
