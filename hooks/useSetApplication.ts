import {useState} from "react";
import {useUser} from "@/contexts/UserContext";
import {User} from "@/types/user";
import {ApplicationPosition} from "@/types/application";
import {updateUser} from "@/firebase/firestore";

export default function useSetApplication() {

    const {user, setUser} = useUser()
    const {position} = user!.application!

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string |  null>(null)

    const sender = async (formData: FormData) => {
        setError(null)
        setLoading(true)

        const data: User = {...user!, application: {...user!.application!}}

        console.log(formData.entries())

        // @ts-ignore
        for(const [key, value] of formData.entries()) {
            (data.application!.form as any)[key] = value
        }


        if(position === ApplicationPosition.DELEGATE || position === ApplicationPosition.CHAIR) {
            const first = formData.get("firstPreference")
            const second = formData.get("secondPreference")
            const third = formData.get("thirdPreference")
            console.log(first)
            console.log(second)
            console.log(third)

            if(first === second || first === third || second === third) {
                setLoading(false)
                return setError("Komite tercihleriniz farklı olmak zorundadır.")
            }
        }


        try {
            await updateUser(user!.id!, data)
            setUser(data)
            setLoading(false)
            setError(null)
        }
        catch (e) {
            setLoading(false)
            setError("Bir hata oluştu lütfen daha sonra tekrar deneyin.")
        }
    }

    return {sender, loading, error}
}