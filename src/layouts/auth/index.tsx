import { PropsWithChildren } from "react";

function AuthLayout(props: PropsWithChildren): JSX.Element {
    const { children } = props;
    return (
        <div>
            <h1>AuthLayout</h1>
            {children}
        </div>
    );
}

export default AuthLayout;
