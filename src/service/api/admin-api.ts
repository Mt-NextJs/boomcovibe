export async function fetchUserInfo(token: string): Promise<UserInfo> {
    // console.log(token);
    const response = await fetch('/api/user/info', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const { data } = await response.json();
    return data;
}

export async function fetchBlockList(token: string): Promise<Block[]> {
    const response = await fetch('/api/link/list', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const { data } = await response.json();
    data.sort((a: Block, b: Block) => a.sequence - b.sequence);
    return data;
}

export async function fetchVisitorInfo(token: string): Promise<Visitor> {
    const response = await fetch('/api/user/visitor', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    const { data } = await response.json();
    return data;
}

interface SortableBlock extends Block {
    chosen?: boolean;
    className?: string;
    'data-id'?: string;
}

export async function updateBlockOrder(
    token: string,
    blocks: SortableBlock[],
): Promise<Block[]> {
    //sortableJs로 드래그한 block에서 chosen 속성 제거
    const cleanedBlocks = blocks.map(
        ({ chosen, className, 'data-id': _, ...block }) => block,
    );
    console.log(cleanedBlocks, 'cleanedBlocks', blocks);
    const response = await fetch('/api/link/update/order', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ order: cleanedBlocks }),
    });
    const { data } = await response.json();
    return data;
}

export async function deleteBlock(token: string, id: number): Promise<void> {
    const response = await fetch('/api/link/delete', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });
}

// export async function updateUser(token: string) {
//     const response = await fetch('/api/user/update', {
//         method: 'POST',
//         headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//         },
//     });
//     const { data } = await response.json();
//     return data;
// }
