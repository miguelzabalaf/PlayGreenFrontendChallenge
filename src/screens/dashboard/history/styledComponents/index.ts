import styled from "styled-components";

export const StyledHistoryContainer = styled.div`
    position: relative;
    padding: 20px;
    `;

export const StyledHistoryButtonBackContainer = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    path {
        stroke: ${ ({ theme }) => theme.mode === 'dark' ? theme.white : '#232232' };
    }
    `;

export const StyledHistoryListContainer = styled.div`
    display: flex;
    flex-direction: column;
    top: 0;
    position: fixed;
    bottom: 150px;
    right: 20px;
    left: 20px;
    top: 225px;
    overflow-y: scroll;
`;