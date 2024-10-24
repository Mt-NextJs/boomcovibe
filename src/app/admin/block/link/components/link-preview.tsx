import Image from 'next/image';
import useBlockStore from 'store/useBlockStore';
import LinkStyle from './link-style';
import { useBlockSubmit } from 'hooks/useBlockSubmit';

export default function LinkPreview({
    title,
    selectedStyle,
    imgUrl,
}: {
    title: string;
    selectedStyle: number;
    imgUrl: string;
}) {
    return (
        <div className="mb-10 flex h-fit min-h-20 w-full items-center justify-center bg-slate-100 px-4 py-4">
            <LinkStyle
                title={title}
                selectedStyle={selectedStyle}
                imgUrl={imgUrl}
            />
        </div>
    );
}
