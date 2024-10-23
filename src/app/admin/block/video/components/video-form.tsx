'use client';

import { useEffect, useState } from 'react';
import VideoEmbed from './video-embed';
import useBlockStore from 'store/useBlockStore';
import { useBlockSubmit } from 'hooks/useBlockSubmit';
import { validateURL } from 'service/validation';

export default function VideoForm() {
    const { block, updateBlock } = useBlockStore();
    const { handleSubmit, paramsId } = useBlockSubmit();
    const [url, setUrl] = useState(paramsId && block ? block.url : '');
    const [embedUrl, setEmbedUrl] = useState<string>('');
    const [thumbnail, setThumbnail] = useState<string>('');
    const [title, setTitle] = useState<string>('');

    const getVideoId = (url: string) => {
        const videoId = url.split('v=')[1];
        const ampersandPosition = videoId ? videoId.indexOf('&') : -1;
        const cleanVideoId =
            ampersandPosition !== -1
                ? videoId.substring(0, ampersandPosition)
                : videoId;
        const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}`;
        setEmbedUrl(embedUrl);

        return cleanVideoId;
    };
    useEffect(() => {
        if (paramsId && block && url && title && thumbnail) {
            updateBlock(block.id, {
                url: url,
                imgUrl: thumbnail,
                title: title,
            });
        }
    }, [title, thumbnail]);
    useEffect(() => {
        if (url) {
            getVideoId(url);
        }
    }, [url]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputUrl = e.target.value;
        setUrl(inputUrl);
        if (!validateURL(inputUrl) && inputUrl !== '')
            return alert('올바른 주소를 입력해주세요');

        const cleanVideoId = getVideoId(inputUrl);

        setThumbnail(
            `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`,
        );

        fetch(
            `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${cleanVideoId}`,
        )
            .then((response) => response.json())
            .then((data) => setTitle(data.title))
            .catch((error) =>
                console.error('Error fetching video title:', error),
            );
    };
    return (
        <form
            method="POST"
            action="/api/link/add"
            onSubmit={(e) => handleSubmit(e, 2)}
            className="mb-10 flex flex-col gap-2"
        >
            <label htmlFor="url">
                내용 입력
                <span className="title relative top-1 ml-2 inline-block text-red-500">
                    *
                </span>
            </label>

            <input
                type="text"
                name="url"
                id="url"
                value={url || ''}
                onChange={(e) => handleInputChange(e)}
                placeholder="유튜브, 틱톡 등 좋아하는 동영상을 공유하세요"
                className="input"
            />
            <input type="hidden" name="title" value={title} />
            <input type="hidden" name="imgUrl" value={thumbnail} />
            <VideoEmbed url={embedUrl} />
            <button className="button color">추가 완료</button>
        </form>
    );
}
