import React from 'react';
import Modal from './modal';
import PreblockProfile from '@app/admin/block/components/preview/preblock-profile';
import Divider from './divider';
import PreblockVideo from '@app/admin/block/components/preview/preblock-video';
import LinkStyle from '@app/admin/block/link/components/link-style';
import PreblockImage from '@app/admin/block/components/preview/preblock-image';
import PreblockEvent from '@app/admin/block/components/preview/preblock-event';
import PreblockText from '@app/admin/block/components/preview/preblock-text';
import PreblockCalendarOne from '@app/admin/block/components/preview/preblock-cal-one';
import PreblockCalendarTwo from '@app/admin/block/components/preview/preblock-cal-two';
import PreblockMap from '@app/admin/block/components/preview/preblock-map';
import PreblockNoContent from '@app/admin/block/components/preview/preblock-nocontent';

export default function PreviewPage({
    handlePreviewOpen,
    name,
    blocks,
}: {
    handlePreviewOpen: () => void;
    name: string;
    blocks: Block[];
}) {
    const renderBlock = (block: Block) => {
        const {
            id,
            sequence,
            type,
            style,
            title,
            url,
            schedule,
            subText01,
            subText02,
            dateStart,
            dateEnd,
        } = block;

        switch (type) {
            case 1:
                return <Divider className={''} style={style} />;
            case 2:
                return <PreblockVideo />;
            case 3:
                return (
                    <LinkStyle
                        title={title}
                        selectedStyle={style}
                        imgUrl={url}
                    />
                );
            case 4:
                return <PreblockImage title={title} url={url} />;
            case 5:
                return (
                    <PreblockEvent
                        eventTitle={title}
                        eventContent={subText01}
                        startDate={dateStart}
                        endDate={dateEnd}
                    />
                );
            case 6:
                return <PreblockText title={title} />;
            case 7:
                // return style === 1 ? (
                //     <PreblockCalendarOne flag={1} />
                // ) : (
                //     <PreblockCalendarTwo />
                // );
                return 'useEffect 해결중';
            case 8:
                const addressObj = subText01 ? JSON.parse(subText01) : {};
                const totalValue = {
                    id: id,
                    type: type,
                    sequence: sequence,
                    title: title,
                    subText01: subText01,
                    subText02: subText02,
                };
                return (
                    <PreblockMap
                        totalValue={totalValue}
                        addressObj={addressObj}
                    />
                );
            default:
                return <PreblockNoContent />;
        }
    };

    return (
        <>
            <Modal handleFunction={handlePreviewOpen}>
                <>
                    <PreblockProfile name={name} />
                    {blocks && blocks.length > 0 ? ( // blocks가 존재하는지 확인
                        blocks.map((block, index) => (
                            <div key={index} className="block-item">
                                {renderBlock(block)}
                            </div>
                        ))
                    ) : (
                        <PreblockNoContent />
                    )}
                </>
            </Modal>
        </>
    );
}
