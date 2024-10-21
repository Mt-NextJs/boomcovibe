export default function Skeleton({
    width,
    height,
    className,
}: {
    width: string;
    height: string;
    className?: string;
}) {
    return (
        <div
            className={`animate-[pulse_1s_ease-in-out_infinite] rounded bg-gray-200 ${width} ${height} ${className}`}
        />
    );
}
