import React from 'react';
import Modal from './modal';
import PreblockProfile from '@app/admin/block/components/preview/preblock-profile';
import Divider from './divider';
import LinkStyle from '@app/admin/block/link/components/link-style';
import PreblockImage from '@app/admin/block/components/preview/preblock-image';
import PreblockEvent from '@app/admin/block/components/preview/preblock-event';
import PreblockText from '@app/admin/block/components/preview/preblock-text';
import PreblockCalOne from '@app/admin/block/components/preview/pre-cal-one';
import PreblockCalTwo from '@app/admin/block/components/preview/pre-cal-two';
import PreblockMap from '@app/admin/block/components/preview/preblock-map';
import PreblockNoContent from '@app/admin/block/components/preview/preblock-nocontent';
import VideoEmbed from '@app/admin/block/video/components/video-embed';
import PreblockPrivate from '@app/admin/block/components/preview/preblock-private';

export default function PreviewPage({
    handlePreviewOpen,
    name,
    isPrivate,
    blocks,
}: {
    handlePreviewOpen: () => void;
    name: string;
    isPrivate: boolean;
    blocks: Block[];
}) {
    const renderBlock = (block: Block) => {
        const {
            id,
            sequence,
            type,
            style,
            title,
            imgUrl,
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
                const videoId = url.split('v=')[1];
                const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
                const cleanVideoId =
                    ampersandPosition !== -1
                        ? videoId.substring(0, ampersandPosition)
                        : videoId;
                const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}`;
                return <VideoEmbed url={embedUrl} />;
            case 3:
                return (
                    <LinkStyle
                        title={title}
                        selectedStyle={style}
                        imgUrl={imgUrl}
                    />
                );
            case 4:
                return <PreblockImage title={title} url={imgUrl} />;
            case 5:
                const startD = dateStart.substring(0, 10);
                const endD = dateEnd.substring(0, 10);
                return (
                    <PreblockEvent
                        eventTitle={title}
                        eventContent={subText01}
                        startDate={startD}
                        endDate={endD}
                    />
                );
            case 6:
                return <PreblockText title={title} />;
            case 7:
                return style === 1 ? (
                    <PreblockCalOne schedule={schedule} />
                ) : (
                    <PreblockCalTwo />
                );

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
                {isPrivate ? (
                    <PreblockPrivate />
                ) : (
                    <div className="align-center flex flex-col gap-5">
                        <PreblockProfile name={name} />
                        {blocks && blocks.length > 0 ? ( // blocks가 존재하는지 확인
                            blocks.map((block, index) => (
                                <div
                                    key={index}
                                    className="grid w-full place-items-center"
                                >
                                    {renderBlock(block)}
                                </div>
                            ))
                        ) : (
                            <PreblockNoContent />
                        )}
                    </div>
                )}
            </Modal>
        </>
    );
}
