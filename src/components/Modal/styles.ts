import styled, { css } from "styled-components";
import type { ContainerInterface } from "../../utils/types";
export const Container = styled.div`
    ${({
        theme,
        alignItems = "center",
        justifyContent = "center",
    }: ContainerInterface) => css`
        background-color: ${theme.colors.surface};
        border-radius: 10px;
        padding: ${theme.spacings[5]};
        min-height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        transition: all .3s;

        :hover {
            transform: scale(1.02);
            cursor: pointer;
        }
    `}
`;
