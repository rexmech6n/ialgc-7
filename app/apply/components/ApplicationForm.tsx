"use client"

import {useUser} from "@/contexts/UserContext";
import {applicationPositions} from "@/utils";

const ApplicationForm = () => {

    const {user, setUser} = useUser()

    const position = user?.application?.position

    if(!position) return null

    const questions = applicationPositions.find(p => p.name === position)!

    return (
        <form className="pt-[clamp(200px,30dvw,300px)]">
            <p className="font-bold text-2xl text-center mb-6">{position} başvurusu</p>
            {questions.form.map(q => {
                const InputComponent = q.component
                return (
                    <InputComponent
                        key={q.name}
                        name={q.name}
                        autoComplete={"off"}
                        className={"w-[clamp(230px,80dvw,350px)] px-3"}
                        label={<span className="block mb-2 font-semibold text-base">{q.question}</span>}
                        required={q.required}
                    />
                )
            })}
            <button></button>
        </form>
    );
};

export default ApplicationForm;