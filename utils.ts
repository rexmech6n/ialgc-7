import {FC} from "react";
import TextInput from "@/app/apply/components/Inputs/TextInput";
import SelectInput from "@/app/apply/components/Inputs/SelectInput";
import TextareaInput from "@/app/apply/components/Inputs/TextareaInput";
import GradeInput from "@/app/apply/components/Inputs/GradeInput";
import CommitteeInput from "@/app/apply/components/Inputs/CommitteeInput";
import {ApplicationPosition} from "@/types/application";

type Position = {
    name: ApplicationPosition,
    description: string,
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
            {question: "3. Komite Tercihi", name: "thirdPreference", required: true, component: CommitteeInput}
        ]
    },
    {
        name: ApplicationPosition.ADMIN,
        description: "Gözlemciler konferansın gizli kahramanlarıdır. Yerine getirdikleri görevlerle komitelerin düzeninin sağlanmasına yardımcı olurlar.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput}
        ]
    },
    {
        name: ApplicationPosition.PRESS,
        description: "Basın üyeleri, kişisel kameralarıyla birlikte konferansın kalıcığına yardımcı olurlar. Komitelerde, aralarda ve genel kurulda çektikleri fotoğraflarla çalıştayın işleyişine ışık tutarlar.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput},
            {question: "Basın ekipmanlarınız", name: "equipment", required: true, component: TextInput}
        ]
    },
    {
        name: ApplicationPosition.CHAIR,
        description: "Komite divanları akademik tecrübeleri olan ve daha önceden delegelik yapmış, komite başkan ve yardımcısıdır.",
        form: [
            {question: "Ad Soyad", name: "fullName", required: true, component: TextInput},
            {question: "Okul", name: "school", required: true, component: TextInput},
            {question: "Sınıf", name: "grade", required: true, component: GradeInput},
            {question: "Telefon numarası", name: "phone", required: true, component: TextInput},
            {question: "Geçmiş konferans deneyimleri", name: "experiences", required: true, component: TextareaInput},
            {question: "Kendinizden bahsedin", name: "intro", required: true, component: TextareaInput}
        ]
    }
]