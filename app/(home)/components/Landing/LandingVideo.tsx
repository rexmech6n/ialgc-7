const videoUrl = "https://cdn.xreos.co/usercontent:videos:00d0c1e0-d032-43ba-a6fd-3c022dc5362e.webm"
//const videoUrl = "/teaser.webm"

const LandingVideo = () => {
    return (
        <>
            <video className="w-screen brightness-90 md:brightness-50 h-[60dvh] min-h-[30rem] md:h-[70dvh] max-h-[40rem] lg:max-h-none lg:min-h-[45rem] object-cover object-center" autoPlay muted loop poster="/poster.webp" src={videoUrl}></video>
            <div className="absolute w-full h-full bg-[#770000B2] mix-blend-multiply inset-0"></div>
        </>
    );
};

export default LandingVideo;