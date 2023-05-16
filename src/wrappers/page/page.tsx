import { PropsWithChildren } from "react";
import { StyledPageContainer } from "./styledComponents";

function Page(props: PropsWithChildren): JSX.Element {
    const { children } = props;
    return <StyledPageContainer>{children}</StyledPageContainer>;
}

export default Page;
