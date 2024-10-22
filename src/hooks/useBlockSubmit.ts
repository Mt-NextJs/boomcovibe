import { useRouter, useSearchParams } from 'next/navigation';
import useBlockStore from 'store/useBlockStore';
import useToken from 'store/useToken';
import { addBlock, updateBlockApi } from 'service/block-api';

export function useBlockSubmit() {
    const router = useRouter();
    const { block, resetBlock, blocks } = useBlockStore();
    const { token } = useToken();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const handleSubmit = async <T extends BlocksUnionType>(
        e: React.FormEvent<HTMLFormElement>,
        blockType: T['type'],
    ) => {
        e.preventDefault();
        if (!token) return;

        const formData = new FormData(e.currentTarget);
        const formEntries = Object.fromEntries(formData.entries());

        console.log(blocks, 'submit');
        const maxSequence = blocks
            ? Math.max(...blocks.map((b) => b.sequence), 0)
            : 0;

        const newBlock: T = {
            ...formEntries,
            type: blockType,
            sequence: maxSequence + 1,
        } as T;

        try {
            if (id) {
                await updateBlockApi({ accessToken: token, blockData: block! });
            } else {
                await addBlock({
                    accessToken: token,
                    blockData: newBlock,
                });
            }
            router.push('/admin');
            resetBlock();
        } catch (error) {
            console.log(error);
        }
    };

    return { handleSubmit, block, paramsId: id };
}
