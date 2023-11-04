const videoUrl = "https://cdn.xreos.co/usercontentvideoccb1b626-b002-4249-a013-ffa742b3dd3d.mp4"
//const videoUrl = "/teaser.mp4"

const LandingVideo = () => {
    return (
        <>  
            <video className="w-screen brightness-90 md:brightness-50 h-[60dvh] min-h-[30rem] md:h-[70dvh] max-h-[40rem] lg:max-h-none lg:min-h-[45rem] object-cover object-center" autoPlay={true} muted={true} loop={true} poster="/poster.webp" src={videoUrl}></video>
            <div className="absolute w-full h-full bg-[#770000B2] mix-blend-multiply inset-0"></div>
        </>
    );
};

export default LandingVideo;