import React, { useEffect, useState } from 'react';

interface TimePickerProps {
    startTimeValue: string;
    setStartTimeValue: React.Dispatch<React.SetStateAction<string>>;
}

const TimePicker: React.FC<TimePickerProps> = ({
    startTimeValue,
    setStartTimeValue,
}) => {
    const [timePeriod, setTimePeriod] = useState<string>('오전');
    const [selectedTime, setSelectedTime] = useState<string | null>('');

    const times =
        timePeriod === '오전'
            ? [
                  '00:00',
                  '01:00',
                  '02:00',
                  '03:00',
                  '04:00',
                  '05:00',
                  '06:00',
                  '07:00',
                  '08:00',
                  '09:00',
                  '10:00',
                  '11:00',
              ]
            : [
                  '12:00',
                  '01:00',
                  '02:00',
                  '03:00',
                  '04:00',
                  '05:00',
                  '06:00',
                  '07:00',
                  '08:00',
                  '09:00',
                  '10:00',
                  '11:00',
              ];
    useEffect(() => {
        if (selectedTime) {
            const timeValue =
                timePeriod === '오후' && selectedTime !== '12:00'
                    ? `${parseInt(selectedTime.split(':')[0]) + 12}:${selectedTime.split(':')[1]}`
                    : selectedTime;

            setStartTimeValue(timeValue);
        }
    }, [timePeriod, selectedTime]);

    return (
        <div className="mx-auto my-4 w-full overflow-hidden rounded-xl bg-white shadow-md">
            <div className="p-4">
                <div className="mb-2 flex gap-4">
                    <button
                        className={`w-20 rounded-lg border-1 p-2 ${timePeriod === '오전' ? 'border-primary text-primary' : ''}`}
                        onClick={() => setTimePeriod('오전')}
                    >
                        오전
                    </button>
                    <button
                        className={`w-20 rounded-lg border-1 p-2 ${timePeriod === '오후' ? 'border-primary text-primary' : ''}`}
                        onClick={() => setTimePeriod('오후')}
                    >
                        오후
                    </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                    {times.map((time) => (
                        <button
                            key={time}
                            className={`rounded-lg border-1 p-2 ${selectedTime === time ? 'bg-primary text-white' : 'bg-white'}`}
                            onClick={() => setSelectedTime(time)}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimePicker;
