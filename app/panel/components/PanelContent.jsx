import User from "./User";
import CommitteeSelection from "./CommitteeSelection";
import {useEffect, useMemo, useState} from "react";
import {getApplications} from "@/firebase/firestore";
import Loading from "@/components/Loading";
import {applicationPositions} from "@/utils";
import {ApplicationPosition} from "@/types/application";

const PanelContent = ({ active, secenekler }) => {

    const [komite, setKomite] = useState({1: "Seçilmedi", 2: "Seçilmedi", 3: "Seçilmedi"})
    const [activeList, setActiveList] = useState([])
    const [loading, setLoading] = useState(false)

    let activeQuestions = useMemo(() => applicationPositions.find(p => p.name === active)?.form || [], [active])

    useEffect(() => {
        if(!active) return

        setLoading(true)
        const checkActive = async () => {
            const currentActive = secenekler.find(secenek => secenek.name === active)

            if(currentActive.array.current.length === 0) {
                currentActive.array.current = await getApplications(currentActive.name)
                setActiveList(currentActive.array.current)
            }
            else {
                setActiveList(currentActive.array.current)
            }
        }

        checkActive().then(() => setLoading(false))
    }, [active])

    useEffect(() => {
        if(!active) return

        const currentActive = secenekler.filter(secenek => secenek.name === active)[0]
        setActiveList(currentActive.array.current)

        if(komite["1"] !== "Seçilmedi")
            setActiveList(prev => prev.filter(user => user.application.form.firstPreference === komite["1"]))
        if(komite["2"] !== "Seçilmedi")
            setActiveList(prev => prev.filter(user => user.application.form.secondPreference === komite["2"]))
        if(komite["3"] !== "Seçilmedi")
            setActiveList(prev => prev.filter(user => user.application.form.thirdPreference === komite["3"]))
    },[komite])

    return (
        <div className="panel-content box-border w-full">
            {!active && <p className="not-selected">Yukarıdan başvuru pozisyonu seçin</p> }
            {(active === ApplicationPosition.DELEGATE || active === ApplicationPosition.CHAIR) &&
            <div className="filter" style={{color: "white", margin: "0 auto", padding: "40px 0", width: "200px"}}>
                <div>1. Tercih: <CommitteeSelection values={ { setKomite: (val) => setKomite( prev => ({...prev, 1: val}) ), disabled: false } } /></div>
                <div>2. Tercih: <CommitteeSelection values={ { setKomite: (val) => setKomite( prev => ({...prev, 2: val}) ), disabled: false } } /></div>
                <div>3. Tercih: <CommitteeSelection values={ { setKomite: (val) => setKomite( prev => ({...prev, 3: val}) ), disabled: false } } /></div>
            </div>
            }
            {loading && <Loading height={"40vh"} />}
            {!!active && <p style={{color: "white", margin: "0 auto", maxWidth: "300px", padding: "15px"}}>Görüntülenen başvuru sayısı: {activeList.length}</p>}
            {activeList.map(user => (
                <User key={user.email} secenekler={secenekler} activeQuestions={activeQuestions} user={user} />
            ))}
        </div>
    );
};

export default PanelContent;
