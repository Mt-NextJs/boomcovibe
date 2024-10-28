'use client';

import { twMerge } from 'tailwind-merge';
import Divider from '@components/divider';
export default function DivideSelector({
    divideStyle,
    handleDivideStyleChange,
}: {
    divideStyle: number;
    handleDivideStyleChange: (index: number, title: string) => void;
}) {
    const descriptions = ['공백', '점선', '실선', '포인트', '지그재그'];
    return (
        <div>
            <p>
                구분선 모양
                <span className="title relative top-1 ml-2 inline-block text-red-500">
                    *
                </span>
            </p>

            <div className="flex h-32 w-full gap-4">
                {descriptions.map((title, index) => (
                    <div
                        key={index + title}
                        onClick={() =>
                            handleDivideStyleChange(index, descriptions[index])
                        }
                        className="flex h-full w-20 flex-col gap-2"
                    >
                        <Divider
                            style={index + 1}
                            className={twMerge(
                                'relative flex aspect-square w-full items-center justify-center rounded-lg border border-gray-300',
                                divideStyle === index + 1
                                    ? 'border-primary-450'
                                    : '',
                            )}
                        />
                        <p className="flex items-center justify-center">
                            {title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
