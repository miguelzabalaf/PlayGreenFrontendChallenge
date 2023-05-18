import styled from "styled-components";
import { TextProps, TitleProps } from "../typography";

export const StyledTitle = styled.p<TitleProps>`
    font-size: ${ (props => {
        switch (props.size) {
            case 'h1':
                return '42px';
            case 'h2':
                return '34px';
            case 'h3':
                return '24px';
            default:
                return '42px';
        }
    }) };
    font-weight: ${ (props => props.weight) };
    text-align: ${ (props => props.center ? 'center' : 'initial') };
    color: ${ (props => props.color !== undefined ? props.color : props.theme.title) };
    line-height: 150%;
`;

export const StyledText = styled.p<TextProps>`
    font-size: ${ (props => {
        switch (props.size) {
            case 'small':
                return '12px';
            case 'medium':
                return '14px';
            case 'normal':
                return '16px';
            default:
                return '16px';
        }

    }) };
    font-weight: ${ (props => props.weight) };
    text-align: ${ (props => props.center ? 'center' : 'initial') };
    color: ${ (props => props.color !== undefined ? props.color : props.theme.text) };
    line-height: 150%;
`;