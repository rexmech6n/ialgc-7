const videoUrl = "https://cdn.xreos.co/usercontent:videos:00d0c1e0-d032-43ba-a6fd-3c022dc5362e.webm"

const LandingVideo = () => {
    return (
        <>
            <video className="w-screen h-auto brightness-50 min-h-[38rem] object-cover object-center" autoPlay muted loop poster="/poster.webp" src="/teaser.webm"></video>
            <div className="absolute w-full h-full bg-[#770000B2] mix-blend-multiply inset-0"></div>
        </>
    );
};

export default LandingVideo;