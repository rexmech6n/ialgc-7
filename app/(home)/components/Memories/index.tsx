import Image from "next/image";
import AnimationContainer from "@/components/AnimatonContainer";

const Memories = () => {
    return (
        <section
            style={{background: "url('/pattern.webp') center center, linear-gradient(180deg, rgba(168, 24, 24, 0.25) 0%, rgba(255, 0, 0, 0.50) 100%), black"}}
            className="text-white w-full pb-24"
        >
            <AnimationContainer
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.2}}
            >
                <h2 style={{fontSize: "clamp(16px, 4dvw, 30px)"}} className="pt-8 pb-6 sm:pt-11 sm:pb-12 text-center font-semibold [text-shadow:2px_2px_10px_black]">İzmir{"'"}in En Prestijli Konferansında<br/>Unutamayacağın Bir Deneyim Yaşa!</h2>
            </AnimationContainer>

            <div className="flex flex-wrap justify-evenly xsm:justify-center">
                {[1, 2, 3, 4].map((i) => (
                    <div className="shrink-0 basis-[45%] md:basis-[30%] lg:basis-[23%] relative w-96 h-32 xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-2 rounded-xl overflow-hidden" key={i}>
                        <Image className="object-contain" src={`/memories/image${i}.webp`} alt={"memory"} fill />
                    </div>
                ))}
                {[5, 6, 7].map(i => (
                    <div className="shrink-0 basis-[45%] md:basis-[30%] relative w-96 h-32 xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-3" key={i}>
                        <Image className="object-contain" src={`/memories/image${i}.webp`} alt={"memory"} fill />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Memories;