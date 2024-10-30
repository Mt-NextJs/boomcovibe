import { useBlockSubmit } from "hooks/useBlockSubmit";
import Link from "next/link";
import React from "react";

interface scheduleProps {
  flag: number;
  data: Schedule;
}
const dateFormat = (date: Date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const period = hours >= 12 ? "오후" : "오전";
  const adjustedHours = hours % 12 || 12;

  return `${month}.${day}(${period} ${adjustedHours}시${minutes === "00" ? "" : ` ${minutes}분`})`;
};

const checkDate = (startDate: Date, endDate: Date) => {
  const now = new Date(); // 현재 날짜 및 시간

  // 오늘 날짜가 시작 날짜보다 전인지 확인
  if (now < startDate) {
    const diffInMs = startDate.getTime() - now.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // 남은 일 수 계산
    const diffInHours = Math.floor(
      (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); // 남은 시간 계산
    return diffInDays;
  }

  // 오늘 날짜가 종료 날짜를 넘었으면
  if (now > endDate) {
    return -1;
  }

  if (startDate <= now && now < endDate) {
    return -2;
  }
};

export default function ScheduleList({ flag, data }: scheduleProps) {
  const { paramsId } = useBlockSubmit();
  const startDate = dateFormat(new Date(data?.dateStart));
  const endDate = dateFormat(new Date(data?.dateEnd));
  const dateCheck = checkDate(
    new Date(data?.dateStart),
    new Date(data?.dateEnd)
  );

  return (
    <>
      {flag === 2 ? (
        <>
          <section className="mb-4 flex h-40 w-full cursor-default justify-center gap-1">
            <div className="flex h-20 w-5/6 cursor-default items-center gap-6">
              <div className="relative h-16 w-24">
                <div className="absolute left-[50%] flex h-8 w-20 translate-x-[-50%] transform justify-center">
                  {dateCheck === -1 ? (
                    <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                      <p className="h-fit px-1 text-xs font-bold text-primary-450">
                        CLOSED
                      </p>
                    </div>
                  ) : dateCheck === -2 ? (
                    <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-primary-450 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-primary-450 after:content-['']">
                      <p className="h-fit px-1 text-xs font-bold text-white">
                        OPEN
                      </p>
                    </div>
                  ) : (
                    <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                      <p className="h-fit px-1 text-xs font-bold text-primary-450">
                        D - {dateCheck}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex h-20 w-[21rem] transform flex-col justify-evenly">
                <p className="truncate text-sm text-gray-400">
                  {`${startDate} ~ ${endDate}`}
                </p>
                <p className="truncate font-bold underline">{data.title}</p>
              </div>
            </div>
            <div className="flex h-40 w-1/6 flex-col items-center justify-evenly gap-4">
              <Link href={`/admin/block/calendar/form?paramsId=${paramsId}`}>
                <button className="rounded-xl bg-gray-200 px-5 py-3.5 font-bold hover:bg-gray-400">
                  수정
                </button>
              </Link>
              <button className="rounded-xl bg-red-100 px-5 py-3.5 font-bold text-red-500 hover:bg-red-300">
                삭제
              </button>
            </div>
          </section>
          <div className="my-4 w-full border-1"></div>
        </>
      ) : (
        <section className="flex h-20 w-full cursor-default justify-center gap-1">
          <div className="relative h-16 w-24">
            <div className="absolute left-[50%] flex h-8 w-20 translate-x-[-50%] transform justify-center">
              {dateCheck === -1 ? (
                <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                  <p className="h-fit px-1 text-xs font-bold text-primary-450">
                    CLOSED
                  </p>
                </div>
              ) : dateCheck === -2 ? (
                <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-primary-450 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-primary-450 after:content-['']">
                  <p className="h-fit px-1 text-xs font-bold text-white">
                    OPEN
                  </p>
                </div>
              ) : (
                <div className="relative flex h-full w-16 items-center justify-center rounded-lg bg-gray-100 after:absolute after:right-[-12%] after:z-[-1] after:aspect-square after:h-6 after:rotate-45 after:transform after:rounded-lg after:bg-gray-100 after:content-['']">
                  <p className="h-fit px-1 text-xs font-bold text-primary-450">
                    D - {dateCheck}
                  </p>
                </div>
              )}
            </div>
          </div>
          {flag === 1 ? (
            <div className="relative mx-1 h-[110%] translate-y-[15%] transform border-1">
              <div className="absolute h-2 w-2 translate-x-[-50%] translate-y-[-10%] transform rounded-full bg-primary-450"></div>
            </div>
          ) : null}
          <div className="flex w-[21rem] translate-y-[-5%] transform flex-col justify-evenly">
            <p className="truncate text-sm text-gray-400">
              {`${startDate} ~ ${endDate}`}
            </p>
            <p className="truncate font-bold underline">{data.title}</p>
          </div>
        </section>
      )}
    </>
  );
}
