import Image from 'next/image';

export default function LinkStyle({
    title,
    selectedStyle,
    imgUrl,
}: {
    title: string;
    selectedStyle: number;
    imgUrl: string;
}) {
    console.log(selectedStyle);
    return (
        <div
            className={`relative flex h-full min-h-16 w-5/6 overflow-hidden rounded-lg bg-white shadow-lg ${selectedStyle === 3 && 'flex-col'} ${selectedStyle === 1 && 'p-2'}`}
        >
            {selectedStyle === 1 && (
                <div className="relative aspect-square h-20 overflow-hidden rounded-lg bg-slate-300">
                    {imgUrl && (
                        <Image
                            src={imgUrl}
                            alt="link-image"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="absolute inset-0 z-0"
                        />
                    )}
                </div>
            )}
            {selectedStyle === 2 && (
                <div className="h-full rounded-lg bg-slate-300">
                    {imgUrl && (
                        <Image
                            src={imgUrl}
                            alt="link-image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 z-0"
                        />
                    )}
                </div>
            )}

            {selectedStyle === 3 && (
                <div className="relative aspect-square h-96 rounded-t-lg bg-slate-300">
                    {imgUrl && (
                        <Image
                            src={imgUrl}
                            alt="link-image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 z-0"
                        />
                    )}
                </div>
            )}

            <div
                className={`${selectedStyle === 2 && !imgUrl && 'bg-slate-300'} z-10 flex min-h-16 grow items-center justify-center`}
            >
                <p>{title || '타이틀을 입력해주세요'}</p>
            </div>
        </div>
    );
}
