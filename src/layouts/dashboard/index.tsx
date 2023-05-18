import { PropsWithChildren } from "react";
import Page from "../../wrappers/page";
import { StyledBottomTabs, StyledBottomTabsOption } from "./styledComponents";
import useDashboardLayout from "./controllers/useDashboardLayout";

function DashboardLayout(props: PropsWithChildren): JSX.Element {
    const { children } = props;
    const { bottomTabsOptions } = useDashboardLayout();
    return (
        <Page>
            {children}
            <StyledBottomTabs>
                {bottomTabsOptions.map((option) => (
                    <StyledBottomTabsOption
                        key={option.id}
                        to={option.to}
                        onClick={option.onClick}
                    >
                        {option.icon}
                    </StyledBottomTabsOption>
                ))}
            </StyledBottomTabs>
        </Page>
    );
}

export default DashboardLayout;
