import React, { useEffect, useState } from 'react';
import ScheduleList from '../../calendar/component/schedule-list';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import Image from 'next/image';

interface flagProps {
    flag: number;
}

export default function PreblockCalendarOne({ flag }: flagProps) {
    const { block, paramsId } = useBlockSubmit();
    const [renderData, setRenderData] = useState<Schedule[]>([]);

    const dataList = renderData?.map((data, index) => {
        return <ScheduleList key={index} flag={flag} data={data} />;
    });

    useEffect(() => {
        if (block?.schedule && paramsId) {
            block?.schedule.sort((a, b) => {
                return (
                    new Date(a.dateStart).getTime() -
                    new Date(b.dateStart).getTime()
                );
            });
            setRenderData(block.schedule);
        }
    }, [block]);
    return (
        <>
            {flag === 1 ? (
                <div className="h-64 w-full overflow-y-scroll rounded-xl bg-[#FFFFFF] p-5 shadow-[0px_8px_20px_#ced4da] [&::-webkit-scrollbar]:hidden">
                    <div className="schedule-last flex flex-col justify-center gap-1 p-5">
                        {dataList && paramsId ? (
                            dataList
                        ) : (
                            <>
                                <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                                    <p className="text-center">
                                        표시할 블록이 없습니다.
                                        <br />+ 버튼을 눌러서{' '}
                                        <strong>블록을 추가</strong>
                                        해보세요!
                                    </p>
                                    <Image
                                        src={'/assets/icons/icon_calendar.png'}
                                        alt="no schedule"
                                        width={50}
                                        height={50}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    {' '}
                    {dataList && paramsId ? (
                        dataList
                    ) : (
                        <>
                            <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                                <p className="text-center">
                                    표시할 블록이 없습니다.
                                    <br />+ 버튼을 눌러서{' '}
                                    <strong>블록을 추가</strong>
                                    해보세요!
                                </p>
                                <Image
                                    src={'/assets/icons/icon_calendar.png'}
                                    alt="no schedule"
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}
