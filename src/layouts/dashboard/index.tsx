import { PropsWithChildren } from "react";

function DashboardLayout(props: PropsWithChildren): JSX.Element {
    const { children } = props;
    return (
        <div>
            <h1>DashboardLayout</h1>
            {children}
        </div>
    );
}

export default DashboardLayout;
