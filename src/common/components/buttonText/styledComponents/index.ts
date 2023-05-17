import styled from "styled-components";
import { ButtonTextProps } from "../buttonText";

export const StyledButton = styled.button<ButtonTextProps>`
    background: linear-gradient(99deg, #236BFE 6.69%, #0D4ED3 80.95%);
    box-shadow: 0px 4px 30px rgba(34, 105, 251, 0.8);
    border-radius: 25px;
    padding: 22px 38px;
    outline: none;
    border: none;
    width: min-content;
    cursor: pointer;
    font-weight: 600;
    color: ${ (props => props.theme.white) };
    user-select: none;
    opacity: ${ (props) => props.disabled ? 0.5 : 1 };
`;