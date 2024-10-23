import React, { useEffect, useState } from "react";
import ScheduleList from "../../calendar/component/schedule-list";
import useBlockStore from "store/useBlockStore";

interface flagProps {
  flag: number;
}

export default function PreblockCalendarOne({ flag }: flagProps) {
  const { block } = useBlockStore();
  const [renderData, setRenderData] = useState<Schedule[]>([]);

  const dataList = renderData?.map((data, index) => (
    <ScheduleList key={index} flag={flag} data={data} />
  ));

  useEffect(() => {
    if (block?.schedule) {
      block?.schedule.sort((a, b) => {
        return (
          new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime()
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
            {dataList}
          </div>
        </div>
      ) : (
        <>{dataList}</>
      )}
    </>
  );
}
