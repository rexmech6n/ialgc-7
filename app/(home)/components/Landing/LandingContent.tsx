import Link from "next/link";
import AnimationContainer from "@/components/AnimatonContainer";

const LandingContent = () => {
    return (
        <div className="absolute inset-0 max-w-screen-2xl h-full mx-auto px-3 mt-5 xsm:px-10 xsm:mt-0 flex flex-col justify-center items-start">
            <AnimationContainer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2}}
            >
                <h1 style={{fontSize: "clamp(24px, 3.5dvw, 42px)"}} className="font-bold">
                    İAL Gençlik Çalıştayı
                </h1>
            </AnimationContainer>

            <AnimationContainer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.2}}
            >
                <p style={{fontSize: "clamp(12px, 2dvw, 20px)", textWrap: "balance"} as object} className="my-7 font-medium max-w-2xl">
                    İzmir’e konferans kültürü kazandıran, kalitesinden asla taviz vermeyen, Türkiye’nin en köklü ve iyi konferanslarından biri olan İzmir Atatürk Lisesi Gençlik Çalıştayı tekrardan sizlerle!
                </p>
            </AnimationContainer>

            <AnimationContainer
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.2, delay: 0.4}}
            >
                <Link href={'/apply'} className="flex justify-between items-center relative bg-white rounded-[100px] border-[1.5px] border-[#9A0000CC]">
                    <span style={{fontSize: "clamp(12px, 2dvw, 18px)"}} className="inline-block bg-gradient-to-r p-2 pl-5 pr-3 text-transparent bg-clip-text font-semibold from-[#000] from-40% to-[#F00] to-100%">Başvuru Yap</span>
                    <span className="flex justify-center items-center aspect-square w-10 md:w-12 rounded-[100px] bg-gradient-to-l from-[#F00] from-0% to-[#260D0D] to-134% text-2xl font-bold">{">"}</span>
                </Link>
            </AnimationContainer>

            <Link className="flex justify-center items-center text-center max-w-[180px] md:max-w-[230px] box-content px-3 py-2 rounded-2xl absolute bottom-9 xsm:bottom-6 right-2.5 bg-gradient-to-r from-[#FF8A00] to-[#F00]" href="https://www.instagram.com/reel/DHOPHino-UD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">
                <div className="bg-white rounded-full p-2 [&>svg]:w-[20px] [&>svg]:h-[20px] xsm:[&>svg]:w-[28px] xsm:[&>svg]:h-[28px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 48 41" fill="none">
                        <path d="M17.8801 27.7056L33.8425 18.1336L17.8801 8.50843V27.7056ZM14.7779 41V36.7458H5.302C3.83361 36.7458 2.58284 36.2588 1.54971 35.2847C0.516569 34.3107 0 33.1315 0 31.7471V5.05188C0 3.65285 0.516569 2.46112 1.54971 1.47669C2.58284 0.492229 3.83361 0 5.302 0H42.6416C44.1255 0 45.3896 0.492229 46.4337 1.47669C47.4779 2.46112 48 3.65285 48 5.05188V31.7471C48 33.1315 47.4779 34.3107 46.4337 35.2847C45.3896 36.2588 44.1255 36.7458 42.6416 36.7458H33.2221V41H14.7779ZM5.302 31.7471H42.6416V5.05188H5.302V31.7471Z" fill="url(#paint0_linear_212_65)"/>
                        <defs>
                            <linearGradient id="paint0_linear_212_65" x1="24" y1="0" x2="24" y2="41" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FF9D42"/>
                                <stop offset="1" stopColor="#FF0000"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="font-semibold text-xs md:text-base">
                    Tanıtım Videosunun Tamamını İzle
                </div>
            </Link>
        </div>
    )
}

export default LandingContent;