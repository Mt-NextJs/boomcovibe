import Image from 'next/image';
import useBlockStore from 'store/useBlockStore';

export default function LinkPreview({
    title,
    selectedStyle,
}: {
    title: string | null;
    selectedStyle: number;
}) {
    const { block } = useBlockStore();
    return (
        <div className="mb-10 flex h-fit min-h-20 w-full items-center justify-center bg-slate-100 px-4 py-4">
            <div className="flex h-full min-h-16 w-5/6 justify-between rounded-lg bg-white p-1 shadow-lg">
                {selectedStyle === 1 && (
                    <div className="aspect-square h-full rounded-lg bg-slate-300">
                        <Image
                            src={block?.imgUrl || ''}
                            alt="link-preview"
                            width={100}
                            height={100}
                        />
                    </div>
                )}

                <div className="flex grow items-center justify-center">
                    <p>{title || '타이틀을 입력해주세요'}</p>
                    <p>{selectedStyle}</p>
                </div>
            </div>
        </div>
    );
}
