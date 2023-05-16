import { PropsWithChildren } from "react";
import { StyledText, StyledTitle } from "./styledComponents";

export interface TextBaseProps extends PropsWithChildren {
    color?: string;
    weight?: "bold" | "normal" | "medium" | "light";
    center?: boolean;
}

export interface TitleProps extends PropsWithChildren, TextBaseProps {
    size?: "h1" | "h2" | "h3";
}

export interface TextProps extends PropsWithChildren, TextBaseProps {
    size?: "small" | "medium" | "normal";
}

export function Title(props: TitleProps): JSX.Element {
    const { children } = props;
    return <StyledTitle {...props}>{children}</StyledTitle>;
}

export function Text(props: TextProps): JSX.Element {
    const { children } = props;
    return <StyledText {...props}>{children}</StyledText>;
}
