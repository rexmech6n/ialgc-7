import Image from "next/image";
import Banner from "@/public/banner.webp"
import Committee from "@/app/committees/components/Committee";
import CommitteeGuide from "@/app/committees/components/CommitteeGuide";
import {Metadata} from "next"
import Header from "@/components/Header"

const committees: {name: string, guide: string, description: string}[] = [
    {name: "Dışişleri", guide: "https://www.instagram.com/p/DIBy4p1Ir7S/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "İçişleri", guide: "https://www.instagram.com/p/DIBy-csozRS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Çevre", guide: "https://www.instagram.com/p/DIBzDJiITqO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Eğitim", guide: "https://www.instagram.com/p/DIBzL1ko22j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Turizm", guide: "https://www.instagram.com/p/DIBzHVVo-GQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Sağlık", guide: "https://www.instagram.com/p/DIBzQo9Ix6H/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Ekonomi", guide: "https://www.instagram.com/p/DIBzThLIJC0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Kriz: 93 Harbi", guide: "https://www.instagram.com/p/DIBzXXkoH_W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
    {name: "Kriz: Amerikan Bağımsızlık Savaşı", guide: "https://www.instagram.com/p/DIBzZujo7EJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", description: ""},
]


export const metadata: Metadata = {
    title: "Komitelerimiz | İAL Gençlik Çalıştayı",
    description: "Güncel ve yaratıcı konuları ele alan komitelerimize bir göz atın."
}

export default function CommitteesPage() {
    return (
        <>
            <Header/>
            <section className="min-h-[max(100dvh,860px)] w-full">
                <div className="fixed min-h-screen w-full">
                    <Image fill src={Banner} alt="banner" className="object-cover blur-[10px] z-20"/>
                    <div className="absolute min-h-[max(100dvh,860px)] w-full bg-[rgba(255,255,255,.6)] z-30"></div>
                </div>
                <div
                    className="relative flex flex-col justify-center z-40 max-w-screen-2xl min-h-[max(100dvh,860px)] mx-auto pt-32 pb-32 px-3 sm:pt-0 sm:pb-2 xsm:px-10">
                    <h2 className="text-[#750000] font-bold text-[clamp(28px,3dvw,40px)] mb-10">Komitelerimiz</h2>
                    <div className="grid grid-cols-2 gap-7 sm:gap-10 [&>div]:col-span-2 sm:[&>div]:col-span-1">
                        {committees.map(committee => (
                            committee.guide ? <CommitteeGuide key={committee.name} name={committee.name}
                                                              description={committee.description}
                                                              guide={committee.guide}/> :
                                <Committee key={committee.name} name={committee.name}
                                           description={committee.description}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}