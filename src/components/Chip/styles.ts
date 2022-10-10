import styled, { css } from "styled-components";

interface ContainerInterface {
    theme: any;
    color?: any;
}
export const Container = styled.label`
    ${({ theme, color }: ContainerInterface) => css`
        padding: 10px;
        /* border: 2px solid #2254c5; */
        background: ${theme.colors.surface};
        color: ${color ? color : theme.colors.text};
        gap: 10px;
        border-radius: 5px;
        margin: 2px;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;

        path {
        color: ${theme.colors.primaryVariant};

        }
    `}
`;

export const Wrapper = styled.div`
    ${({ theme }: ContainerInterface) => css`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `}
`;
