import {useState} from "react";
import {updateUser} from "@/firebase/firestore";
import CommitteeSelection from "./CommitteeSelection";
import {ApplicationPosition, ApplicationState} from "@/types/application";

const User = ({ user, activeQuestions, secenekler }) => {

    const [durum, setDurum] = useState(user.application.state)
    const [payment, setPayment] = useState(user.application.payment)
    const [loading, setLoading] = useState(false)
    const [komite, setKomite] = useState({display: user.committee, form: user.committee})
    const komiteBelirleme = user.application.position === ApplicationPosition.DELEGATE || user.application.position === ApplicationPosition.CHAIR

    const handleAccept = async () => {
        setLoading(true)
        await updateUser(user.id, { application: {...user.application, state: ApplicationState.APPROVED} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current
        secenekler.filter(secenek => secenek.name === user.application.position)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.APPROVED} }]
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
        await updateUser(user.id, { application: {...user.application, payment: true, committee: komite.form} })
        let currentArray = secenekler.filter(secenek => secenek.name === user.option)[0].array.current
        secenekler.filter(secenek => secenek.name === user.option)[0].array.current = [...currentArray.filter(u => u.id !== user.id), {...user, application: {...user.application, state: ApplicationState.APPROVED, payment: true, committee: komite.form} }]
        setPayment(true)
        setKomite(prev => ({...prev, display: prev.form}))
        setLoading(false)
    }


    return (
        <div className="user">
            {payment && <p className="user-durum">Ödeme onaylandı, komite: {komite.display}</p>}
            {durum === ApplicationState.APPROVED && <p className="user-durum">Kabul edildi</p> }
            {durum === ApplicationState.DECLINED && <p className="user-durum">Reddedildi</p> }
            <div className="user-buttons">
                <div className="kabul-ret-buttons">
                    <button onClick={handlePaymentSuccess} disabled={ durum !== ApplicationState.APPROVED || payment || loading || (komiteBelirleme && (komite.form === "Seçilmedi" || !komite.form)) } className="user-button">Ödeme Kabul</button>
                    {komiteBelirleme && <CommitteeSelection values={{disabled: durum !== ApplicationState.APPROVED || payment || loading, setKomite: (val) => setKomite(prev => ({...prev, form: val}))}} />}
                </div>
                <div className="kabul-ret-buttons">
                    <button onClick={handleAccept} disabled={!!durum || loading} className="user-button">Kabul et</button>
                    <button onClick={handleReject} disabled={!!durum || loading} className="user-button">Reddet</button>
                </div>
            </div>
            <div className="fields">
                {activeQuestions.map(question => (
                    <div key={question.name} className="field">
                        <p className="field-label">{question.question}</p>
                        <p className="field-content">{user.application.form[question.name]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
