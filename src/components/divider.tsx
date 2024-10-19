import Image from 'next/image';

export default function Divider({
    className,
    style,
}: {
    className: string;
    style: number;
}) {
    return (
        <>
            {style === 1 && <div className={className}> </div>}
            {style === 2 && (
                <div className={className}>
                    <hr className="w-full border border-dashed border-black" />
                </div>
            )}
            {style === 3 && (
                <div className={className}>
                    <hr className="w-full border border-black" />
                </div>
            )}
            {style === 4 && (
                <div className={className}>
                    <span className="absoluteright-0 text-2xl text-black">
                        • • •
                    </span>
                </div>
            )}
            {style === 5 && (
                <div className={className}>
                    <Image
                        src={'/assets/icons/item_zigzag.png'}
                        alt="zigzag"
                        width={100}
                        height={100}
                    />
                </div>
            )}
        </>
    );
}
