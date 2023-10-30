import Image from "next/image";
import Logo from "@/public/logo.webp"

const Header = () => {
    return (
        <header className="box-content absolute inset-0 h-fit z-50 max-w-screen-2xl mx-auto px-3 py-2 xsm:px-10">
            <div className="relative w-20 h-20">
                <Image src={Logo} alt={"logo"} fill className="object-contain object-center" />
            </div>
        </header>
    )
}

export default Header;