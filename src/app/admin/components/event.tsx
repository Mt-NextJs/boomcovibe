import dayjs from 'dayjs';

type Props = Pick<Block, 'title' | 'dateStart' | 'dateEnd'>;

export default function Event({ title, dateStart, dateEnd }: Props) {
    const start = dayjs(dateStart).format('YY.MM.DD HH:mm');
    const end = dayjs(dateEnd).format('YY.MM.DD HH:mm');
    return (
        <div className="text-sm">
            <div className="flex items-center justify-start gap-2 text-left">
                <p className="w-16 text-gray-400">이벤트 명</p>
                <span className="">{title}</span>
            </div>
            <div className="flex items-center gap-2 text-left">
                <p className="w-16 text-gray-400">일정</p>
                <span className="">{`${start} ~ ${end}`}</span>
            </div>
        </div>
    );
}
