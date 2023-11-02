import AnimationContainer from "@/components/AnimatonContainer";
import Image from "next/image";
import Banner from "@/public/banner.webp"

export default function ApplicationPage() {
    return (
        <section className="relative text-white flex flex-col min-h-[100dvh] w-full">
            <div className="z-40 w-full h-full inset-0 absolute [mask-type:alpha] backdrop-blur-[10px] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0)_60%)]"></div>
            <div className="fixed w-full h-full inset-0">
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.723)_36%,rgba(0,0,0,.918))] z-30 bg-fixed"></div>
                <Image className="z-20 object-cover" fill src={Banner} alt={"banner"} />
            </div>
            <div>

            </div>
        </section>
    )
}