import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};
        z-index: ${theme.zIndices.sticky};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 ${theme.spacings[14]};

        position: sticky;
        top: 0;

        @media only screen and (max-width: 600px) {
            flex-direction: row;
            padding: 0 ${theme.spacings[4]};
            font-size: ${theme.fontSizes.xs};
        }
    `}
`;
