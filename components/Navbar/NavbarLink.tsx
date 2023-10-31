"use client"
import {ReactNode} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {getConditionalStyles} from "@/utils";

type NavbarLinkProps = {
    icon: ReactNode
    children: ReactNode,
    path: string
}

const NavbarLink = ({children, path, icon}: NavbarLinkProps) => {
    const pathname = usePathname()

    const active = pathname === path

    return (
        <Link href={path} className={`flex items-center rounded-full transition-colors duration-200 text-[#6B1710] ease-linear py-1.5 px-2 mx-1 sm:py-2 sm:px-3 sm:mx-2 text-base ${getConditionalStyles("font-semibold bg-[#DE55557F] [&>div>svg]:fill-[#6B1710] text-xs sm:text-base delay-200", active)}`}>
            <div className={`mr-1 sm:mr-2 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:sm:w-8 [&>svg]:sm:h-8 [&>svg]:transition-colors [&>svg]:duration-200 [&>svg]:ease-linear ${getConditionalStyles("[&>svg]:delay-200", active)}`}>
                {icon}
            </div>
            <div className={`transition-all overflow-hidden whitespace-nowrap w-auto duration-300 ease-linear ${getConditionalStyles("max-w-0 opacity-0", !active)} ${getConditionalStyles("max-w-[200px] opacity-100 delay-300", active)}`}>
                {children}
            </div>
        </Link>
    );
};

export default NavbarLink;