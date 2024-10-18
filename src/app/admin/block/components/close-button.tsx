import Image from 'next/image';
import Link from 'next/link';

export default function CloseButton() {
    return (
        <div className="relative mb-5 h-6 w-6 cursor-pointer">
            <Link href={'/admin'}>
                <Image
                    src="/assets/icons/icon_close.png"
                    alt="close"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Link>
        </div>
    );
}