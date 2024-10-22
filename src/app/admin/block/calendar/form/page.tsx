'use client';

import { useState, useEffect } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';
import dayjs from 'dayjs';
import BlockHeader from '../../components/block-header';
import SelectTime from '../component/select-time';

export default function CalendarFormBlock() {
    const now = dayjs().format('YYYY. MM. DD');
    const [startDateValue, setStartDateValue] = useState<StartDateValue>({
        startDate: null,
        endDate: null,
    });
    const MIN_DATE = new Date();
    const [endDateValue, setEndDateValue] = useState<StartDateValue>({
        startDate: null,
        endDate: null,
    });
    const [startTimeValue, setStartTimeValue] = useState<string>('');
    const [endTimeValue, setEndTimeValue] = useState<string>('');
    const [scheduleName, setScheduleName] = useState<string>('');
    const [linkAddress, setLinkAddress] = useState<string>('');
    const [startISO, setStartISO] = useState<string>('');
    const [endISO, setEndISO] = useState<string>('');
    const blockSequence: number = 7890;

    // 경고 문구 상태
    const [dateError, setDateError] = useState<string>('');
    const [timeError, setTimeError] = useState<string>('');
    const [linkError, setLinkError] = useState<string>('');

    // 날짜와 시간을 체크하는 함수
    useEffect(() => {
        // 시작일이 종료일보다 늦을 때
        if (
            startDateValue.startDate &&
            endDateValue.startDate &&
            dayjs(startDateValue.startDate).isAfter(
                dayjs(endDateValue.startDate),
            )
        ) {
            setDateError('종료 일시가 오픈 일시보다 과거일 수 없습니다');
        } else {
            setDateError('');
        }

        // 날짜가 같고 시작 시간이 종료 시간보다 늦을 때
        if (
            startDateValue.startDate === endDateValue.startDate &&
            startTimeValue &&
            endTimeValue &&
            parseInt(startTimeValue) > parseInt(endTimeValue)
        ) {
            setTimeError('종료 시간이 오픈 시간보다 과거일 수 없습니다');
        } else {
            setTimeError('');
        }
    }, [startDateValue, endDateValue, startTimeValue, endTimeValue]);

    const validateURL = (url: string) => {
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        return regex.test(url);
    };

    useEffect(() => {
        if (linkAddress && !validateURL(linkAddress)) {
            setLinkError('올바른 주소를 입력해주세요');
        } else {
            setLinkError('');
        }
    }, [linkAddress]);

    useEffect(() => {
        if (startDateValue.startDate && startTimeValue) {
            const combinedDateTime = `${startDateValue.startDate.toISOString().split('T')[0]}T${startTimeValue}:00`;
            const dateObj = new Date(combinedDateTime);
            const koreanISO = new Date(
                dateObj.getTime() + 9 * 60 * 60 * 1000,
            ).toISOString();
            setStartISO(koreanISO);
        }

        if (endDateValue.startDate && endTimeValue) {
            const combinedEndDateTime = `${endDateValue.startDate.toISOString().split('T')[0]}T${endTimeValue}:00`;
            const endDateObj = new Date(combinedEndDateTime);
            const koreanISOEnd = new Date(
                endDateObj.getTime() + 9 * 60 * 60 * 1000,
            ).toISOString();
            setEndISO(koreanISOEnd);
        }
    }, [startTimeValue, endTimeValue, startDateValue, endDateValue]);

    // 블록 추가 호출
    const addNewBlock = async (): Promise<void> => {
        const accessToken = AC; // 사용자 토큰

        try {
            const blockData: CalendarBlock = {
                type: 7, // 캘린더
                sequence: blockSequence,
                style: 1, // 우선 리스트로 표기
                schedule: [
                    {
                        title: scheduleName,
                        url: linkAddress,
                        dateStart: startISO, // ISO
                        dateEnd: endISO, // ISO
                    },
                ],
            };

            const result = await addBlock({ accessToken, blockData });
            // console.log('Block added successfully:', result);
            router.push('/admin');
        } catch (error) {
            console.error('Error adding block:', error);
        }
    };

    return (
        <>
            <BlockHeader
                windowIcon={'/assets/icons/icon_back.png'}
                iconLink={'/admin/block/calendar'}
                blockTitle={'일정 추가하기'}
                blockDescription={`입력하는 전체 기간에 따라
                  <br>
                  전체 일정이 최근 날짜 순서로 자동 정렬됩니다.`}
            />
            <div className="px-10">
                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="title">오픈 일시</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <Datepicker
                            primaryColor="orange"
                            i18n={'ko'}
                            displayFormat="YYYY. MM. DD"
                            placeholder={now}
                            asSingle={true}
                            useRange={false}
                            value={startDateValue}
                            onChange={(newValue) => setStartDateValue(newValue)}
                        />
                        <SelectTime
                            selectedTime={startTimeValue}
                            setSelectedTime={setStartTimeValue}
                        />
                    </div>
                </div>

                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="title">종료 일시</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <div className="flex gap-2">
                        <Datepicker
                            primaryColor="orange"
                            i18n={'ko'}
                            displayFormat="YYYY. MM. DD"
                            placeholder={now}
                            asSingle={true}
                            useRange={false}
                            minDate={MIN_DATE}
                            value={endDateValue}
                            onChange={(newValue) => setEndDateValue(newValue)}
                        />
                        <SelectTime
                            selectedTime={endTimeValue}
                            setSelectedTime={setEndTimeValue}
                        />
                    </div>
                    {dateError && (
                        <div className="text-red-500">{dateError}</div>
                    )}
                    {timeError && (
                        <div className="text-red-500">{timeError}</div>
                    )}
                </div>

                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="title">일정 이름</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={scheduleName}
                        onChange={(e) => setScheduleName(e.target.value)}
                        placeholder="알리고 싶은 일정 내용이 잘 드러나면 좋아요"
                        className="input"
                    />
                </div>

                <div className="mb-10 flex flex-col gap-2">
                    <label htmlFor="link">연결할 주소</label>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={linkAddress}
                        onChange={(e) => setLinkAddress(e.target.value)}
                        placeholder="일정에 관심 있을 때 이동시키고 싶은 링크가 있나요?"
                        className="input"
                    />
                    {linkError && (
                        <div className="text-red-500">{linkError}</div>
                    )}
                </div>
                <button
                    className={`button color ${
                        !(
                            startDateValue?.startDate &&
                            endDateValue?.startDate &&
                            startTimeValue &&
                            endTimeValue &&
                            scheduleName.trim()
                        )
                            ? 'disable'
                            : ''
                    }`}
                >
                    추가 완료
                </button>
            </div>
        </>
    );
}
