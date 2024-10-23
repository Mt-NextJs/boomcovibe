import Image from 'next/image';
import LinkStyleSelector from './link-style-selector';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuPen } from 'react-icons/lu';
import { validateURL } from 'service/validation';

export default function LinkForm({
    onSubmit,
    selectedStyle,
    handleInputChange,
    handleStyleChange,
    title,
    url,
    paramsId,
    imgUrl,
    handleFileChange,
    handleDeleteImg,
}: {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    selectedStyle: number;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleStyleChange: (index: number) => void;
    title: string;
    url: string;
    paramsId: string | null;
    imgUrl: string;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteImg: () => void;
}) {
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
                    value={url}
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
                    value={title}
                    onChange={handleInputChange}
                />
            </div>

            <div className="flex flex-col items-start space-y-2">
                <label className="font-semibold">
                    이미지 <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center justify-center gap-4">
                    <div className="relative flex h-48 w-48 items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-300">
                        {imgUrl ? (
                            <Image
                                src={imgUrl}
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
                            id="file"
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                            onChange={handleFileChange}
                        />
                        <input type="hidden" name="imgUrl" value={imgUrl} />
                    </div>
                    <div className="text-sm">
                        {!imgUrl ? (
                            <p>
                                이미지를 직접 끌어오거나 <br />
                                파일을 선택하여 업로드 해주세요
                            </p>
                        ) : (
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="file"
                                    className="aspect-square w-14 cursor-pointer overflow-hidden rounded-full"
                                >
                                    <LuPen className="h-full w-full bg-primary p-2" />
                                </label>
                                <button
                                    className="aspect-square w-14 cursor-pointer overflow-hidden rounded-full"
                                    onClick={handleDeleteImg}
                                >
                                    <RiDeleteBin6Line className="h-full w-full bg-slate-500 p-2" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <button className="button color">
                {paramsId ? '수정 완료' : '추가 완료'}
            </button>
        </form>
    );
}
