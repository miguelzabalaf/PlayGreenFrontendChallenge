import React from "react";
import Typography from "../../../common/components/typography";
import {
    StyledLoginButtonSection,
    StyledLoginContainer,
    StyledLoginForm,
    StyledLoginTitleSection,
} from "./styledComponents";
import InputText from "../../../common/components/inputText";
import ButtonText from "../../../common/components/buttonText/buttonText";
import useLogin from "./controllers/useLogin";

function Login(): JSX.Element {
    const { register, assignInputName, onSubmitLogin, isValid, loading } =
        useLogin();
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
            <StyledLoginForm onSubmit={onSubmitLogin}>
                <InputText
                    label={"User"}
                    placeholder="miguel@hotmail.com"
                    register={register}
                    name={assignInputName("email")}
                    type={"email"}
                />
                <InputText
                    placeholder="123456"
                    label={"Password"}
                    register={register}
                    name={assignInputName("password")}
                    type="password"
                />
                <Typography.Text weight="normal" size="small">
                    Forgot your password?
                </Typography.Text>
                <StyledLoginButtonSection>
                    <ButtonText
                        disabled={!isValid || loading}
                        onClick={onSubmitLogin}
                    >
                        {"Login"}
                    </ButtonText>
                </StyledLoginButtonSection>
            </StyledLoginForm>
        </StyledLoginContainer>
    );
}

export default Login;
