'use client';

import React, { useState, useEffect } from 'react';
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker';
import BlockHeader from '../components/block-header';
import SelectTime from '../calendar/component/select-time';
import { addBlock } from 'service/block-api';
import PreblockEvent from '../components/Preblock-event';

export default function EventBlock() {
    const [eventTitle, setEventTitle] = useState<string>('');
    const [eventContent, setEventContent] = useState<string>('');
    const [eventGuide, setEventGuide] = useState<string>('');
    const [startDateValue, setStartDateValue] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });
    const [startTimeValue, setStartTimeValue] = useState<string>('');
    const [endTimeValue, setEndTimeValue] = useState<string>('');
    const [startISO, setStartISO] = useState<string | null>(null);
    const [endISO, setEndISO] = useState<string | null>(null);
    console.log('startISO', startISO, 'endISO', endISO);

    // 블록 추가 호출
    const addNewBlock = async (): Promise<void> => {
        const accessToken = AC; // 사용자 토큰

        try {
            const blockData: EventBlock = {
                type: 5, // 링크 블록
                sequence: 4,
                title: eventTitle,
                subText01: eventContent,
                subText02: eventGuide,
                dateStart: startISO ?? '', // ISO 날짜 형식
                dateEnd: endISO ?? '', // ISO 날짜 형식
            };

            const result = await addBlock({ accessToken, blockData });
            console.log('Block added successfully:', result);
        } catch (error) {
            console.error('Error adding block:', error);
        }
    };

    useEffect(() => {
        const offset = new Date().getTimezoneOffset() * 60000;

        if (startDateValue?.startDate && startTimeValue) {
            const startDate = new Date(
                new Date(startDateValue.startDate as Date).getTime() - offset,
            ); // Convert to Date and apply offset
            console.log('startdate', startDate);
            startDate.setHours(parseInt(startTimeValue), 0, 0);
            setStartISO(startDate.toISOString());
        }

        if (startDateValue?.endDate && endTimeValue) {
            const endDate = new Date(startDateValue.endDate as Date);
            endDate.setHours(parseInt(endTimeValue), 0, 0);
            setEndISO(endDate.toISOString());
        }
    }, [startDateValue, startTimeValue, endTimeValue]);

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
                        eventDate={'w3efcds'}
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
                            <Datepicker
                                primaryColor="orange"
                                i18n={'ko'}
                                configs={{
                                    shortcuts: {
                                        today: '오늘',
                                        yesterday: '어제',
                                        past: (period) =>
                                            '지난 ' + period + ' 일 동안',
                                        currentMonth: '이번달 내내',
                                        pastMonth: '지난달',
                                    },
                                }}
                                placeholder={'날짜 선택'}
                                displayFormat="YYYY. MM. DD"
                                asSingle={false}
                                useRange={true}
                                value={startDateValue}
                                showShortcuts={true}
                                onChange={(newValue) => {
                                    console.log('여기', newValue?.startDate);
                                    setStartDateValue(newValue);
                                }}
                            />
                            <SelectTime
                                selectedTime={startTimeValue}
                                setSelectedTime={setStartTimeValue}
                            />
                        </div>
                        <div className="flex gap-2">
                            <div className="flex min-w-9 items-center">
                                종료
                            </div>
                            <Datepicker
                                primaryColor="orange"
                                i18n={'ko'}
                                asSingle={false}
                                placeholder={'날짜 선택'}
                                displayFormat="YYYY. MM. DD"
                                // asSingle={false}
                                useRange={true}
                                value={startDateValue}
                                showShortcuts={true}
                                onChange={(newValue: DateValueType) =>
                                    setStartDateValue(newValue)
                                }
                            />
                            <SelectTime
                                selectedTime={endTimeValue}
                                setSelectedTime={setEndTimeValue}
                            />
                        </div>
                    </div>
                </div>
                <button
                    className={`button color ${!eventTitle ? 'disable' : ''}`}
                    onClick={() => {
                        addNewBlock();
                    }}
                >
                    추가 완료
                </button>
            </div>
        </div>
    );
}
