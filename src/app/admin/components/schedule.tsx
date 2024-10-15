import dayjs from 'dayjs';

export default function Schedule({ schedule }: { schedule: Schedule[] }) {
    const open = schedule.filter(
        ({ dateEnd, dateStart }) =>
            dayjs().isAfter(dayjs(dateStart)) &&
            dayjs().isBefore(dayjs(dateEnd)),
    ).length;
    const soon = schedule.filter(({ dateStart }) =>
        dayjs().isBefore(dayjs(dateStart)),
    ).length;
    const end = schedule.filter(
        ({ dateEnd, dateStart }) =>
            dayjs().isAfter(dayjs(dateEnd)) &&
            dayjs().isAfter(dayjs(dateStart)),
    ).length;

    return (
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-primary">OPEN</p>{' '}
                <span className="text-xs">{open + '건'}</span>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-blue-500">SOON</p>{' '}
                <span className="text-xs">{soon + '건'}</span>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-sm font-semibold">CLOSED</p>{' '}
                <span className="text-xs">{end + '건'}</span>
            </div>
        </div>
    );
}
