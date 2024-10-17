export async function fetchUserInfo(token: string): Promise<UserInfo> {
    console.log(token);
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
