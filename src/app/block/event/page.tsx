'use client';

import React, { useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import BlockHeader from '../components/block-header';
import SelectTime from '../calendar/component/select-time';

export default function EventBlock() {
    const [eventTitle, setEventTitle] = useState('');
    const [eventContent, setEventContent] = useState('');
    const [eventGuide, setEventGuide] = useState('');

    const [startDateValue, setStartDateValue] = useState({
        startDate: null,
        endDate: null,
    });
    console.log(startDateValue);
    const [startTimeValue, setStartTimeValue] = useState('');
    const [endTimeValue, setEndTimeValue] = useState('');

    return (
        <div>
            <BlockHeader
                windowIcon={'/assets/icons/icon_close.png'}
                iconLink={'/block'}
                blockTitle={'이벤트 블록'}
                blockDescription={''}
            />
            <div className="px-10">
                <div className="min-h-1/2 flex w-full flex-1 flex-col items-center justify-center rounded-md bg-gray-100 p-12">
                    <div className="w-full max-w-[450px] rounded-xl bg-white shadow-lg">
                        <div className="text-md p-4 text-gray-200">event</div>
                        <div className="flex flex-col items-center px-4">
                            <div>
                                {eventTitle.length > 0 ? (
                                    <>{eventTitle}</>
                                ) : (
                                    <>타이틀을 입력해주세요</>
                                )}
                            </div>
                            <div className="mb-4 font-light text-gray-400">
                                {eventContent.length > 0 ? (
                                    <>{eventContent}</>
                                ) : (
                                    <>이벤트 설명을 입력해보세요</>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center justify-between rounded-b-lg bg-gray-100 px-4 py-3 text-sm">
                            <span className="text-gray-400">
                                24.09.11 16:00 ~ 24.09.11 16:00
                            </span>
                            <button className="flex items-center text-gray-400 transition-colors hover:text-gray-700">
                                80일 남음
                            </button>
                        </div>
                    </div>
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
                                onChange={(newValue) =>
                                    setStartDateValue(newValue)
                                }
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
                                placeholder={'날짜 선택'}
                                displayFormat="YYYY. MM. DD"
                                asSingle={false}
                                useRange={true}
                                value={startDateValue}
                                showShortcuts={true}
                                onChange={(newValue) =>
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
                >
                    추가 완료
                </button>
            </div>
        </div>
    );
}
