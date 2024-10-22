'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { addBlock } from 'service/block-api';
import BlockHeader from '../components/block-header';
import PreblockEvent from '../components/preview/preblock-event';
import Calendar from '../components/calendar';
import TimePicker from '../components/time-picker';

export default function EventBlock() {
    const router = useRouter();
    const [eventTitle, setEventTitle] = useState<string>('');
    const [eventContent, setEventContent] = useState<string>('');
    const [eventGuide, setEventGuide] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [startCalendar, setStartCalendar] = useState<boolean>(false);
    const [endCalendar, setEndCalendar] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<boolean>(false);
    const [endTime, setEndTime] = useState<boolean>(false);
    const [startTimeValue, setStartTimeValue] = useState<string>('');
    const [dateTimeCheck, setDateTimeCheck] = useState<boolean>(false);
    const [endTimeValue, setEndTimeValue] = useState<string>('');
    const [startISO, setStartISO] = useState<string>('');
    const [endISO, setEndISO] = useState<string>('');
    console.log(startISO, 'startIso', endISO, 'endISO');

    // 블록 추가 호출
    const addNewBlock = async (): Promise<void> => {
        const accessToken = AC; // 사용자 토큰

        try {
            const blockData: EventBlock = {
                type: 5, // 링크 블록
                sequence: 38,
                title: eventTitle,
                subText01: eventContent,
                subText02: eventGuide,
                dateStart: startISO, // ISO 날짜 형식
                dateEnd: endISO, // ISO 날짜 형식
            };

            const result = await addBlock({ accessToken, blockData });
            // console.log('Block added successfully:', result);
            router.push('/admin');
        } catch (error) {
            console.error('Error adding block:', error);
        }
    };

    useEffect(() => {
        if (startDate && startTimeValue) {
            // 한국 시간의 오프셋 적용 (UTC+9)
            const combinedDateTime = `${startDate}T${startTimeValue}:00`; // T로 날짜와 시간을 구분
            const dateObj = new Date(combinedDateTime.replace(/\./g, '-'));
            const koreanISO = new Date(
                dateObj.getTime() + 9 * 60 * 60 * 1000,
            ).toISOString();
            setStartISO(koreanISO);
        }

        if (endTimeValue) {
            // endTime의 처리
            const combinedEndDateTime = `${endDate}T${endTimeValue}:00`;
            const endDateObj = new Date(
                combinedEndDateTime.replace(/\./g, '-'),
            );
            const koreanISOEnd = new Date(
                endDateObj.getTime() + 9 * 60 * 60 * 1000,
            ).toISOString();
            setEndISO(koreanISOEnd);
        }
    }, [dateTimeCheck]);

    useEffect(() => {
        if (startDate.trim() !== '' && startTimeValue.trim() !== '') {
            setDateTimeCheck(!dateTimeCheck);
        }
        if (endDate.trim() !== '' && endTimeValue.trim() !== '') {
            setDateTimeCheck(!dateTimeCheck);
        }
    }, [startDate, startTimeValue, endDate, endTimeValue]);

    return (
        <div>
            <BlockHeader
                windowIcon={'/assets/icons/icon_close.png'}
                iconLink={'/admin'}
                blockTitle={'이벤트 블록'}
                blockDescription={''}
            />
            <div className="px-10">
                <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                    <PreblockEvent
                        eventTitle={eventTitle}
                        eventContent={eventContent}
                        startDate={startDate}
                        endDate={endDate}
                    />
                </div>

                <div className="my-10 w-full border-b" />

                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="link">이벤트명</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        placeholder="이벤트를 잘 나타낼 수 있는 타이틀을 입력해주세요"
                        className="input"
                    />
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="link">이벤트 설명</label>
                    </div>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={eventContent}
                        onChange={(e) => setEventContent(e.target.value)}
                        placeholder="어떤 이벤트인지 설명을 입력해주세요"
                        className="input"
                    />
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <label htmlFor="link">가이드 문구</label>

                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={eventGuide}
                        onChange={(e) => setEventGuide(e.target.value)}
                        placeholder="이벤트의 응모 조건이나, 가이드를 작성해보세요"
                        className="input"
                    />
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="link">이벤트 일정</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>

                    <div className="min-h-1/2 flex w-full flex-1 flex-col justify-center gap-2 rounded-md bg-gray-100 p-12">
                        <div className="flex gap-2">
                            <div className="flex min-w-9 items-center">
                                시작{' '}
                            </div>
                            <div className="relative w-full text-gray-700">
                                <input
                                    type="text"
                                    className="relative w-full cursor-pointer rounded-lg border-gray-300 bg-white py-2.5 pl-4 pr-14 text-sm font-light tracking-wide placeholder-gray-400 transition-all duration-300 focus:border-orange-500 focus:ring focus:ring-orange-500/20 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:bg-slate-800 dark:text-white/80"
                                    placeholder="날짜 선택"
                                    value={startDate}
                                    readOnly={true}
                                    onClick={() => {
                                        {
                                            startCalendar === true
                                                ? setStartCalendar(false)
                                                : setStartCalendar(true);
                                            setStartTime(false);
                                        }
                                    }}
                                />
                            </div>
                            <div className="relative w-full text-gray-700">
                                <input
                                    type="text"
                                    className="relative w-full cursor-pointer rounded-lg border-gray-300 bg-white py-2.5 pl-4 pr-14 text-sm font-light tracking-wide placeholder-gray-400 transition-all duration-300 focus:border-orange-500 focus:ring focus:ring-orange-500/20 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:bg-slate-800 dark:text-white/80"
                                    placeholder="시간 선택"
                                    value={startTimeValue}
                                    readOnly={true}
                                    onClick={() => {
                                        startTime === true
                                            ? setStartTime(false)
                                            : setStartTime(true);
                                        setStartCalendar(false);
                                    }}
                                />
                            </div>
                        </div>
                        {startCalendar ? (
                            <Calendar
                                setValue={setStartDate}
                                value={startDate}
                            />
                        ) : null}
                        {startTime ? (
                            <TimePicker
                                startTimeValue={startTimeValue}
                                setStartTimeValue={setStartTimeValue}
                            />
                        ) : null}

                        <div className="flex gap-2">
                            <div className="flex min-w-9 items-center">
                                종료
                            </div>

                            <div className="relative w-full text-gray-700">
                                <input
                                    type="text"
                                    className="relative w-full cursor-pointer rounded-lg border-gray-300 bg-white py-2.5 pl-4 pr-14 text-sm font-light tracking-wide placeholder-gray-400 transition-all duration-300 focus:border-orange-500 focus:ring focus:ring-orange-500/20 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:bg-slate-800 dark:text-white/80"
                                    placeholder="날짜 선택"
                                    value={endDate}
                                    readOnly={true}
                                    onClick={() => {
                                        {
                                            endCalendar === true
                                                ? setEndCalendar(false)
                                                : setEndCalendar(true);
                                            setEndTime(false);
                                        }
                                    }}
                                />
                            </div>
                            <div className="relative w-full text-gray-700">
                                <input
                                    type="text"
                                    className="relative w-full cursor-pointer rounded-lg border-gray-300 bg-white py-2.5 pl-4 pr-14 text-sm font-light tracking-wide placeholder-gray-400 transition-all duration-300 focus:border-orange-500 focus:ring focus:ring-orange-500/20 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:bg-slate-800 dark:text-white/80"
                                    placeholder="시간 선택"
                                    value={endTimeValue}
                                    readOnly={true}
                                    onClick={() => {
                                        endTime === true
                                            ? setEndTime(false)
                                            : setEndTime(true);
                                        setEndCalendar(false);
                                    }}
                                />
                            </div>
                        </div>
                        {endCalendar ? (
                            <Calendar setValue={setEndDate} value={endDate} />
                        ) : null}
                        {endTime ? (
                            <TimePicker
                                startTimeValue={endTimeValue}
                                setStartTimeValue={setEndTimeValue}
                            />
                        ) : null}
                    </div>
                </div>
                <button
                    className={`button color ${
                        eventTitle && startISO && endISO ? '' : 'disable'
                    }`}
                    disabled={!(eventTitle && startISO && endISO)} // 세 값 모두가 true일 때만 활성화
                    onClick={() => {
                        if (eventTitle && startISO && endISO) {
                            addNewBlock();
                        }
                    }}
                >
                    추가 완료
                </button>
            </div>
        </div>
    );
}
