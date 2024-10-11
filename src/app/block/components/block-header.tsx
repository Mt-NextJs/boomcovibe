import Link from 'next/link';
import Image from 'next/image';

export default function BlockHeader({
    windowIcon,
    iconLink,
    blockTitle,
    blockDescription,
}: {
    windowIcon: string;
    iconLink: string;
    blockTitle: string;
    blockDescription: string;
}) {
    return (
        <div className="p-10">
            <div className="relative mb-5 h-6 w-6 cursor-pointer">
                <Link href={iconLink}>
                    <Image
                        src={windowIcon}
                        alt="close"
                        layout="fill"
                        objectFit="cover"
                    />
                </Link>
            </div>
            <p className="pageName mb-10">{blockTitle}</p>
            <div className="flex flex-col gap-2">
                <label
                    htmlFor="src"
                    dangerouslySetInnerHTML={{ __html: blockDescription }}
                />
            </div>
        </div>
    );
}
