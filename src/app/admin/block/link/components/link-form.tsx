import Image from 'next/image';
import LinkStyleSelector from './link-style-selector';
import { Dispatch, useState } from 'react';
import useBlockStore from 'store/useBlockStore';

export default function LinkForm({
    state,
    onSubmit,
    selectedStyle,
    setSelectedStyle,
}: {
    state: Block | null;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    selectedStyle: number;
    setSelectedStyle: Dispatch<React.SetStateAction<number>>;
}) {
    const [file, setFile] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const { updateBlock } = useBlockStore();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'url') {
            setUrl(value);
        }
        if (state) {
            if (name === 'title') {
                updateBlock(state.id, { title: value });
            } else if (name === 'url') {
                updateBlock(state.id, { url: value });
            }
        }
    };
    const handleStyleChange = (index: number) => {
        setSelectedStyle(index + 1);
        if (state) updateBlock(state.id, { style: index });
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        setFile(selectedFile || null);
        setFileUrl(selectedFile ? URL.createObjectURL(selectedFile) : '');
    };
    return (
        <form onSubmit={onSubmit}>
            <LinkStyleSelector
                selectedStyle={selectedStyle}
                handleStyleChange={handleStyleChange}
            />
            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="url">
                    연결할 주소
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="url"
                    id="url"
                    placeholder="연결하고 싶은 링크 주소 전체를 입력해주세요"
                    className="input"
                    value={state?.url || url}
                    onChange={handleInputChange}
                />
            </div>

            <div className="mb-10 flex flex-col gap-2">
                <label htmlFor="title">
                    타이틀
                    <span className="title relative top-1 ml-2 inline-block text-red-500">
                        *
                    </span>
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="링크는 잘 나타낼 수 있는 이름으로 입력해주세요"
                    className="input"
                    value={state?.title || title}
                    onChange={handleInputChange}
                />
            </div>

            <div className="flex flex-col items-start space-y-2">
                <label className="font-semibold">
                    이미지 <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-center gap-4">
                    <div className="relative flex h-48 w-48 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-300">
                        {file ? (
                            <Image
                                src={URL.createObjectURL(file)}
                                alt="Uploaded"
                                className="h-full w-full rounded-lg object-cover"
                                width={100}
                                height={100}
                            />
                        ) : (
                            <span className="text-gray-500">
                                <Image
                                    src={'/assets/icons/icon_plus.png'}
                                    alt="Uploaded"
                                    width={30}
                                    height={30}
                                />
                            </span>
                        )}
                        <input
                            type="file"
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            onChange={handleFileChange}
                        />
                        <input type="hidden" name="imgUrl" value={fileUrl} />
                    </div>
                    <div className="text-sm">
                        <p>
                            이미지를 직접 끌어오거나 <br />
                            파일을 선택하여 업로드 해주세요
                        </p>
                    </div>
                </div>
            </div>

            <button className="button color">
                {state ? '수정 완료' : '추가 완료'}
            </button>
        </form>
    );
}
