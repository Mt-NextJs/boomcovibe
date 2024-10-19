export const initialState: Block = {
    id: 0,
    type: 1,
    sequence: 0,
    style: null,
    title: null,
    subText01: null,
    subText02: null,
    url: null,
    imgUrl: null,
    dateStart: null,
    dateEnd: null,
    openYn: 'Y',
    keepYn: 'N',
    dateCreate: '',
    dateUpdate: null,
    active: 1,
    schedule: [],
};

export const blockFormReducer = (state = initialState, action: BlockFormAction) => {
    switch (action.type) {
        case 'SET_BLOCK': 
            return {
                ...state,
                ...action.payload,
            };
        
        // 스케쥴 블록 추가 필요 (type === 7) 
            
        default:
            return state;
    }
};
