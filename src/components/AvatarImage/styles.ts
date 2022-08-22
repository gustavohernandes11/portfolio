import styled, { css } from "styled-components";



export const Container = styled.div`
    ${({ theme }: any) => css`
        background: ${theme.colors.surfaceGradient};
        border-radius: 50%;
        border: 5px solid ${theme.colors.text};

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        width: 250px;
        height: 250px;

        img {
            border-radius: 50%;
        }
    `}
`;

export const Wrapper = styled.div`
    ${({ theme }) => css`
        /* background: ${theme.colors.gradient};
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        width: 260px;
        height: 260px; */
    `}
`;
