import styled, { css } from "styled-components";

export const Container = styled.section`
    ${({ theme, full, color, justifyContent, alignItems, main }) => css`
        color: ${theme.colors.text};
        min-height: ${full ? "100vh" : "unset"};
        padding: ${theme.spacings[14]};
        background-color: ${color ? color : theme.colors.background};

        display: flex;
        flex-direction: column;
        justify-content: ${justifyContent ? justifyContent : "unset"};
        align-items: ${alignItems ? alignItems : "unset"};

        @media only screen and (max-width: 1200px) {
        padding: ${theme.spacings[14]} ${theme.spacings[4]};
        }
        @media only screen and (max-width: 600px) {
        padding: ${theme.spacings[8]} ${theme.spacings[2]};
        }


        }

    `}
`;
