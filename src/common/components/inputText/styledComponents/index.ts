import styled from "styled-components";

export const StyledInputTextContainer = styled.div`
    height: 67px;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${ (props => props.theme.theme === 'light' ? props.theme.white : '#2F2F43') };
    margin-bottom: 10px;
    border-radius: 18px;
    padding: 10px 12px;
`;

export const StyledLabel = styled.label`
    font-size: 14px;
    color: ${ (props => props.theme.text) };
    opacity: 0.6;
    margin-bottom: 5px;
`;

export const StyledInput = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    background-color: ${ (props => props.theme.theme === 'light' ? props.theme.white : '#2F2F43') };
    color: ${ (props => props.theme.text) };
`;