import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
export default function LinkStyleSelector({
    selectedStyle,
    handleStyleChange,
}: {
    selectedStyle: number;
    handleStyleChange: (index: number) => void;
}) {
    const descriptions = ['썸네일', '배경', '카드', '심플'];

    return (
        <div className="mb-10 flex flex-col gap-2">
            <p>
                스타일
                <span className="title relative top-1 ml-2 inline-block text-red-500">
                    *
                </span>
            </p>

            <div className="flex gap-4">
                {descriptions.map((_, index) => (
                    <div
                        key={index}
                        className="flex h-24 w-1/4 flex-col items-center justify-center gap-2"
                        onClick={() => handleStyleChange(index)}
                    >
                        <div
                            className={twMerge(
                                'relative h-16 w-full rounded-lg border border-gray-400 p-4',
                                selectedStyle === index + 1
                                    ? 'border-primary-450'
                                    : '',
                            )}
                        >
                            <Image
                                src={`/assets/icons/item_card_00${index + 1}.png`}
                                alt="thumbnail"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="px-8 py-2"
                            />
                            {selectedStyle === index + 1 && (
                                <FaCheckCircle
                                    className={`absolute bottom-1 right-2 rounded-full bg-white text-primary`}
                                />
                            )}
                        </div>
                        <p className="text-center">{descriptions[index]}</p>
                    </div>
                ))}
            </div>
            <input type="hidden" name="style" value={selectedStyle} />
        </div>
    );
}
