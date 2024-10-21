// types.ts
interface DayInfo {
    date: number;
    isCurrentMonth: boolean;
    isPrevMonth?: boolean;
    isNextMonth?: boolean;
    isToday?: boolean;
}

// Calendar.tsx
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface CalendarProps {
    setValue: (value: string) => void; // YYYY.MM.DD 형식의 문자열을 받는 함수
    value?: string; // YYYY.MM.DD 형식의 문자열
}

const Calendar: React.FC<CalendarProps> = ({ setValue, value }) => {
    // value가 있으면 파싱해서 초기값으로 설정
    const parseInitialDate = (): Date => {
        if (value) {
            const [year, month, day] = value.split('.');
            return new Date(Number(year), Number(month) - 1, Number(day));
        }
        return new Date();
    };

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        parseInitialDate(),
    );

    // 날짜를 YYYY.MM.DD 형식의 문자열로 변환
    const formatDateToString = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    const weekDays: string[] = ['일', '월', '화', '수', '목', '금', '토'];
    const months: string[] = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
    ];

    const isToday = (date: Date): boolean => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const generateDays = (): DayInfo[] => {
        const days: DayInfo[] = [];

        // 현재 달의 첫 날과 마지막 날
        const firstDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            1,
        );
        const lastDayOfMonth = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            0,
        );

        // 이전 달의 날짜들 계산
        const daysFromPrevMonth = firstDayOfMonth.getDay();
        const prevMonthLastDay = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            0,
        ).getDate();

        // 이전 달의 날짜들 추가
        for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
            days.push({
                date: prevMonthLastDay - i,
                isCurrentMonth: false,
                isPrevMonth: true,
            });
        }

        // 현재 달의 날짜들 추가
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            days.push({
                date: i,
                isCurrentMonth: true,
                isToday: isToday(
                    new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth(),
                        i,
                    ),
                ),
            });
        }

        // 다음 달의 날짜들 추가
        const remainingDays = 42 - days.length;
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: i,
                isCurrentMonth: false,
                isNextMonth: true,
            });
        }

        return days;
    };

    const handleDateClick = (day: DayInfo): void => {
        if (day.isCurrentMonth) {
            const newSelectedDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day.date,
            );
            setSelectedDate(newSelectedDate);
            setValue(formatDateToString(newSelectedDate)); // 선택된 날짜를 문자열로 변환하여 상위 컴포넌트로 전달
        }
    };

    const navigateMonth = (direction: 'prev' | 'next'): void => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + (direction === 'prev' ? -1 : 1),
                1,
            ),
        );
    };

    return (
        <div className="mx-auto my-4 w-full overflow-hidden rounded-xl bg-white shadow-md">
            <div className="p-4">
                <div className="mb-4 flex items-center justify-between">
                    <button
                        onClick={() => navigateMonth('prev')}
                        className="rounded-full p-2 transition-colors hover:bg-gray-100"
                        aria-label="이전 달"
                    >
                        <FaChevronLeft className="h-5 w-5 text-gray-600" />
                    </button>

                    <h2 className="text-lg font-semibold text-gray-800">
                        {currentDate.getFullYear()}년{' '}
                        {months[currentDate.getMonth()]}
                    </h2>

                    <button
                        onClick={() => navigateMonth('next')}
                        className="rounded-full p-2 transition-colors hover:bg-gray-100"
                        aria-label="다음 달"
                    >
                        <FaChevronRight className="h-5 w-5 text-gray-600" />
                    </button>
                </div>

                <div className="mb-2 grid grid-cols-7 gap-1">
                    {weekDays.map((day, index) => (
                        <div
                            key={index}
                            className={`py-2 text-center text-sm font-medium ${index === 0 ? 'text-red-500' : 'text-gray-600'}`}
                        >
                            {day}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                    {generateDays().map((day, index) => {
                        const isSelected =
                            selectedDate &&
                            selectedDate.getDate() === day.date &&
                            selectedDate.getMonth() ===
                                currentDate.getMonth() &&
                            day.isCurrentMonth;

                        return (
                            <button
                                key={index}
                                onClick={() => handleDateClick(day)}
                                className={`relative rounded-full p-2 text-sm transition-colors ${
                                    day.isCurrentMonth
                                        ? 'hover:bg-gray-100'
                                        : 'text-gray-400'
                                } ${
                                    day.isToday
                                        ? 'bg-primary-100 font-semibold text-primary'
                                        : ''
                                } ${
                                    isSelected
                                        ? 'bg-primary text-white hover:bg-blue-600'
                                        : ''
                                } ${
                                    index % 7 === 0 && day.isCurrentMonth
                                        ? 'text-red-500'
                                        : ''
                                } `}
                                disabled={!day.isCurrentMonth}
                                aria-label={`${day.date}일`}
                            >
                                {day.date}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
