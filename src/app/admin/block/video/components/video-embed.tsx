export default function VideoEmbed({ url }: { url: string }) {
    // src 없을 때 사용할 스켈레톤 구현 필요
    console.log(url);
    if (url === '' || url.includes('undefined')) return null;
    return (
        <iframe
            className="aspect-video w-full rounded-lg"
            src={url}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
