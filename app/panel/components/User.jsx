import {useMemo, useState} from "react";
import {updateUser} from "@/firebase/firestore";
import CommitteeSelection from "./CommitteeSelection";
import {ApplicationPosition, ApplicationState} from "@/types/application";
import {delegationDelegateForm} from "@/utils"

const User = ({ user, activeQuestions, secenekler }) => {

    const [durum, setDurum] = useState(user.application.state)
    const [payment, setPayment] = useState(user.application.payment)
    const [loading, setLoading] = useState(false)
    const [country, setCountry] = useState(user.application.country)
    const [komite, setKomite] = useState({display: user.application.committee, form: user.application.committee})
    const komiteBelirleme = user.application.position === ApplicationPosition.DELEGATE || user.application.position === ApplicationPosition.CHAIR

    const handleAccept = async (e, position) => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.APPROVED, mailPosition: position || null} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.APPROVED}, mailPosition: position }]
        setDurum(ApplicationState.APPROVED)
        setLoading(false)
    }

    const handleReject = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.DECLINED} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.DECLINED} }]
        setDurum(ApplicationState.DECLINED)
        setLoading(false)
    }

    const handlePaymentSuccess = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, payment: true, committee: komite.form || null, country: country || null} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.APPROVED, payment: true, committee: komite.form || null, country: country || null} }]
        setPayment(true)
        setKomite(prev => ({...prev, display: prev.form}))
        setLoading(false)
    }

    const handleWaitlist = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.DELAYED} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.DELAYED} }]
        setDurum(ApplicationState.DELAYED)
        setLoading(false)
    }

    const otherDelegateNumber = useMemo(() => {
        if(!activeQuestions.some(question => question.name === "delegates")) return []
        let i = 1
        let arr = []
        while(true) {
            if(!!user.application.form["fullName" + i]) {
                arr.push(i)
                i++
            }
            else break
        }
        return arr
    }, [])

    return (
        <div className="user">
            {payment && <p className="user-durum">Ödeme onaylandı, komite: {komite.display}</p>}
            {durum === ApplicationState.APPROVED && <p className="user-durum">Kabul edildi</p> }
            {durum === ApplicationState.DECLINED && <p className="user-durum">Reddedildi</p> }
            {durum === ApplicationState.DELAYED && <p className="user-durum">Waitlisted</p>}
            <div className="user-buttons">
                <div className="kabul-ret-buttons">
                    <button onClick={handlePaymentSuccess} disabled={ durum !== ApplicationState.APPROVED || payment || loading || (komiteBelirleme && (komite.form === "Seçilmedi" || !komite.form)) || (user.application.position === ApplicationPosition.DELEGATE && !country) } className="user-button">Ödeme Kabul</button>
                    {komiteBelirleme && <CommitteeSelection values={{disabled: durum !== ApplicationState.APPROVED || payment || loading, setKomite: (val) => setKomite(prev => ({...prev, form: val}))}} />}
                    {(user.application.position === ApplicationPosition.DELEGATE && durum === ApplicationState.APPROVED) && <input value={country} placeholder="Country" onChange={e => setCountry(e.target.value)} className="max-w-[150px] sm:ml-3 mt-3 sm:mt-0 rounded-lg sm:inline block text-black outline-0 px-2 py-1" type="text"/>}
                </div>
                <div className="kabul-ret-buttons">
                    {user.application.position === ApplicationPosition.CHAIR && (
                        <>
                            <button onClick={handleAccept} disabled={!!durum || loading} className="user-button">Chair Kabul</button>
                            <button onClick={e => handleAccept(e, "Co-Chair")} disabled={!!durum || loading} className="user-button">Co-Chair Kabul</button>
                        </>
                    )}
                    {user.application.position !== ApplicationPosition.CHAIR && <button onClick={handleAccept} disabled={(durum !== ApplicationState.DELAYED && !!durum) || loading} className="user-button">Kabul et</button>}
                    <button disabled={!!durum || loading} className="user-button" onClick={handleWaitlist}>Waitlist</button>
                    <button onClick={handleReject} disabled={!!durum || loading} className="user-button">Reddet</button>
                </div>
            </div>
            <div className="fields">
                <div className="field">
                    <p className="field-label">Email</p>
                    <p className="field-content">{user.email}</p>
                </div>
                {activeQuestions.map(question => (
                    <div key={question.name} className="field">
                        <p className="field-label">{question.label}</p>
                        <p className="field-content">{user.application.form[question.name]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;