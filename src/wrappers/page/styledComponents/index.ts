import styled from "styled-components";

export const StyledPageContainer = styled.div`
    background-color: ${ (props => props.theme.background) };
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

`;