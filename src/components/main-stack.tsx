import Image from 'next/image';

export default function BlockStack() {
    return (
        <div className="relative flex h-[40rem] min-w-[16rem] flex-col">
            <Image
                src="/assets/icons/icon-block1.png"
                alt="block1"
                width={230}
                height={155}
                className="loading-block-first absolute z-30 transform transition duration-500 hover:-translate-y-20"
            />
            <Image
                src="/assets/icons/icon-block2.png"
                alt="block2"
                width={230}
                height={155}
                className="loading-block-second absolute z-20 transform transition duration-500 hover:-translate-y-20"
            />
            <Image
                src="/assets/icons/icon-block1.png"
                alt="block3"
                width={230}
                height={192}
                className="loading-block-third absolute z-10 transform transition duration-500 hover:-translate-y-20"
            />
            <Image
                src="/assets/icons/icon-block2.png"
                alt="block4"
                width={230}
                height={236}
                className="loading-block-fourth absolute z-0 transform transition duration-500 hover:translate-x-20"
            />
        </div>
    );
}
