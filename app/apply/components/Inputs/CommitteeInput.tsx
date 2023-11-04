import {SelectHTMLAttributes} from "react";
import SelectInput from "@/app/apply/components/Inputs/SelectInput";

type CommitteeInputProps = {
    question: string
} & SelectHTMLAttributes<HTMLSelectElement>

const options: {label: string, value: string}[] = [
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

const CommitteeInput = ({question, ...props}: CommitteeInputProps) => {
    return (
        <SelectInput
            label={question}
            options={options}
            {...props}
        />
    );
};

export default CommitteeInput;