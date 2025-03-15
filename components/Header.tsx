import Image from "next/image";
import Logo from "@/public/logo.webp"

type HeaderProps = {
    align?: "center" | "left"
}

const Header = ({ align = "left"}: HeaderProps) => {
    return (
        <header style={{justifyContent: align === "left" ? "flex-start" : "center"}} className="absolute flex inset-0 h-fit z-50 max-w-screen-2xl mx-auto px-3 py-2 xsm:px-10">
            <div className="relative w-20 h-20 rounded-full overflow-hidden bg-white ">
                <Image src={Logo} alt={"logo"} fill className="object-contain object-center px-0 pt-3 pb-2" />
            </div>
        </header>
    )
}

export default Header;