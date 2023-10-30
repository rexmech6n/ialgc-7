import LandingVideo from "@/app/(home)/components/LandingVideo";
import LandingContent from "@/app/(home)/components/LandingContent";

export default function Home() {
    return (
        <section>
            <div className="relative">
                <LandingVideo />
                <LandingContent />
            </div>
        </section>
    )
}