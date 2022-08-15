import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
        background-color: ${theme.colors.background};
        color: ${theme.colors.text};

        display: flex;
        align-items: center;
        justify-content: space-between;
                padding: 0 ${theme.spacings[14]};

    `}
`;
