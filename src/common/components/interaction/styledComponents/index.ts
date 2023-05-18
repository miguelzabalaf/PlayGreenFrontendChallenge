import styled from "styled-components";
import { Interactions } from "../../../controllers/firebase/types";

export const StyledInteractionContainer = styled.div`
    display: flex;
    width: 100%;
    height: 77px;
    border-radius: 12px;
    background-color: ${ ({ theme }) => theme.mode === 'light' ? theme.white : '#212135' };
    margin-bottom: 14px;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
`;

export const StyledInteractionImageContainer = styled.img`
    height: 100%;
    width: 75%;
    border: none;
    object-fit: cover;
    filter: brightness(0.4);
    object-position: center;
`;

export const StyledInteractionNameContainer = styled.div`
    position: absolute;
    top: 0;
    left: 15px;
    bottom: 0;
    display: flex;
    align-items: center;    
`;

export const StyledInteractionIcon = styled.div<{ interaction: Interactions; }>`
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    path {
        fill: ${ ({ theme, interaction }) => interaction === 'hate' ? theme.danger : theme.mode === 'dark' ? theme.white : theme.primary1 };
    }
`;