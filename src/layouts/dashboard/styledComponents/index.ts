import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const StyledBottomTabs = styled.nav`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    height: 85px;
    background-color: ${ ({ theme }) => theme.mode === 'light' ? theme.white : '#2C2B3E' };
    border-radius: 24px;
    display: flex;
    padding: 12px;
    justify-content: space-between;
`;

export const StyledBottomTabsOption = styled(NavLink)`
    width: 59px;
    height: 59px;
    background-color: 'transparent';
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ ({ theme }) => theme.textMuted };

    &:hover { 
        background-color: 'transparent';
    }
    &:active { 
        background-color: 'transparent';
    }

    &.active {
        background-color: ${ ({ theme }) => theme.mode === 'light' ? '#F5F5F5' : '#1F1F31' };
        path {
            fill: ${ ({ theme }) => theme.primary1 };
        }
    }
    
`;