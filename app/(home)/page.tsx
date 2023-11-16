import Landing from "@/app/(home)/components/Landing";
import Memories from "@/app/(home)/components/Memories";
import Counter from "@/app/(home)/components/Counter";

export const dynamic = "force-dynamic"

export default function Home() {
    return (
        <>
            <Landing />
            <Memories />
            <Counter/>
        </>
    )
}