'use client';
import useBlockStore from 'store/useBlockStore';
import CalendarDateComponent from '../../calendar/component/calendar-date';
import React, { useState, useEffect } from 'react';

interface SchedulePlus extends Schedule {
    colorClass: string;
}

export default function PreblockCalendarTwo() {
    const today = new Date();
    const [year, setYear] = useState<number>(today.getFullYear());
    const [month, setMonth] = useState<number>(today.getMonth() + 1);
    const todayDay = today.getDate();
    const [calendarDate, setCalendarDate] = useState<any[]>([]);
    const { block } = useBlockStore();
    //   색상표
    const amberClasses = [
        'bg-amber-500',
        'bg-amber-600',
        'bg-amber-700',
        'bg-yellow-300',
        'bg-yellow-400',
        'bg-yellow-500',
    ];

    const renderBlock = block?.schedule
        .sort((a: Schedule, b: Schedule) => {
            const dateStartA = new Date(a.dateStart);
            const dateStartB = new Date(b.dateStart);
            const dateEndA = new Date(a.dateEnd);
            const dateEndB = new Date(b.dateEnd);

            if (dateStartA.getTime() < dateStartB.getTime()) return -1;
            if (dateStartA.getTime() > dateStartB.getTime()) return 1;
            if (dateEndA.getTime() < dateEndB.getTime()) return 1;
            if (dateEndA.getTime() > dateEndB.getTime()) return -1;

            return 0;
        })
        .map((schedule: Schedule, index: number) => ({
            ...schedule,
            colorClass: amberClasses[index % amberClasses.length], // 색상 클래스 할당
        }));
    const renderBlocksForRange = (day: number, weekIndex: number) => {
        // 마지막 종료일을 추적하여 빈 블록을 넣을 위치 결정
        const blocksToRender: JSX.Element[] = [];

        renderBlock?.forEach((schedule: SchedulePlus) => {
            const startDate = new Date(schedule.dateStart);
            const endDate = new Date(schedule.dateEnd);

            if (
                startDate.getFullYear() === year &&
                startDate.getMonth() + 1 === month
            ) {
                // 시작일과 종료일을 비교하여 블록을 추가
                if (day >= startDate.getDate() && day <= endDate.getDate()) {
                    const isStart = day === startDate.getDate();
                    const isEnd = day === endDate.getDate();

                    let blockClass = `${schedule.colorClass} w-[102%] my-2 h-6`;
                    if (isStart)
                        blockClass = `${schedule.colorClass} my-2 h-6 text-center transform translate-x-1 rounded-l-lg ml-2 text-white`;
                    if (isEnd)
                        blockClass = `${schedule.colorClass} my-2 h-6 transform translate-x-[-1] rounded-r-lg mr-2`;

                    blocksToRender.push(
                        <div
                            key={`${schedule.id}-block`}
                            className={blockClass}
                        >
                            {isStart ? (
                                <p className="my-auto">{schedule.title}</p>
                            ) : null}
                        </div>,
                    );
                } else if (
                    day >= startDate.getDate() &&
                    day > endDate.getDate()
                ) {
                    blocksToRender.push(
                        <div
                            key={`${schedule.id}-block`}
                            className="my-2 h-6 bg-white"
                        ></div>,
                    );
                }
            }
        });

        return blocksToRender.length > 0 ? blocksToRender : null;
    };

    // 이번 달의 일수를 구하고, 첫 번째 날의 요일을 계산하여 달력 구조 생성
    const generateCalendar = () => {
        const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
        const daysInMonth = new Date(year, month, 0).getDate();
        const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        const calendarGrid = [];
        let currentWeek: any[] = new Array(firstDayOfMonth).fill(null);

        daysArray.forEach((day) => {
            currentWeek.push(day);
            if (currentWeek.length === 7) {
                calendarGrid.push(currentWeek);
                currentWeek = [];
            }
        });

        if (currentWeek.length > 0) {
            while (currentWeek.length < 7) {
                currentWeek.push(null); // 마지막 주를 null로 채움
            }
            calendarGrid.push(currentWeek);
        }

        setCalendarDate(calendarGrid);
    };

    useEffect(() => {
        generateCalendar();
    }, [year, month, block]); // block 상태가 바뀔 때마다 캘린더 다시 생성

    return (
        <>
            <div className="rounded-lg border lg:flex lg:h-full lg:flex-col">
                {/* 상단 날짜 선택 컴포넌트 */}
                <div className="flex items-center justify-center border-b border-gray-300 px-6 py-4 lg:flex-none">
                    <CalendarDateComponent
                        pastyear={year}
                        pastmonth={month}
                        pastsetYear={setYear}
                        pastsetMonth={setMonth}
                    />
                </div>

                {/* 요일 표시 */}
                <div className="bg-white-100 grid grid-cols-7 gap-px border-b border-gray-300 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                    {['일', '월', '화', '수', '목', '금', '토'].map(
                        (day, index) => (
                            <div
                                key={index}
                                className="flex justify-center bg-white py-2 text-sm"
                            >
                                <span>{day}</span>
                            </div>
                        ),
                    )}
                </div>

                {/* 일자 표시 */}
                <div className="bg-white-100 flex text-xs leading-6 text-gray-700 lg:flex-auto">
                    <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                        {calendarDate.length > 0 ? (
                            calendarDate.map((week: any, weekIndex: number) =>
                                week.map(
                                    (day: number | null, dayIndex: number) => (
                                        <div
                                            key={weekIndex * 10 + dayIndex}
                                            className="relative min-h-20 justify-center border-b border-r border-gray-200 bg-white"
                                        >
                                            {day ? (
                                                <>
                                                    <div className="px-3 pt-4">
                                                        <div
                                                        // className={`${
                                                        //     day === todayDay
                                                        //         ? 'bg-primary text-white'
                                                        //         : ''
                                                        // } flex h-6 w-6 items-start justify-center rounded-full text-base`}
                                                        >
                                                            {day}
                                                        </div>
                                                    </div>
                                                    {renderBlocksForRange(
                                                        day,
                                                        weekIndex,
                                                    )}
                                                </>
                                            ) : (
                                                <div className="h-6 w-6"></div>
                                            )}
                                        </div>
                                    ),
                                ),
                            )
                        ) : (
                            <div className="relative border-b border-r border-gray-300 bg-white px-3 py-4">
                                <p>표시할 데이터가 없습니다.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
