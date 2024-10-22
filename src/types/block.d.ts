// 블록 추가 API 파라미터 인터페이스
interface AddBlockParams {
    accessToken: string;
    blockData: BlocksUnionType;
}

// 구분선 블록 타입
interface DividerBlock {
    type: 1;
    sequence: number;
    style: number;
}

// 동영상 블록 타입
interface VideoBlock {
    type: 2;
    sequence: number;
    url: string;
}

// 링크 블록 타입
interface LinkBlock {
    type: 3;
    sequence: number;
    style: number;
    title: string;
    url: string;
    imgUrl: string;
}

// 이미지 블록 타입
interface ImageBlock {
    type: 4;
    sequence: number;
    title: string;
    url: string;
    imgUrl: string;
}

// 이벤트 블록 타입
interface EventBlock {
    type: 5;
    sequence: number;
    title: string;
    subText01: string;
    subText02: string;
    dateStart: string; // ISO 날짜 형식
    dateEnd: string; // ISO 날짜 형식
}

interface StartDateValue {
    startDate: string | null;
    endDate: string | null;
}

// 텍스트 블록 타입
interface TextBlock {
    type: 6;
    sequence: number;
    title: string;
}

// 캘린더 블록 타입
interface CalendarBlock {
    type: 7;
    sequence: number;
    style: number;
    schedule: {
        title: string;
        url: string;
        dateStart: string; // ISO 날짜 형식
        dateEnd: string; // ISO 날짜 형식
    }[];
}

// 지도 블록 타입
interface MapBlock {
    type: 8;
    sequence: number;
    title: string;
    subText01: string; // 주소
    subText02: string; // 콘텐츠
}

interface AddressProps {
    areaAddress: string;
    townAddress: string;
}

// 전체 블록 타입을 합친 BlockType 유니온 타입
type BlocksUnionType =
    | DividerBlock
    | VideoBlock
    | LinkBlock
    | ImageBlock
    | EventBlock
    | TextBlock
    | CalendarBlock
    | MapBlock;
