type BlockType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface Schedule {
    id: number;
    userId: number;
    linkEditorId: number;
    title: string;
    url: string;
    dateStart: string;
    dateEnd: string;
    dateCreate: string;
    dateUpdate: string;
    active: number;
}

interface Block {
    id: number;
    type: BlockType;
    sequence: number;
    style: number | null;
    title: string | null;
    subText01: string | null;
    subText02: string | null;
    url: string | null;
    imgUrl: string | null;
    dateStart: string | null;
    dateEnd: string | null;
    openYn: 'Y' | 'N';
    keepYn: 'Y' | 'N';
    dateCreate: string;
    dateUpdate: string | null;
    active: number;
    schedule?: Schedule[]; // type이 7일 때만 포함되는 일정 데이터
}

type BlockFormAction = {
    type: string,
    payload:Partial<Block>,
}

interface UserInfo {
    name: string;
    userId: string;
    email: string | null;
    countryCode: string;
    dateCreate: string;
    dateUpdate: string;
}

interface Visitor {
    today: number;
    realTime: number;
    total: number;
}