import { UseFormRegister } from "react-hook-form";
import {
    StyledInput,
    StyledInputTextContainer,
    StyledLabel,
} from "./styledComponents";

export interface InputTextProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label?: string;
    type?: "text" | "password" | "email" | undefined;
    placeholder?: string;
    register?: UseFormRegister<any>;
    name?: string;
}

function InputText(props: InputTextProps): JSX.Element {
    const { label, type, placeholder, register, name } = props;
    return (
        <StyledInputTextContainer>
            {label && (
                <StyledLabel htmlFor={`${name}-inputText`}>{label}</StyledLabel>
            )}
            {register && name && (
                <StyledInput
                    {...props}
                    {...register(name)}
                    type={type}
                    id={`${name}-inputText`}
                    placeholder={placeholder}
                />
            )}
        </StyledInputTextContainer>
    );
}

export default InputText;
