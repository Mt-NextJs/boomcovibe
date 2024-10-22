// 기본 블록 타입
interface BaseBlockParams {
    type: BlockType;
    sequence: number;
}

// 구분선 블록
interface DividerBlockParams extends BaseBlockParams {
    type: 1;
    style: number;
}

// 동영상 블록
interface VideoBlockParams extends BaseBlockParams {
    type: 2;
    url: string;
}

// 링크 블록
interface LinkBlockParams extends BaseBlockParams {
    type: 3;
    style: number;
    title: string;
    url: string;
    imgUrl?: string;
}

// 이미지 블록
interface ImageBlockParams extends BaseBlockParams {
    type: 4;
    title: string;
    imgUrl: string;
    url?: string;
}

// 이벤트 블록
interface EventBlockParams extends BaseBlockParams {
    type: 5;
    title: string;
    subText01?: string;
    subText02?: string;
    dateStart: string;
    dateEnd: string;
}

// 텍스트 블록
interface TextBlockParams extends BaseBlockParams {
    type: 6;
    title: string;
}

// 캘린더 블록
interface CalendarBlockParams extends BaseBlockParams {
    type: 7;
    style: number;
    schedule: Array<{
        title: string;
        url?: string;
        dateStart: string;
        dateEnd: string;
    }>;
}

// 모든 블록 타입을 포함하는 유니온 타입
type BlockParams =
    | DividerBlockParams
    | VideoBlockParams
    | LinkBlockParams
    | ImageBlockParams
    | EventBlockParams
    | TextBlockParams
    | CalendarBlockParams;
