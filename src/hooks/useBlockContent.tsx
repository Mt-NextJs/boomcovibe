import Event from '@app/admin/components/event';
import MapAdmin from '@app/admin/components/map';
import Schedule from '@app/admin/components/schedule';
import Divider from '@components/divider';
import Image from 'next/image';

export const useBlockContent = (block: Block) => {
    switch (block.type) {
        case 1:
            return (
                <div className="flex h-full w-full flex-col gap-3">
                    <p className="mb-2">{block.title}</p>
                    <Divider
                        className="flex h-full items-center justify-center"
                        style={block.style}
                    />
                </div>
            );
        case 5:
            return (
                <Event
                    title={block.title}
                    dateStart={block.dateStart}
                    dateEnd={block.dateEnd}
                />
            );
        case 7:
            return <Schedule schedule={block.schedule} />;
        case 8:
            return (
                <MapAdmin
                    title={block.title}
                    subText01={block.subText01}
                    subText02={block.subText02}
                />
            );
        default:
            return (
                <>
                    {block.imgUrl && (
                        <div className="relative aspect-square h-16 overflow-hidden rounded-md">
                            <Image
                                src={block.imgUrl}
                                alt={''}
                                layout="fill"
                                className="rounded-md"
                                objectFit="cover"
                            />
                        </div>
                    )}
                    <div>{block.title}</div>
                </>
            );
    }
};
