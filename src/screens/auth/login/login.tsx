import React from "react";
import Typography from "../../../common/components/typography";
import {
    StyledLoginButtonSection,
    StyledLoginContainer,
    StyledLoginForm,
    StyledLoginTitleSection,
} from "./styledComponents";
import InputText from "../../../common/components/inputText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonText from "../../../common/components/buttonText/buttonText";

interface FormLoginProps {
    user: string;
    password: string;
}

type FormLoginPropsKeys = {
    [type in keyof FormLoginProps]: yup.AnySchema;
};

function Login(): JSX.Element {
    const loginSchema = yup.object().shape<FormLoginPropsKeys>({
        user: yup.string().required(),
        password: yup.string().required(),
    });
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<FormLoginProps>({
        resolver: yupResolver(loginSchema),
    });
    return (
        <StyledLoginContainer>
            <StyledLoginTitleSection>
                <Typography.Title weight="bold" size="h1" center>
                    Welcome
                </Typography.Title>
                <Typography.Text weight="medium" center>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography.Text>
            </StyledLoginTitleSection>
            <StyledLoginForm>
                <InputText label={"User"} register={register} name={"user"} />
                <InputText
                    label={"Password"}
                    register={register}
                    name={"password"}
                    type="password"
                />
            </StyledLoginForm>
            <Typography.Text weight="normal" size="small">
                Forgot your password?
            </Typography.Text>
            <StyledLoginButtonSection>
                <ButtonText>Login</ButtonText>
            </StyledLoginButtonSection>
        </StyledLoginContainer>
    );
}

export default Login;
