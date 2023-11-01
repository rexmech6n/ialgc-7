import AnimationContainer from "@/components/AnimatonContainer";

export default function ApplicationPage() {
    return (
        <AnimationContainer
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
        >

        </AnimationContainer>
    )
}