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
        <div className="px-10 pt-10">
            <div className="relative mb-5 h-6 w-6 cursor-pointer">
                <Link href={iconLink}>
                    <Image
                        src={windowIcon}
                        alt="close"
                        width={24}
                        height={24}
                        style={{ objectFit: 'cover' }}
                    />
                </Link>
            </div>
            <p className="pageName">{blockTitle}</p>
            <div className="mt-10 flex flex-col gap-2">
                <label
                    htmlFor="src"
                    dangerouslySetInnerHTML={{ __html: blockDescription }}
                />
            </div>
        </div>
    );
}
