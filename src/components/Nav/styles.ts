import styled, { css } from "styled-components";

export const Container = styled.nav`
    ${({ theme }) => css`
        padding: ${theme.spacings[4]} 0;
        background-color: ${theme.colors.background};
        gap: ${theme.spacings[4]};

        color: ${theme.colors.text};
        display: flex;
        flex-direction: row;
        justify-content: space-between:
        align-items: center;

        button {
        color: ${theme.colors.text};

        }
        #drawer-nav-buttons {
            display: none;
        }

        @media only screen and (max-width: 600px){
        #drawer-nav-buttons {
            display: block;
        }
        #nav-buttons {
            display: none;
        }
}
    `}
`;
