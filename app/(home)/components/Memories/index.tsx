import AnimationContainer from "@/components/AnimatonContainer";
import PhotoRenderer from "@/app/(home)/components/Memories/PhotoRenderer";

const Memories = () => {
    return (
        <section
            style={{background: "url('/pattern.webp') center center, linear-gradient(180deg, rgba(168, 24, 24, 0.25) 0%, rgba(255, 0, 0, 0.50) 100%), black"}}
            className="text-white w-full"
        >
            <AnimationContainer
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.2}}
            >
                <h2 style={{fontSize: "clamp(16px, 4dvw, 30px)"}} className="pt-8 pb-6 sm:pt-11 sm:pb-12 text-center font-semibold [text-shadow:2px_2px_10px_black]">İzmir{"'"}in En Prestijli Konferansında<br/>Unutamayacağın Bir Deneyim Yaşa!</h2>
            </AnimationContainer>

            <PhotoRenderer/>
        </section>
    );
};

export default Memories;