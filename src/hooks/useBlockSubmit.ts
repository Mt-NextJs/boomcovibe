import { useRouter, useSearchParams } from 'next/navigation';
import useBlockStore from 'store/useBlockStore';
import useToken from 'store/useToken';
import { addBlock, updateBlock } from 'service/api/block-api';

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

        try {
            if (id) {
                await updateBlock({
                    accessToken: token,
                    blockData: block!,
                });
                console.log(blocks, 'update', block);
            } else {
                const formData = new FormData(e.currentTarget);
                const formEntries = Object.fromEntries(formData.entries());
                console.log(formEntries, 'formEntries');
                const maxSequence = blocks
                    ? Math.max(...blocks.map((b) => b.sequence), 0)
                    : 0;

                const newBlock: T = {
                    ...formEntries,
                    type: blockType,
                    sequence: maxSequence + 1,
                } as T;
                if ('style' in newBlock) {
                    newBlock.style = Number(newBlock.style);
                }
                console.log(blocks, 'add', newBlock);

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
