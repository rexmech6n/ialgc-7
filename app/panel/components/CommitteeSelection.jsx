const komiteler = [
    {label: "Dışişleri", value: "Dışişleri"},
    {label: "İçişleri", value: "İçişleri"},
    {label: "Çevre", value: "Çevre"},
    {label: "Eğitim", value: "Eğitim"},
    {label: "Turizm", value: "Turizm"},
    {label: "Sağlık", value: "Sağlık"},
    {label: "Ekonomi", value: "Ekonomi"},
    {label: "Kriz: 93 Harbi", value: "93 Harbi"},
    {label: "Kriz: Amerikan Bağımsızlık Savaşı", value: "Amerikan Bağımsızlık Savaşı"},
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
