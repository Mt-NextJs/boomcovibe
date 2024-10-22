export async function addBlock(token: string, params: BlockParams) {
    const response = await fetch('/api/link/add', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });
}
