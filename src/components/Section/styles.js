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


        }

    `}
`;
