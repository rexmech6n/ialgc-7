import {SelectHTMLAttributes} from "react";
import SelectInput from "@/app/apply/components/Inputs/SelectInput";

type CommitteeInputProps = {
    question: string
} & SelectHTMLAttributes<HTMLSelectElement>

const options: {label: string, value: string}[] = [
    {label: "Eğitim", value: "Eğitim"},
    {label: "Sağlık", value: "Sağlık"},
    {label: "Güvenlik", value: "Güvenlik"}
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