import { PropsWithChildren } from "react";
import Page from "../../wrappers/page";

function AuthLayout(props: PropsWithChildren): JSX.Element {
    const { children } = props;
    return <Page>{children}</Page>;
}

export default AuthLayout;
