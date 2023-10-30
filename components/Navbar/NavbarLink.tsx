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
        <Link href={path} className={` ${getConditionalStyles("bg-[#DE55557F] rounded-full block", active)}`}>
            <div>
                {icon}
            </div>
            {children}
        </Link>
    );
};

export default NavbarLink;