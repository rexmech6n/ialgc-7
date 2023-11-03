import Image from "next/image";
import Banner from "@/public/banner.webp"
import UserContextProvider from "@/contexts/UserContext";
import AuthWrapper from "@/app/apply/components/Auth/AuthWrapper";
import {PaginationContextProvider} from "@/contexts/PaginationContext";
import AnimatedPagination from "@/components/AnimatedPagination";
import React from "react";
import PositionSelector from "@/app/apply/components/PositionSelector";
import ApplicationForm from "@/app/apply/components/ApplicationForm";

type AnimationKeyframes = {
    from: Keyframe,
    to: Keyframe
}

type Animation = {keyframe: AnimationKeyframes, options: KeyframeAnimationOptions}

const animationOptions: KeyframeAnimationOptions = {duration: 300, easing: "ease", fill: "forwards"}

const animation: {
    enter: Animation,
    exit: Animation
} = {
    enter: {
        keyframe: {
            from: {opacity: 0},
            to: {opacity: 1}
        },
        options: {...animationOptions, delay: 300}
    },
    exit: {
        keyframe: {
            from: {opacity: 1},
            to: {opacity: 0}
        },
        options: animationOptions
    }
}

export const dynamic = "force-dynamic"

export default function ApplicationPage() {
    return (
        <section className="relative text-white flex flex-col min-h-[100dvh] w-full pb-36">
            <div className="z-40 w-full h-full inset-0 absolute [mask-type:alpha] backdrop-blur-[10px] [mask-image:linear-gradient(180deg,transparent_0%,rgba(0,0,0)_40%)]"></div>
            <div className="fixed w-full h-full inset-0">
                <div className="absolute w-full h-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,.723)_26%,rgba(0,0,0,.918))] z-30 bg-fixed"></div>
                <Image className="z-20 object-cover object-center" fill src={Banner} alt={"banner"} />
            </div>

            <UserContextProvider>
                <AuthWrapper>
                    <PaginationContextProvider>
                        <AnimatedPagination animation={animation}>
                            <PositionSelector />
                            <ApplicationForm />
                        </AnimatedPagination>
                    </PaginationContextProvider>
                </AuthWrapper>
            </UserContextProvider>
        </section>
    )
}