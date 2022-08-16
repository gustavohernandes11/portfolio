import styled, { css } from "styled-components";

export const Container = styled.footer`
    ${({ theme }) => css`
        padding: ${theme.spacings[4]} ${theme.spacings[14]};
        background: ${theme.colors.surface};
        color: grey;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.spacings[4]};
    `}
`;
