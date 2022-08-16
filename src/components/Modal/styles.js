import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme, alignItems, justifyContent }) => css`
        background-color: ${theme.colors.surface};
        border-radius: 10px;
        padding: ${theme.spacings[5]};
        min-height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: ${justifyContent ? justifyContent : "center"};
        align-items: ${alignItems ? alignItems : "center"};
    `}
`;
