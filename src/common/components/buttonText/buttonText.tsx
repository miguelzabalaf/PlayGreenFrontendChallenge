import { StyledButton } from "./styledComponents";

export interface ButtonTextProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

function ButtonText(props: ButtonTextProps): JSX.Element {
    const { children, onClick, disabled, type } = props;
    return (
        <StyledButton disabled={disabled} onClick={onClick} type={type}>
            {children}
        </StyledButton>
    );
}

export default ButtonText;
