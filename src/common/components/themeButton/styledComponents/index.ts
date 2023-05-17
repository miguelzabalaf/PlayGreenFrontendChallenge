import styled from "styled-components";

export const StyledThemeButton = styled.button`
    width:  62px;
    height: 62px;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    background-color: ${ ({ theme }) => theme.mode === "dark" ? theme.background : theme.white };
    font-size: 26px;
`;