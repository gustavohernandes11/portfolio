import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
    color?: any;
}
export const Container = styled.label`
    ${({ theme, color }: ContainerInterface) => css`
        padding: 10px;
        border: 1px solid ${theme.colors.primary};
        border-radius: 5px;
        margin: 2px;
        color: ${color ? color : theme.colors.primaryVariant};
        display: flex;
    `}
`;

export const Wrapper = styled.div`
    ${({ theme }: ContainerInterface) => css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `}
`;