import { StyledButton } from "./styledComponents";

export interface ButtonTextProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

function ButtonText(props: ButtonTextProps): JSX.Element {
    const { children, onClick } = props;
    return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default ButtonText;
