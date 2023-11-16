"use client"
import Image from "next/image";
import {useState} from "react";

const PhotoRenderer = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => setCount(count + 1)

    const displayEasterEgg = count >= 31

    return (
        <div className="flex flex-wrap justify-evenly xsm:justify-center">
            {[1, 2, 3, 4].map((i) => (
                <div onClick={i === 3 ? handleClick : undefined} className={`shrink-0 basis-[45%] md:basis-[30%] lg:basis-[23%] relative w-96 ${!displayEasterEgg ? "h-32" : "h-48"} xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-2 rounded-xl overflow-hidden`} key={i}>
                    <Image className="object-contain" src={displayEasterEgg ? "/memories/easterEgg.webp" : `/memories/image${i}.webp`} alt={"memory"} fill />
                </div>
            ))}
            {[5, 6, 7].map(i => (
                <div className={`shrink-0 basis-[45%] md:basis-[30%] relative w-96 ${!displayEasterEgg ? "h-32" : "h-48"} xsm:h-48 md:h-64 xl:h-[20rem] mx-0 sm:mx-3`} key={i}>
                    <Image className="object-contain" src={displayEasterEgg ? "/memories/easterEgg.webp" : `/memories/image${i}.webp`} alt={"memory"} fill />
                </div>
            ))}
        </div>
    );
};

export default PhotoRenderer;