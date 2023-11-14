import {FC} from "react";
import TextInput from "@/app/apply/components/Inputs/TextInput";
import TextareaInput from "@/app/apply/components/Inputs/TextareaInput";
import GradeInput from "@/app/apply/components/Inputs/GradeInput";
import CommitteeInput from "@/app/apply/components/Inputs/CommitteeInput";
import {ApplicationPosition} from "@/types/application";

import Delegate from "@/public/positions/delege.webp"
import Press from "@/public/positions/basin.webp"
import Admin from "@/public/positions/gozlemci.webp"
import Chair from "@/public/positions/divan.webp"

type Position = {
    name: ApplicationPosition,
    description: string,
    image: string,
    form: {
        question: string,
        name: string,
        required: boolean,
        component: FC<any>
    }[]
}

export const getConditionalStyles =
    (styles: string, condition: boolean) => condition ? styles : ""

export const applicationPositions: Position[] = [
    {
        name: ApplicationPosition.DELEGATE,
        image: "/positions/delege.webp",
        description: "Delegeler konferansın temelini oluştururlar. Amaçları bulundukları komitelerde fikir üreterek çözüm taslağına katkıda bulunmaktır. Bu sayede komitelerinin genel kurulda geçmesine yardımcı olurlar.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput},
            {question: "1. Komite Tercihi", name: "firstPreference", required: true, component: CommitteeInput},
            {question: "2. Komite Tercihi", name: "secondPreference", required: true, component: CommitteeInput},
            {question: "3. Komite Tercihi", name: "thirdPreference", required: true, component: CommitteeInput},
            {question: "İzmir Atatürk Lisesi Gençlik Çalıştayı'nı tercih etme sebebiniz nedir?", name: "reason", required: true, component: TextInput},
            {question: "Konferans sürecinden beklentileriniz neler?", name: "expectation", required: true, component: TextInput},
            {question: "Önceki konferanslarınızda eksikliğini hissetiğiniz veya rahatsız olduğunuz şeyler nedir?", name: "disorder", required: true, component: TextInput},
        ]
    },
    {
        name: ApplicationPosition.ADMIN,
        image: "/positions/gozlemci.webp",
        description: "Gözlemciler konferansın gizli kahramanlarıdır. Yerine getirdikleri görevlerle komitelerin düzeninin sağlanmasına yardımcı olurlar.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput},
            {question: "Görevli olduğunuz alanda (komite,saha,vs) fark ettiğiniz bir eksikliği gidermek için ne yaparsınız? ", name: "proficiency1", required: true, component: TextInput},
            {question: "İzmir Atatürk Lisesi Gençlik Çalıştayı’nı tercih etme sebebiniz nedir?", name: "proficiency2", required: true, component: TextInput},
            {question: "Ortak ekip arkadaşınızın işbirliği yapmadığı ve komitenin ilerleyişini kesintiye uğrattığı bir durumda ne gibi önlemler alacaksınız?", name: "proficiency3", required: true, component: TextInput},
        ]
    },
    {
        name: ApplicationPosition.PRESS,
        image: "/positions/basin.webp",
        description: "Basın üyeleri, kişisel kameralarıyla birlikte konferansın kalıcığına yardımcı olurlar. Komitelerde, aralarda ve genel kurulda çektikleri fotoğraflarla çalıştayın işleyişine ışık tutarlar.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput},
            {question: "Basın ekipmanlarınız", name: "equipment", required: true, component: TextInput},
            {question: "Konferans sırasında çekilen fotoğrafların olası bir gecikme durumununu nasıl önlersiniz?", name: "proficiency1", required: true, component: TextInput},
            {question: "İzmir Atatürk Lisesi Gençlik Çalıştayı’nı tercih etme sebebiniz nedir?", name: "proficiency2", required: true, component: TextInput},
        ]
    },
    /*{
        name: ApplicationPosition.CHAIR,
        image: "/positions/divan.webp",
        description: "Komite divanları akademik tecrübeleri olan ve daha önceden delegelik yapmış, komite başkan ve yardımcısıdır.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput},
            {question: "1. Komite Tercihi", name: "firstPreference", required: true, component: CommitteeInput},
            {question: "2. Komite Tercihi", name: "secondPreference", required: true, component: CommitteeInput},
            {question: "3. Komite Tercihi", name: "thirdPreference", required: true, component: CommitteeInput},
            {question: "Komite divanı arasında bir anlaşmazlık çıktı. Bu durumu nasıl çözersiniz?", name: "proficiency1", required: true, component: TextareaInput},
            {question: "Komite içinde delegelerin aktif katılım göstermemesi durumunda nasıl bir yol izlersiniz?", name: "proficiency2", required: true, component: TextareaInput},
            {question: "Komitede birden fazla delege sözcü olmak istiyor. Delegeler arasındaki seçimi nasıl yaparsınız?", name: "proficiency3", required: true, component: TextareaInput},
            {question: "Çalışma rehberine olan bakış açınız nedir? Sizce ideal bir çalışma rehberi hangi kriterleri karşılamalıdır??", name: "proficiency4", required: true, component: TextInput},
        ]
    }*/
]