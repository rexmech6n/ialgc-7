"use client"
import {useUser} from "@/contexts/UserContext";

const ApplicationSent = () => {

    const {application} = useUser().user!

    return (
        <div className="pt-32 flex flex-1 flex-col items-center justify-center">
            <p className="text-center mb-2 font-bold text-xl sm:text-2xl md:text-3xl">{application!.position} başvurunuz alındı!</p>
            <p className="text-sm sm:text-base text-center max-w-[400px]">Başvurunuz halkla ilişkiler ekibimiz tarafından değerlendirilecek ve size en kısa süre içinde dönüş yapılacaktır.</p>
        </div>
    );
};

export default ApplicationSent;