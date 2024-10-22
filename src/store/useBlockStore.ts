import { create } from 'zustand';

interface BlockStore {
    blocks: Block[];
    block: Block | null;
    setBlocks: (blocks: Block[]) => void;
    setBlock: (block: Block | null) => void;
    getBlockById: (id: number) => Block | undefined;
}

const useBlockStore = create<BlockStore>((set, get) => ({
    blocks: [],
    block: null,
    setBlocks: (blocks) => set({ blocks }),
    setBlock: (block) => set({ block }),
    getBlockById: (id) => get().blocks.find((block) => block.id === id),
}));

export default useBlockStore;
