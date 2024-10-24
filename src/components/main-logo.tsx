'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function BlockLogo() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        '/assets/icons/main4.png',
        '/assets/icons/main5.png',
        '/assets/icons/main6.png',
        '/assets/icons/main7.png',
        '/assets/icons/main8.png',
        '/assets/icons/main9.png',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1,
            );
        }, 1000); // 1초마다 이미지 전환

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
    }, [images.length]);

    return (
        <>
            <Image
                src={images[currentImageIndex]} // 슬라이드 이미지
                alt="슬라이드 이미지"
                height={0}
                width={0}
                // style={{ width: 'auto', height: '130px' }}
            />
        </>
    );
}
