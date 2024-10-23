import React from 'react';

export default function SelectTime({
    selectedTime,
    setSelectedTime,
}: {
    selectedTime: string;
    setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
}) {
    const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTime(e.target.value);
    };

    return (
        <select
            className="select"
            value={selectedTime}
            onChange={handleTimeChange}
        >
            <option disabled hidden value="">
                시간을 선택하세요
            </option>
            <option value="00:00">오전 12시</option>
            <option value="01:00">오전 1시</option>
            <option value="02:00">오전 2시</option>
            <option value="03:00">오전 3시</option>
            <option value="04:00">오전 4시</option>
            <option value="05:00">오전 5시</option>
            <option value="06:00">오전 6시</option>
            <option value="07:00">오전 7시</option>
            <option value="08:00">오전 8시</option>
            <option value="09:00">오전 9시</option>
            <option value="10:00">오전 10시</option>
            <option value="11:00">오전 11시</option>
            <option value="12:00">오후 12시</option>
            <option value="13:00">오후 1시</option>
            <option value="14:00">오후 2시</option>
            <option value="15:00">오후 3시</option>
            <option value="16:00">오후 4시</option>
            <option value="17:00">오후 5시</option>
            <option value="18:00">오후 6시</option>
            <option value="19:00">오후 7시</option>
            <option value="20:00">오후 8시</option>
            <option value="21:00">오후 9시</option>
            <option value="22:00">오후 10시</option>
            <option value="23:00">오후 11시</option>
        </select>
    );
}
