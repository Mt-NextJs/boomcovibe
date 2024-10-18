export default function VideoEmbed({ url }: { url: string | null }) {
    // src 없을 때 사용할 스켈레톤 구현 필요
    
    return (
        <iframe
            className="aspect-video w-full rounded-lg"
            src={url||"https://www.youtube.com/embed/Rj4qtCz99ME?si=VC45C1bcMJ5NHJmG"}
            title="video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
}
