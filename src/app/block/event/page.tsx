'use client';

import React, { useState } from 'react';
import BlockHeader from '../components/block-header';

export default function EventBlock() {
    const [eventTitle, setEventTitle] = useState('');
    const [eventContent, setEventContent] = useState('');
    const [eventGuide, setEventGuide] = useState('');
    return (
        <div>
            <BlockHeader
                windowIcon={'/assets/icons/icon_close.png'}
                iconLink={'/block'}
                blockTitle={'이벤트 블록'}
                blockDescription={''}
            />
            <div className="px-10">
                <div>events preview</div>
                <div>border-line</div>
                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="link">이벤트명</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={eventTitle}
                        onChange={(e) => setEventTitle(e.target.value)}
                        placeholder="이벤트를 잘 나타낼 수 있는 타이틀을 입력해주세요"
                        className="input"
                    />
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="link">이벤트 설명</label>
                    </div>
                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={eventContent}
                        onChange={(e) => setEventContent(e.target.value)}
                        placeholder="어떤 이벤트인지 설명을 입력해주세요"
                        className="input"
                    />
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <label htmlFor="link">가이드 문구</label>

                    <input
                        type="text"
                        name="link"
                        id="link"
                        value={eventGuide}
                        onChange={(e) => setEventGuide(e.target.value)}
                        placeholder="이벤트의 응모 조건이나, 가이드를 작성해보세요"
                        className="input"
                    />
                </div>
                <div className="mb-10 flex flex-col gap-2">
                    <div className="flex">
                        <label htmlFor="link">이벤트 일정</label>
                        <span className="title relative top-1 ml-2 inline-block text-red-500">
                            *
                        </span>
                    </div>
                    <div>Calendar</div>
                </div>
                <button
                    className={`button color ${!eventTitle ? 'disable' : ''}`}
                >
                    추가 완료
                </button>
            </div>
        </div>
    );
}
