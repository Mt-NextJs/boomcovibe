const BASE_URL = process.env.API_URL;

// 블록 추가 API 호출 함수
export const addBlock = async (params: AddBlockParams) => {
    const { accessToken, blockData } = params;
    const response = await fetch(`${BASE_URL}/api/link/add`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blockData),
    });

    if (response.ok) {
        const result = await response.json();
        return result.data;
    } else {
        throw new Error('Failed to add block');
    }
};