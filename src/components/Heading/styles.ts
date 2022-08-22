import styled, { css } from "styled-components";

interface WrapperType {
    theme: any;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

}

export const Wrapper = styled.h1`
    ${({ theme, as }: WrapperType) => css`
        color: ${theme.colors.text};
        font-size: ${as === 'h1' && theme.fontSizes.lg};
        font-size: ${as === 'h2' && theme.fontSizes.md};
        font-size: ${as === 'h3' && theme.fontSizes.sm};

        margin: ${theme.spacings[5]} 0;

        
    `}
`;
