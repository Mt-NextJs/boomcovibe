import React from 'react';
import ScheduleList from '../../calendar/component/schedule-list';

export default function PreblockCalendarOne() {
    return (
        <>
            <div className="h-64 w-full overflow-y-scroll rounded-xl bg-[#FFFFFF] p-5 shadow-[0px_8px_20px_#ced4da] [&::-webkit-scrollbar]:hidden">
                <div className="schedule-last flex flex-col justify-center gap-1 p-5">
                    <ScheduleList flag={1} />
                    <ScheduleList flag={1} />
                    <ScheduleList flag={1} />
                    <ScheduleList flag={1} />
                    <ScheduleList flag={1} />
                    <ScheduleList flag={1} />
                </div>
            </div>
        </>
    );
}
