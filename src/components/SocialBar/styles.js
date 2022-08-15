import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        path {
            color: ${theme.colors.text};
        }
        `}
        button:hover {
            transform: scale(1.1);
        }
`;
