import styled, { css } from "styled-components";

export const Container = styled.section`
    ${({ theme, color, justifyContent = "unset", alignItems = "unset" }) => css`
        color: ${theme.colors.text};
        padding: ${theme.spacings[14]};
        background-color: ${color ? color : theme.colors.background};

        display: flex;
        flex-direction: column;
        justify-content: ${justifyContent};
        align-items: ${alignItems};

        @media only screen and (max-width: 1200px) {
        padding: ${theme.spacings[14]} ${theme.spacings[4]};
        }
        @media only screen and (max-width: 600px) {
        padding: ${theme.spacings[8]} ${theme.spacings[2]};
        }


        }

    `}
`;
