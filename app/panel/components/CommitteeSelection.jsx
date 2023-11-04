const komiteler = [
    {label: "Sağlık", value: "Sağlık"},
    {label: "İnsan Hakları", value: "İnsan Hakları"},
    {label: "Ekonomi", value: "Ekonomi"},
    {label: "Eğitim", value: "Eğitim"},
    {label: "Çevre", value: "Çevre"},
    {label: "Tarım-Orman", value: "Tarım-Orman"},
    {label: "Dışişleri", value: "Dışişleri"},
    {label: "Turizm", value: "Turizm"},
    {label: "Tarihi Kriz", value: "Tarihi Kriz"},
]

const CommitteeSelection = ({ values }) => {

    const {setKomite, disabled} = values

    return (
        <select disabled={disabled} onChange={(e) => setKomite(e.target.value)} className="text-black committee-selection">
            <option value="Seçilmedi">Seçilmedi</option>
            {komiteler.map(komite => (
                <option key={komite.value} value={komite.value}>
                    {komite.value}
                </option>
            ))}
        </select>
    )
}

export default CommitteeSelection;
