import {ReactNode} from "react"
import {Metadata} from "next"

type GameLayoutProps = {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Nayki Bird | İAL Gençlik Çalıştayı",
    description: "Konferansımızın resmi oyunu olan Nayki Bird'ü deneyin!",
}

export default function GameLayout({ children } : GameLayoutProps) {
    return children
}