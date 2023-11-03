"use client"
import {ReactNode} from 'react';
import {useUser} from "@/contexts/UserContext";
import {ApplicationPosition} from "@/types/application";
import {User} from "@/types/user";
import {usePagination} from "@/contexts/PaginationContext";

type TicketProps = {
    name: ApplicationPosition,
    description: ReactNode
}

const selectedGradient = /*"red"*/ "radial-gradient(circle at center 20%, rgba(255,0,0,0.526171) 0%,rgba(0,0,0,0) 100%)"

const Ticket = ({name, description}: TicketProps) => {

    const {user ,setUser} = useUser()
    const {setPageNum} = usePagination()
    const position = user?.application?.position

    const selected = position === name

    const handleClick = () => {
        setUser(prev => {
            prev!.application = {
                form: {},
                position: name,
                state: 0
            }
            return {...prev} as User
        })

        setTimeout(() => {
            setPageNum(prev => prev+1)
        }, 500)
    }

    return (
        <button disabled={!!position} onClick={handleClick} style={{background: "rgba(21,21,21,0.495731) " + (selected ? selectedGradient : "")}} className={`flex flex-col justify-center max-w-[500px] my-4 mx-4 rounded-[15px] px-5 py-3.5 z-30 backdrop-blur-[10px]`}>
            <div>
                <p className="[font-size:_clamp(24px,_3dvw,_26px)] my-2.5">{name}</p>
                <p className="text-sm sm:text-base mb-2.5 font-medium px-3">{description}</p>
            </div>
        </button>
    );
};

export default Ticket;