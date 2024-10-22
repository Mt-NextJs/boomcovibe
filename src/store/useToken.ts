import { create } from 'zustand';

interface TokenStore {
    token: string | null;
    setToken: (token: string) => void;
    removeToken: () => void;
}

const useToken = create<TokenStore>((set) => ({
    token: null,
    setToken: (token: string) => set({ token }),
    removeToken: () => set({ token: null }),
}));

export default useToken;
