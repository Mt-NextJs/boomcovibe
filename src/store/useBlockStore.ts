import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BlockStore {
    blocks: Block[] | null;
    block: Block | null;
    setBlocks: (blocks: Block[]) => void;
    setBlock: (block: Block | null) => void;
    getBlockById: (id: number) => Block | undefined;
    resetBlock: () => void;
    updateBlock: (id: number, updates: Partial<Block>) => void;
    deleteBlock: (id: number) => void;
}

const useBlockStore = create<BlockStore>()(
    persist(
        (set, get) => ({
            blocks: [],
            block: null,
            setBlocks: (blocks) => set({ blocks }),
            setBlock: (block) => {
                console.log(block, 'block set');
                set({ block });
            },
            getBlockById: (id) =>
                get().blocks?.find((block) => block.id === id),
            resetBlock: () => set({ block: null }),
            updateBlock: (id, updates) =>
                set((state) => ({
                    blocks: state.blocks?.map((block) =>
                        block.id === id ? { ...block, ...updates } : block,
                    ),
                    block:
                        state.block?.id === id
                            ? { ...state.block, ...updates }
                            : state.block,
                })),
            deleteBlock: (id) =>
                set((state) => ({
                    blocks: state.blocks?.filter((block) => block.id !== id),
                })),
        }),
        {
            name: 'block-storage',
        },
    ),
);

export default useBlockStore;
