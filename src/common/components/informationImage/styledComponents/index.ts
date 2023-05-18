import styled from "styled-components";

export const StyledInformationImagePicture = styled.picture<{ disabled?: boolean; }>`
    height: 55vh;
    width: 100%;
    background-color: ${ ({ theme }) => theme.neutral };
    display: flex;
    border-radius: 0px 0px 32px 32px;
    overflow: hidden;
    position: relative;
    opacity: ${ ({ disabled }) => disabled ? 0.5 : 1 };
`;

export const StyledInformationImageShadow = styled.div`
    position: absolute;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(360deg, #000000 0%, #000000 58.85%, rgba(0, 0, 0, 0) 100%);
    display: flex;
    align-items: center;   
    padding: 0 16px;

    & p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
 `;

export const StyledInformationImageImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    white-space: nowrap;
`;