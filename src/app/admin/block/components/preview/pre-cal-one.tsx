import ScheduleList from '../../calendar/component/schedule-list';

export default function PreblockCalOne({ schedule }: { schedule: Schedule[] }) {
    const dataList = schedule.map((data, index) => (
        <ScheduleList key={index} flag={1} data={data} />
    ));

    return (
        <>
            <div className="h-64 w-full overflow-y-scroll rounded-xl bg-[#FFFFFF] py-5 shadow-[0px_8px_20px_#ced4da] [&::-webkit-scrollbar]:hidden">
                <div className="schedule-last flex flex-col justify-center gap-1 p-3">
                    {dataList}
                </div>
            </div>
        </>
    );
}
