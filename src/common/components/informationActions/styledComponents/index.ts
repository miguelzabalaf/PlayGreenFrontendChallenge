import styled from "styled-components";

export const StyledInformationActionsContainer = styled.div`
    width: 150px;
    height: 80px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between; 
    align-items: center;
`;

export const StyledInformationActionHate = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${ ({ disabled }) => disabled ? 0.5 : 1 };
    background-color: ${ ({ theme }) => theme.mode === 'dark' ? '#222243' : theme.white };
    path {
        fill: ${ ({ theme }) => theme.mode === 'dark' ? theme.white : theme.danger };
    }
    `;

export const StyledInformationActionLove = styled.button`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${ ({ disabled }) => disabled ? 0.5 : 1 };
    background: linear-gradient(125.02deg, #236BFE -17.11%, #063BA8 98.58%);
    box-shadow: 0px 10px 25px rgba(35, 107, 254, 0.2);
    path {
        fill: white;
    }
`;