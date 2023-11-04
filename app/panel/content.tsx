import PanelNavbar from "@/app/panel/components/PanelNavbar";
import {useRef, useState} from "react";
import {useUser} from "@/contexts/UserContext";
import {ApplicationPosition} from "@/types/application";
import PanelContent from "@/app/panel/components/PanelContent";
import {redirect} from "next/navigation";

export default function PanelPageContent() {
    const [active, setActive] = useState(null);
    const admin = useUser().user?.admin

    const secenekler = [
        {name: ApplicationPosition.CHAIR, array: useRef([])},
        {name: ApplicationPosition.DELEGATE, array: useRef([])},
        {name: ApplicationPosition.PRESS, array: useRef([])},
        {name: ApplicationPosition.ADMIN, array: useRef([])}
    ]

    if(!admin)
        return null

    return (
        <div className="panel !overflow-x-hidden box-border w-screen z-[99]">
            <PanelNavbar active={active} setActive={setActive} secenekler={secenekler} />
            <PanelContent secenekler={secenekler} active={active} />
        </div>
    )
}