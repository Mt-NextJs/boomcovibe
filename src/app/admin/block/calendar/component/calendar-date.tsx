import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

interface Props {
    pastyear: number;
    pastmonth: number;
    pastsetYear: (pastyear: number) => void;
    pastsetMonth: (pastmonth: number) => void;
}

const MONTH_NAMES = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
];

export default function CalendarDateComponent({
    pastyear,
    pastmonth,
    pastsetYear,
    pastsetMonth,
}: Props) {
    // console.log(pastmonth);
    const handlePreviousMonth = () => {
        if (pastmonth === 0) {
            pastsetMonth(11); // 12월
            pastsetYear(pastyear - 1); // 이전 년도로 이동
        } else {
            pastsetMonth(pastmonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (pastmonth === 11) {
            pastsetMonth(0); // 1월
            pastsetYear(pastyear + 1); // 다음 년도로 이동
        } else {
            pastsetMonth(pastmonth + 1);
        }
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex items-center justify-center rounded-md bg-white md:items-stretch">
                    <button
                        type="button"
                        onClick={handlePreviousMonth}
                        className="pointer-curosr flex h-9 w-12 items-center justify-center rounded-l-md pr-1 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50"
                    >
                        <GoChevronLeft />
                    </button>

                    <h1 className="flex items-center text-base font-semibold leading-6 text-gray-900">
                        <time>
                            {pastyear}년 {pastmonth}월
                        </time>
                    </h1>

                    <button
                        type="button"
                        onClick={handleNextMonth}
                        className="pointer-cursor flex h-9 w-12 items-center justify-center pl-1 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50"
                    >
                        <GoChevronRight />
                    </button>
                </div>
            </div>
        </>
    );
}
