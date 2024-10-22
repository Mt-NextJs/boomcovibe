'use client';
import CalendarDateComponent from '../../calendar/component/calendar-date';
import React, { useState, useEffect } from 'react';

export default function PreblockCalendarTwo() {
    const today = new Date();
    const [year, setYear] = useState<number>(today.getFullYear());
    const [month, setMonth] = useState<number>(today.getMonth() + 1);
    const todayDay = today.getDate();
    const [calendarDate, setCalendarDate] = useState<any[]>([]);

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
    }, [year, month]);

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
                            calendarDate.map((week: any, idx: number) =>
                                week.map(
                                    (day: number | null, idxes: number) => (
                                        <div
                                            key={idx * 10 + idxes}
                                            className="relative min-h-24 justify-center border-b border-r border-gray-200 bg-white px-3 py-4"
                                        >
                                            {day ? (
                                                <div
                                                    className={`${
                                                        day === todayDay
                                                            ? 'bg-primary text-white'
                                                            : ''
                                                    } flex h-6 w-6 items-start justify-center rounded-full text-base`}
                                                >
                                                    {day}
                                                </div>
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
