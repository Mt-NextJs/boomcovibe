export const blockTypeMap: Record<
    number,
    {
        title: string;
        src: string;
        href: string;
        description: string;
        bgColor: string;
    }
> = {
    1: {
        title: '구분선',
        src: '/assets/icons/icon_divide.png',
        href: '/admin/block/divide',
        description: '블록과 블록 사이를 구분할 수 있어요',
        bgColor: 'bg-lime-500',
    },
    2: {
        title: '동영상',
        src: '/assets/icons/icon_video.png',
        href: '/admin/block/video',
        description: '유튜브, 틱톡 등 동영상을 공유하세요',
        bgColor: 'bg-purple-500',
    },
    3: {
        title: '링크',
        src: '/assets/icons/icon_link.png',
        href: '/admin/block/link',
        description: '연결하고 싶은 url은 무엇이든 추가하세요',
        bgColor: 'bg-orange-500',
    },
    4: {
        title: '이미지',
        src: '/assets/icons/icon_image.png',
        href: '/admin/block/image',
        description: '보여주고 싶은 이미지로 표현하세요',
        bgColor: 'bg-sky-500',
    },
    5: {
        title: '이벤트',
        src: '/assets/icons/icon_gift.png',
        href: '/admin/block/event',
        description: '이벤트 응모부터, 추첨까지 진행해보세요',
        bgColor: 'bg-yellow-500',
    },
    6: {
        title: '텍스트',
        src: '/assets/icons/icon_text.png',
        href: '/admin/block/text',
        description: '공유하고 싶은 글이 있다면 적어보세요',
        bgColor: 'bg-green-500',
    },
    7: {
        title: '캘린더',
        src: '/assets/icons/icon_calendar.png',
        href: '/admin/block/calendar',
        description: '다가오는 중요한 이벤트의 일정을 알리세요',
        bgColor: 'bg-pink-500',
    },
    8: {
        title: '장소',
        src: '',
        href: '/admin/block/map',
        description: '알려야하는 위치를 띄워보세요',
        bgColor: 'bg-blue-500',
    },
};
